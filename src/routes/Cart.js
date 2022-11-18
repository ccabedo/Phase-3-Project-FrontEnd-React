import { useEffect, useState } from "react";
import CheckoutBox from "../components/cart/CheckoutBox";
import PromocodeBar from "../components/cart/PromocodeBar";
import CartItem from "../components/cart/CartItem";

export default function Cart() {
  const [cartItems, setCartItems] = useState({
    products: [],
    subtotal: 0,
  });

  useEffect(() => {
    fetch("http://localhost:9292/cart_items")
      .then((res) => res.json())
      .then((data) => {
        let calcSubtotal = Object.values(data.products).reduce((prev, curr) => {
          console.log(curr);
          return prev + curr.price;
        }, 0);
        setCartItems({
          products: data.products,
          subtotal: calcSubtotal,
        });
      });
  }, []);

  const handleItemTotal = (itemId, itemTotal) => {
    //setCart({ ...cart, [itemId]: itemTotal });
    let currentSubtotal = Object.values(cartItems.products).reduce(
      (prev, curr) => {
        console.log(curr);
        return prev + curr.price;
      },
      0
    );
    let nextSubtotal = currentSubtotal + itemTotal;
    setCartItems({ ...cartItems, subtotal: nextSubtotal });
  };

  return (
    <div className="basket-container">
      <div className="basket">
        <PromocodeBar />

        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="quantity">Quantity</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>

        {cartItems.products.map((item, idx) => {
          return (
            <CartItem key={idx} product={item} onItemTotal={handleItemTotal} />
          );
        })}
      </div>

      <CheckoutBox cartItems={cartItems} />
    </div>
  );
}
