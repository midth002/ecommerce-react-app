import { responsiveFontSizes, PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    paper: string;
    default: string;
    dark: string;
    level2: string;
    level1: string;
    light: string;
  }

  interface Palette {
    alternate: {
      main: string;
      dark: string;
    };
    cardShadow: string;
    mode: PaletteMode;
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    text: TypeText;
    divider: string;
    background: TypeBackground;
  }
  interface PaleteOptions {
    alternate?: {
      main: string;
      dark: string;
    };
    cardShadow?: string;
    mode?: PaletteMode;
    primary?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary?: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    text?: {
      primary: string;
      secondary: string;
    };
    divider?: string;
    background?: {
      paper: string;
      default: string;
      dark: string;
      level2: string;
      level1: string;
      light: string;
    };
  }
}

// Pending on design
export const light = {
  alternate: {
    main: "#3776ff",
    dark: "#edf1f7",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  mode: "light" as PaletteMode,
  primary: {
    main: "#812bea",
    light: "#2196f3",
    dark: "#0d47a1",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ffb74d",
    main: "#b142ec",
    dark: "#FF9800",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#2d3748",
    secondary: "#646e73",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#fff",
    dark: "#181828",
    level2: "#f5f5f5",
    level1: "#fff",
    light: "#2d354e",
  },
};

// Temporary dark version
export const dark = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#01b65f",
    light: "",
    dark: "",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#d14343",
    light: "",

    dark: "#2F2F2F",
    contrastText: "#ffffff",

  },
  background: {
    paper: "#2e2e48",
    default: "#171725",
  },
  info: {
    main: "#3f36a9",
    contrastText: "#ffffff",
  },
};

// Palette 's Dark/Light Logic
const palette = (themeMode: string) => {
  return themeMode === "dark" ? dark : light;
};

const getTheme = (mode: string) => {
  return responsiveFontSizes(
    createTheme({
      palette: palette(mode),
      components: {},
    })
  );
};

export default getTheme;