/**
 * Kabsch superposition, ported from the framejs prototype at
 * /j/019f2b55e1f57722af0293acbda78362.
 *
 * The Pairs view puts one molecule above the other and draws a line between
 * every mapped pair. That only reads as a correspondence if the two are aligned
 * first: unaligned, the lines cross each other and say nothing. Kabsch finds the
 * rotation and translation that minimise the distance between the mapped atoms,
 * which is what makes the lines parallel when the mapping is good and splayed
 * when it is not - the thing you are looking at the view to find out.
 *
 * The SVD is done by Jacobi eigendecomposition of H'H and HH', because three by
 * three is small enough that pulling in a linear algebra library to do it would
 * cost more than it saves. Matrices are row-major flat arrays of nine.
 */

export type Vec3 = [number, number, number];

/** A rigid transform: rotate by `R`, then translate by `t`. */
export interface Transform {
  R: number[];
  t: Vec3;
}

function mat3Mul(a: number[], b: number[]): number[] {
  const r = new Array<number>(9);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      r[i*3+j] = a[i*3]*b[j] + a[i*3+1]*b[3+j] + a[i*3+2]*b[6+j];
    }
  }
  return r;
}
function mat3Transpose(m: number[]): number[] {
  return [m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]];
}
function mat3Det(m: number[]): number {
  return m[0]*(m[4]*m[8] - m[5]*m[7])
       - m[1]*(m[3]*m[8] - m[5]*m[6])
       + m[2]*(m[3]*m[7] - m[4]*m[6]);
}
function jacobiSym3(M: number[]): { values: number[]; vectors: number[] } {
  const a = M.slice();
  const v = [1,0,0, 0,1,0, 0,0,1];
  for (let sweep = 0; sweep < 50; sweep++) {
    const off = Math.abs(a[1]) + Math.abs(a[2]) + Math.abs(a[5]);
    if (off < 1e-12) break;
    const pairs = [[0,1],[0,2],[1,2]];
    for (let pi = 0; pi < 3; pi++) {
      const p = pairs[pi][0], q = pairs[pi][1];
      const apq = a[p*3+q];
      if (Math.abs(apq) < 1e-14) continue;
      const app = a[p*3+p], aqq = a[q*3+q];
      const theta = (aqq - app) / (2*apq);
      let t: number;
      if (Math.abs(theta) > 1e10) {
        t = 1/(2*theta);
      } else {
        const sign = theta >= 0 ? 1 : -1;
        t = sign / (Math.abs(theta) + Math.sqrt(theta*theta + 1));
      }
      const c = 1/Math.sqrt(1 + t*t);
      const s = t*c;
      a[p*3+p] = app - t*apq;
      a[q*3+q] = aqq + t*apq;
      a[p*3+q] = 0; a[q*3+p] = 0;
      for (let r = 0; r < 3; r++) {
        if (r !== p && r !== q) {
          const arp = a[r*3+p], arq = a[r*3+q];
          a[r*3+p] = c*arp - s*arq; a[p*3+r] = a[r*3+p];
          a[r*3+q] = s*arp + c*arq; a[q*3+r] = a[r*3+q];
        }
      }
      for (let k = 0; k < 3; k++) {
        const vkp = v[k*3+p], vkq = v[k*3+q];
        v[k*3+p] = c*vkp - s*vkq;
        v[k*3+q] = s*vkp + c*vkq;
      }
    }
  }
  return { values: [a[0], a[4], a[8]], vectors: v };
}

/**
 * The transform that best superposes `Q` onto `P`, or `null` for no points.
 *
 * Fewer than three points cannot determine a rotation, so those get a pure
 * translation of the centroids - which is right rather than a fallback: two
 * points have no orientation to recover.
 */
