import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer({ products, addToCart }){

    const productContainer = products.map((product) => {
        return <ProductCard key={product.id} product={product} {...product} addToCart={addToCart} />
    })
    
    

    return(
        <ul className="cards">
         {productContainer}
        </ul>
    )
}

export default ProductContainer;