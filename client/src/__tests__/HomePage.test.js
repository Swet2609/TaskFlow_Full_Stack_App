import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage", () => {
  test("renders welcome message", () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to TaskFlow/i)).toBeInTheDocument();
  });

  test("has Get Started button", () => {
    render(<HomePage />);
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });
});
