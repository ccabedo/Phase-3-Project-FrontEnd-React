import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer({ products, images }){

    const productContainer = products.map((product) => {
        return <ProductCard key={product.id} {...product} />
    })

    const imageContainer = images.map((image) => {
        return <ProductCard key={image.id} {...image} />
    })

    return(
        <ul className="cards">
         {productContainer}
         {imageContainer}
        </ul>
    )
}

export default ProductContainer;