/**
 * Test setup, run before every file.
 *
 * Views remember their controls in `localStorage`, which is exactly what makes
 * them worth having and exactly what makes tests bleed into each other: a search
 * box left with a query in one test filters every ligand out of the next, and
 * the failure surfaces somewhere unrelated. Clearing between tests is not
 * optional once anything persists.
 */

import { beforeEach } from "vitest";
import { resetSettings } from "../src/shared/settings.js";

beforeEach(() => {
  resetSettings();
});
