import { useState } from "react";

function ProductCard({ product, price, product_name, images, addToCart}) {
  const [toggleImage, setToggleImage] = useState(true);
  // console.log(images[0].image_1)
  const handleMouseOver = () => {
    setToggleImage(!toggleImage);
  };

  // console.log(product)
  // function handleClick() {
  //   addToCart(product)
  // }

  return (
    <li className="card">
      <div className="block">
        {toggleImage ? (
          <img
            className="pl-7"
            src={images[0]?.image_1}
            alt={"1"}
            onMouseEnter={handleMouseOver}
          />
        ) : (
          <img
            className="pl-7"
            src={images[0]?.image_2}
            alt={"2"}
            onMouseLeave={handleMouseOver}
          />
        )}
      </div>
      <h4>{product_name}</h4>
      <p>Price: ${price}</p>
      {true ? (
        <button className="primary" type="submit" onClick={(e)=>{addToCart(product)}}>
          Add to Cart
        </button>
      ) : (
        <button>Added to Cart</button>
      )}
    </li>
  );
}

export default ProductCard;
