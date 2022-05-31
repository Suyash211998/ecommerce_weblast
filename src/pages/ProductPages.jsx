import React from 'react'
import Announce from '../components/Announce'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

import TeeB2 from '../images/TeeBigO2.webp'
function ProductPages() {
    
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3'>
            <div className='flex flex-1 items-center justify-center'>
                <img src={TeeB2}
                alt="1"
                className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-200'
                />
            </div>
            <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center'>
            <h1 className='title text-[40px] ml-10 mobile:text-[30px]'>T-Shirts</h1>
            <div className='flex-row pr-[4rem] text-justify mt-4 mobile:pr-0'>
                <p><b>PRODUCT DETAILS</b> </p>
                <p><b>Size & Fit</b> </p>
                <p><b>Material & Care</b></p>
                <p className='mt-5 text-3xl'>Price: <b>$75</b></p>
                <div className='flex text-2xl mt-6'>
                    Colors
                    <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                    <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                    <div className='bg-black w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                </div>
                <div className="mt-6 text-2xl">
                    Size
                    <select className="border-[2px] border-silver rounded-md ml-5">
                    <option selected>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                    </select>
                </div>
                <div className="mt-7">
                    <Counter/>
                    <button className="text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3">
                    Add to Cart
                    </button>
                </div>
              </div>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>

    </div>
  )
}

export default ProductPages