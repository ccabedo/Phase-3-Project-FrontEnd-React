import {useEffect, useState} from 'react';
import ProductContainer from './ProductContainer';


function Products() {

  const [products, setProducts] = useState([])
  const [images, setImages] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  },
  [])

  useEffect(()=> {
    fetch("http://localhost:9292/images")
    .then(res => res.json())
    .then(data => setImages(data))
  },
  [])
   

  return (
    <div className="products">
      <div className='product-side'>
        <h1>Products</h1>
      </div>
      <div className='product-container'>
        <ProductContainer products={products} images={images}/>
      </div>
    </div>
  );
}

export default Products;
