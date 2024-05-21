import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TermsAndConditions from "@/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should render with the correct text and initial state", () => {
    //* All assertions involving rending in one test
    // Arrange
    render(<TermsAndConditions />);

    // Act
    const heading = screen.getByRole("heading", {
      name: /terms and conditions/i,
    });

    // Assert
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms and Conditions");

    // Act
    const checkbox = screen.getByRole("checkbox");

    // Assert
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // Act
    const button = screen.getByRole("button", { name: /submit/i });

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    // Arrange
    render(<TermsAndConditions />);

    // Act
    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    // Assert
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
