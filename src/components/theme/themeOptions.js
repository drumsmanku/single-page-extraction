import { THEMES } from "../constants/constants";
import { darkPalette, lightPalette } from "./colors";
const themesOptions = {
  [THEMES.LIGHT]: {
    palette: lightPalette
  },
  [THEMES.DARK]: {
    palette: darkPalette
  }
};
export default themesOptions;