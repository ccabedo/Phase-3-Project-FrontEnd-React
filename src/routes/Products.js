import {useEffect, useState} from 'react';
import ProductContainer from './ProductContainer';


function Products() {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:9293/products/`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },
  [])
   

  return (
    <div className="products">
      <div className='product-container'>
        <ProductContainer products={products}/>
      </div>
    </div>
  );
}

export default Products;
