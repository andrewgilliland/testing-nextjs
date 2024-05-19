import Greet from "@/components/Greet";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Biff" />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/biff/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
