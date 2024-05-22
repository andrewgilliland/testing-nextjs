import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpandableText from "@/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  it("should render the full text if less than or equal to 255 characters", () => {
    // Arrange
    render(<ExpandableText text="Hello, World!" />);

    // Act
    const article = screen.getByRole("article");

    // Assert
    expect(article).toBeInTheDocument();
  });

  it("should render the truncated text with a Show More button if more than 255 characters", () => {
    // Arrange
    render(
      <ExpandableText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eaque non vero facilis voluptatem, autem unde quia. Itaque esse eius quisquam veritatis quam, aspernatur, accusantium, porro cupiditate eligendi atque hic dolores eveniet placeat omnis molestiae. Totam similique quasi tempore quidem nobis in eaque eveniet sapiente, quod unde neque reprehenderit repellat a voluptatum hic quisquam. Soluta deserunt voluptatem voluptate magni dolore excepturi consectetur maiores, vel, suscipit cumque temporibus tempore reprehenderit veniam possimus quos sed nemo asperiores. Vero aliquam id totam deleniti repellendus itaque maiores voluptates accusantium, repudiandae magni. Nihil repellendus nemo soluta debitis corporis quas, quam consequuntur quia dolorem temporibus itaque." />
    );

    // Act
    const article = screen.getByRole("article");
    const button = screen.getByRole("button");

    // Assert
    expect(article).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render the full text when Show More button is clicked", () => {
    // Arrange
    render(
      <ExpandableText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eaque non vero facilis voluptatem, autem unde quia. Itaque esse eius quisquam veritatis quam, aspernatur, accusantium, porro cupiditate eligendi atque hic dolores eveniet placeat omnis molestiae. Totam similique quasi tempore quidem nobis in eaque eveniet sapiente, quod unde neque reprehenderit repellat a voluptatum hic quisquam. Soluta deserunt voluptatem voluptate magni dolore excepturi consectetur maiores, vel, suscipit cumque temporibus tempore reprehenderit veniam possimus quos sed nemo asperiores. Vero aliquam id totam deleniti repellendus itaque maiores voluptates accusantium, repudiandae magni. Nihil repellendus nemo soluta debitis corporis quas, quam consequuntur quia dolorem temporibus itaque." />
    );

    // Act
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    user.click(button);

    // Assert
    expect(screen.getByText(/show less/i)).toBeInTheDocument();
  });
});
