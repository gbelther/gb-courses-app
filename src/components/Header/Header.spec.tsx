import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Header } from ".";
import { darkTheme } from "../../styles/themes";

export const renderTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>);
};

describe("Header component", () => {
  renderTheme(<Header />);

  it("should render correctly", () => {
    const logoName = screen.getByText(/GB-COURSES/i);

    expect(logoName).toBeInTheDocument();
  });
});
