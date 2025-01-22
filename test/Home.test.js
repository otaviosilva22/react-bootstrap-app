import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../src/components/Home";

jest.useFakeTimers();

describe("Teste do componente home", () => {
  it("Testa a renderização do componente", () => {
    render(<Home />);

    expect(screen.getByText("Nanitita & Nenequito")).toBeInTheDocument();
  });
});
