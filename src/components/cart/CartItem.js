import { useEffect, useState } from "react";

export default function CartItem({ product, onItemTotal }) {
  const [quantity, setQuantity] = useState(1);

  //   useEffect(() => {
  //     fetch(`http://localhost:9292/products/${productId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setItem(data);
  //         onItemTotal(data.id, data.price);
  //       });
  //   }, []);

  //   const handleQuantityChange = (e) => {
  //     setQuantity(e.target.value);
  //     onItemTotal(item.id, e.target.value * item.price);
  //   };

  const handleQuantityChange = (e) => {
    // updateSubtotal((product.id, product.price * quantity));
    setQuantity(e.target.value);
    onItemTotal(product.id, product.price * quantity);
  };

  return (
    <div>
      <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img
              src={product.images[0].image_1}
              alt={product.product_name}
              className="product-frame"
            />
          </div>
          <div className="product-details">
            <h1>
              <strong>
                <span className="item-quantity">{quantity}</span> {"x "}
              </strong>{" "}
              {product.product_name}
            </h1>
            {/* <p>
                <strong>Navy, Size 18</strong>
              </p> */}
          </div>
        </div>
        <div className="price">{product.price}</div>
        <div className="quantity">
          <input
            type="number"
            value={quantity}
            min="1"
            className="quantity-field"
            onChange={handleQuantityChange}
          />
        </div>
        <div className="subtotal">{product.price * quantity}</div>
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}
