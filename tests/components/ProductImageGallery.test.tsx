import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductImageGallery from "@/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render no images when the imagesUrls array is empty", () => {
    // Arrange
    const imageUrls: string[] = [];

    // Act
    const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);

    // Assert
    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    // Arrange
    const imageUrls = ["/url1", "/url2", "/url3"];

    // Act
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const img = screen.getAllByRole("img");

    // Assert
    expect(img).toHaveLength(3);
    imageUrls.forEach((url, index) => {
      expect(img[index]).toHaveAttribute("src", url);
    });
  });
});
