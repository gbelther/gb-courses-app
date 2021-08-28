import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Header } from ".";
import { darkTheme } from "../../styles/themes";

export const renderTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>);
};

describe("Header component", () => {
  it("should render nav items correcly", () => {
    renderTheme(<Header />);
    const homeItem = screen.getByText(/home/i);
    const cursosItem = screen.getByText(/cursos/i);
    const instrutorItem = screen.getByText(/Instrutor/i);

    expect(homeItem).toBeInTheDocument();
    expect(cursosItem).toBeInTheDocument();
    expect(instrutorItem).toBeInTheDocument();
  });

  // it("should redirect to courses page when click on cursos", () => {
  //   renderTheme(<Header />);

  //   const coursesItem = screen.getByRole("link", {
  //     name: /cursos/i,
  //   });

  //   coursesItem.click();
  // });
});
