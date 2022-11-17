import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer({ products }){

    const productContainer = products.map((product) => {
    console.log(product.images[0]['image_1'])
        return <ProductCard key={product.id} {...product} />
    })
    
    

    return(
        <ul className="cards">
         {productContainer}
        </ul>
    )
}

export default ProductContainer;