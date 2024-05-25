import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TermsAndConditions from "@/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  it("should render with the correct text and initial state", () => {
    //* All assertions involving rending in one test
    // Arrange and Act
    const { heading, checkbox, button } = renderComponent();

    // Assert (UI)
    expect(heading).toHaveTextContent("Terms and Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    // Arrange
    // render(<TermsAndConditions />);
    const { checkbox, button } = renderComponent();

    // Act
    const user = userEvent.setup();
    await user.click(checkbox);

    // Assert
    expect(button).toBeEnabled();
  });
});
