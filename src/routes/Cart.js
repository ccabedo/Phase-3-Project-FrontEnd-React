import { useEffect, useState } from "react";
import CheckoutBox from "../components/cart/CheckoutBox";
import PromocodeBar from "../components/cart/PromocodeBar";
import CartItem from "../components/cart/CartItem";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/cart_items")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleItemTotal = (itemId, itemTotal) => {
    setCart({ ...cart, [itemId]: itemTotal });
  };

  return (
    <div className="basket-container">
      <div className="basket">
        <PromocodeBar />
        {console.log(cart)}

        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="quantity">Quantity</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>

        {cartItems.map((item, idx) => {
          return (
            <CartItem
              key={idx}
              productId={item.product_id}
              onItemTotal={handleItemTotal}
              onInitializeCart={handleItemTotal}
            />
          );
        })}
      </div>

      <CheckoutBox />
    </div>
  );
}