export function kabsch(P: readonly Vec3[], Q: readonly Vec3[]): Transform | null {
  const n = Math.min(P.length, Q.length);
  if (n < 1) return null;
  const cP: Vec3 = [0, 0, 0];
  const cQ: Vec3 = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    cP[0] += P[i][0]; cP[1] += P[i][1]; cP[2] += P[i][2];
    cQ[0] += Q[i][0]; cQ[1] += Q[i][1]; cQ[2] += Q[i][2];
  }
  cP[0]/=n; cP[1]/=n; cP[2]/=n;
  cQ[0]/=n; cQ[1]/=n; cQ[2]/=n;
  if (n < 3) {
    return { R: [1,0,0, 0,1,0, 0,0,1], t: [cP[0]-cQ[0], cP[1]-cQ[1], cP[2]-cQ[2]] };
  }
  const H = [0,0,0, 0,0,0, 0,0,0];
  for (let k = 0; k < n; k++) {
    const px = P[k][0]-cP[0], py = P[k][1]-cP[1], pz = P[k][2]-cP[2];
    const qx = Q[k][0]-cQ[0], qy = Q[k][1]-cQ[1], qz = Q[k][2]-cQ[2];
    H[0] += px*qx; H[1] += px*qy; H[2] += px*qz;
    H[3] += py*qx; H[4] += py*qy; H[5] += py*qz;
    H[6] += pz*qx; H[7] += pz*qy; H[8] += pz*qz;
  }
  const Ht = mat3Transpose(H);
  const HtH = mat3Mul(Ht, H);
  const HHt = mat3Mul(H, Ht);
  let eV = jacobiSym3(HtH);
  let eU = jacobiSym3(HHt);
  function sortEig(e: { values: number[]; vectors: number[] }): { values: number[]; vectors: number[] } {
    const idx = [0,1,2].sort((a, b) => e.values[b] - e.values[a]);
    const sortedVec = new Array<number>(9);
    for (let c = 0; c < 3; c++) {
      const src = idx[c];
      sortedVec[c]   = e.vectors[src];
      sortedVec[3+c] = e.vectors[3+src];
      sortedVec[6+c] = e.vectors[6+src];
    }
    return {
      values: [e.values[idx[0]], e.values[idx[1]], e.values[idx[2]]],
      vectors: sortedVec
    };
  }
  eV = sortEig(eV);
  eU = sortEig(eU);
  const V = eV.vectors;
  const U = eU.vectors;
  for (let col = 0; col < 3; col++) {
    const vx = V[col], vy = V[3+col], vz = V[6+col];
    const hx = H[0]*vx + H[1]*vy + H[2]*vz;
    const hy = H[3]*vx + H[4]*vy + H[5]*vz;
    const hz = H[6]*vx + H[7]*vy + H[8]*vz;
    const ux = U[col], uy = U[3+col], uz = U[6+col];
    const dot = hx*ux + hy*uy + hz*uz;
    if (dot < 0) {
      U[col]   = -ux;
      U[3+col] = -uy;
      U[6+col] = -uz;
    }
  }
  const Vt = mat3Transpose(V);
  let R = mat3Mul(U, Vt);
  if (mat3Det(R) < 0) {
    U[2] = -U[2];
    U[5] = -U[5];
    U[8] = -U[8];
    R = mat3Mul(U, Vt);
  }
  const rcQx = R[0]*cQ[0] + R[1]*cQ[1] + R[2]*cQ[2];
  const rcQy = R[3]*cQ[0] + R[4]*cQ[1] + R[5]*cQ[2];
  const rcQz = R[6]*cQ[0] + R[7]*cQ[1] + R[8]*cQ[2];
  return { R, t: [cP[0]-rcQx, cP[1]-rcQy, cP[2]-rcQz] };
}

/** `coord` rotated by `R` and translated by `t`. */
export function applyRT(coord: Vec3, R: number[], t: Vec3): Vec3 {
  const x = coord[0], y = coord[1], z = coord[2];
  return [
    R[0]*x + R[1]*y + R[2]*z + t[0],
    R[3]*x + R[4]*y + R[5]*z + t[1],
    R[6]*x + R[7]*y + R[8]*z + t[2]
  ];
}
