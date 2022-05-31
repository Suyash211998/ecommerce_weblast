import React from 'react'
import ProductPages from '../pages/ProductPages'
import { ApiTopPropduct } from '../api/TopProductsApi'
function DisplayPage() {
  return (
    <div>
        {
            ApiTopPropduct.map((product, id)=>(
              
              <ProductPages item={product} key={id}/>
      
            ))
        }
    </div>
  )
}

export default DisplayPage