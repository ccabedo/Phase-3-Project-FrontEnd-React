import { useState } from "react";

function ProductCard({ price, product_name, images }) {
  const [toggleImage, setToggleImage] = useState(true);

  const handleMouseOver = () => {
    setToggleImage(!toggleImage);
  };

  return (
    <li className="card">
      <div className="block">
        {toggleImage ? (
          <img
            className="pl-7"
            src={images[0]["image_1"]}
            alt={"1"}
            onMouseEnter={handleMouseOver}
          />
        ) : (
          <img
            className="pl-7"
            src={images[0]["image_2"]}
            alt={"2"}
            onMouseLeave={handleMouseOver}
          />
        )}
      </div>
      <h4>{product_name}</h4>
      <p>Price: ${price}</p>
      {true ? (
        <button className="primary" type="submit">
          Add to Cart
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default ProductCard;
