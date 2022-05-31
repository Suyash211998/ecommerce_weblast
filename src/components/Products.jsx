import React from 'react'

import { ApiTopPropduct } from '../api/TopProductsApi'
import Product from './Product'
function Products() {
  return (
    
    <div className='flex flex-wrap p-5 '>
        {
            ApiTopPropduct.map((product, id)=>(
              
              <Product item={product} key={id}/>
      
            ))
        }
    </div>
  );
}


export default Products