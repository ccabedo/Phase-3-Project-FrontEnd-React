import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer({ products }){

    const productContainer = products.map((product) => {
        return <ProductCard key={product.id} {...product} />
    })

    return(
        <ul className="cards">
         {productContainer}
        </ul>
    )
}

export default ProductContainer;