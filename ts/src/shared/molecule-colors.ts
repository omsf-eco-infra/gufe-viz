/**
 * Colours that mean something chemical, for the 3D mapping modes.
 *
 * Kept apart from `style.ts` deliberately. Those are interface colours - the
 * background of a button, the border of a panel - and they are ours to change
 * whenever the interface should look different. These are not: they say which
 * atoms carry over and which do not, so changing one changes what a picture
 * *claims*, and a reader who has learned them elsewhere is entitled to see the
 * same thing here.
 *
 * Two chemical sources, and this is the second of them:
 *
 *   `atom-colors.ts`      generated, mirrored from gufe and matplotlib - the
 *                         mapping highlights, in 2D and now in 3D-Map, and the
 *                         3D Overlay pair ramp
 *   this file             the framejs prototype's 3D mode colours, at
 *                         /j/019f2b55e1f57722af0293acbda78362
 *
 * Both are mirrors of something that already exists. Neither is a palette
 * anybody here invented, and neither belongs in the interface theme.
 *
 * 3Dmol wants `0x`-prefixed colour strings, which is the form these are in.
 */

/** How light and dark differ. Only the light values are tuned for print. */
interface MoleculeColors {
  /** Atoms that carry over between the two molecules, and 3D-Map's unmarked ones. */
  core: string;
  /** The line drawn between a mapped pair in Pairs mode. */
  pairLine: string;
}

const DARK: MoleculeColors = {
  core: "0xaaaaaa",
  pairLine: "0xffee55",
};

const LIGHT: MoleculeColors = {
  core: "0x888888",
  pairLine: "0xd9a300",
};

function prefersDark(): boolean {
  try {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch {
    return false;
  }
}

/** The set in use, chosen once at load like the interface theme is. */
export const MOL: MoleculeColors = prefersDark() ? DARK : LIGHT;
