export const darkTheme = {
  name: "dark-theme",
  colors: {
    primary: "#EDF2F7",
    secondary: "#F687B3",
    warning: "#ECC94B",
    success: "#48BB78",
    warningText: "#000",
    background: "#1A202C",
  },
  fontFamily: {
    roboto: "'Roboto', sans-serif",
  },
  breakPoints: {
    xl: "1280px",
  },
};

export type ITheme = typeof darkTheme;
