import {useEffect, useState} from 'react';
import ProductContainer from './ProductContainer';


function Products() {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  },
  [])

  function addToCart(product) {
    console.log(product.product_id)
    fetch('http://localhost:9292/cart_items/cart', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_id: product.id
      })
    })

    fetch('http://localhost:9292/cart_items/products', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_id: product.product_id, 
        product_name : product.product_name,
        price: product.price,
        subcategory_id: product.subcategory_id
      })
    })
  }
   

  return (
    <div className="products">
      <div className='product-container'>
        <ProductContainer products={products} addToCart={addToCart}/>
      </div>
    </div>
  );
}

export default Products;
