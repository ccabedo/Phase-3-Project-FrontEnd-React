import {useState} from 'react';

function ProductCard({ price, product_name, images}){


    

    return(
        <li className="card">
        <div className='block'>
        <img className='main-img' srcset={images[0]['image_1']} src={images[0]['image_1']} alt={product_name}/>
        <img className='hover-img' srcset={images[0]['image_2']} src={images[0]['image_2']} alt={product_name}/>
        </div>
        <h4>{product_name}</h4>
        <p>Price: ${price}</p>
        {true ? (
            <button className="primary" type="submit">Add to Cart</button>
        ) : (
            <button>Out of Stock</button>
        )}
        </li>
//         <div class="bg-white">
//   <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//     <h2 class="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
//     <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//       <div class="group relative">
//         <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
//           <img src={image_1} alt={product_name} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
//         </div>
//         <div class="mt-4 flex justify-between">
//           <div>
//             <h3 class="text-sm text-gray-700">
//               <a href="#">
//                 <span aria-hidden="true" class="absolute inset-0"></span>
//                 {product_name}
//               </a>
//             </h3>
//           </div>
//           <p class="text-sm font-medium text-gray-900">{price}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
)
}

export default ProductCard;
