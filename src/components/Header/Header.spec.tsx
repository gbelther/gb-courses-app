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

  it("should render nav items correcly", () => {
    const homeItem = screen.getByText(/home/i);
    const cursosItem = screen.getByText(/cursos/i);
    const instrutorItem = screen.getByText(/Instrutor/i);

    expect(homeItem).toBeInTheDocument();
    expect(cursosItem).toBeInTheDocument();
    expect(instrutorItem).toBeInTheDocument();
  });
});
