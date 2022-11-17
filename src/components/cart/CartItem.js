import { useEffect, useState } from "react";

export default function CartItem({ productId, onItemTotal, onInitializeCart }) {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:9292/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        onInitializeCart(data.id, data.price);
      });
  }, [productId]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    onItemTotal(item.id, e.target.value * item.price);
  };

  return (
    <div>
      {item ? (
        <div className="basket-product">
          <div className="item">
            <div className="product-image">
              <img
                src={item.images[0].image_1}
                alt={item.product_name}
                className="product-frame"
              />
            </div>
            <div className="product-details">
              <h1>
                <strong>
                  <span className="item-quantity">{quantity}</span> {"x "}
                </strong>{" "}
                {item.product_name}
              </h1>
              {/* <p>
                <strong>Navy, Size 18</strong>
              </p> */}
            </div>
          </div>
          <div className="price">{item.price}</div>
          <div className="quantity">
            <input
              type="number"
              value={quantity}
              min="1"
              className="quantity-field"
              onChange={handleQuantityChange}
            />
          </div>
          <div className="subtotal">{item.price * quantity}</div>
          <div className="remove">
            <button>Remove</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
