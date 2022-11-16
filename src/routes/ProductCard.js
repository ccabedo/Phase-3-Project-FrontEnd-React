import React from 'react';

function ProductCard({ price, product_name, image_1, image_2, image_3, image_4}){

    return(
        <li className="card">
        <img src={image_1} alt={product_name} />
        <h4>{product_name}</h4>
        <p>Price: {price}</p>
        {true ? (
            <button className="primary">Add to Cart</button>
        ) : (
            <button>Out of Stock</button>
        )}
        </li>
    );
}

export default ProductCard;
