import React from "react";

export default function PromocodeBar() {
  return (
    <div className="basket-module">
      <label htmlFor="promo-code">Enter a promotional code</label>
      <input
        id="promo-code"
        type="text"
        name="promo-code"
        maxLength="5"
        className="promo-code-field"
      />
      <button className="promo-code-cta">Apply</button>
    </div>
  );
}
