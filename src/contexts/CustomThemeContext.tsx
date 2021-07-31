import { createContext, ReactNode, useCallback, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/themes";

interface ICustomThemeContext {
  theme: DefaultTheme;
  toggleTheme: (themeName: string) => void;
}

interface ICustomThemeProvider {
  children: ReactNode;
}

export const CustomThemeContext = createContext<ICustomThemeContext>(
  {} as ICustomThemeContext
);

export const CustomThemeProvider = ({ children }: ICustomThemeProvider) => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = useCallback((themeName: string) => {
    switch (themeName) {
      case "dark-theme":
        setCurrentTheme(darkTheme);
        break;
      default:
        setCurrentTheme(darkTheme);
        break;
    }
  }, []);

  return (
    <CustomThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
