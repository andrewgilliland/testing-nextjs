import Image from "next/image";

const ProductImageGallery = ({ imageUrls }: { imageUrls: string[] }) => {
  if (imageUrls.length === 0) return null;

  return (
    <ul>
      {imageUrls.map((url) => {
        return (
          <li key={url}>
            <img role="img" src={url} alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductImageGallery;
