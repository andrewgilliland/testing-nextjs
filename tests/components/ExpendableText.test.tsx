import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpandableText from "@/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "_".repeat(limit + 1);
  const truncatedText = `${longText.substring(0, limit)}...`;

  it(`should render the full text if less than or equal to ${limit} characters`, () => {
    // Arrange
    render(<ExpandableText text="Hello, World!" />);

    // Act
    const article = screen.getByRole("article");

    // Assert
    expect(article).toBeInTheDocument();
  });

  it(`should render the truncated text with a Show More button if more than ${limit} characters`, () => {
    // Arrange

    render(<ExpandableText text={longText} />);

    // Act and Assert
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render the long text when Show More button is clicked", async () => {
    // Arrange
    render(<ExpandableText text={longText} />);

    // Act
    const showMoreButton = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    // Assert
    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(screen.getByText(/less/i)).toBeInTheDocument();
  });

  it("should render the truncated text when Show Less button is clicked", async () => {
    // Arrange
    render(<ExpandableText text={longText} />);

    // Act
    const showMoreButton = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);
    const showLessButton = screen.getByRole("button", { name: /less/i });
    await user.click(showLessButton);

    // Assert
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
