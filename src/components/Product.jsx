// import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

function Product({item}) {
   
  return (
    <div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-5 relative'>
       
       {/* <Link to='/product'> */}
          <img src={item.src} alt={item.id}/>
        {/* </Link>  */}
        
    </div>
  )
}

export default Product

