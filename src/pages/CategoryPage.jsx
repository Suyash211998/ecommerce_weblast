import React from 'react'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'

function CategoryPage() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Men's Collection</h1>
            <div className='flex items-center justify-between mt-3'>
                <div>
                    <p>Filter by</p>
                    <select className='border-2 border-silver mobile:ml-0'>
                        <option selected disabled>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select className='ml-3 border-2 border-silver mobile:ml-0'>
                        <option selected disabled>Color</option>
                        <option>Yellow</option>
                        <option>Blue</option>
                        <option>Red</option>
                    </select>
                </div>
                <div className='flex mobile:flex-col mobile:items-end'>
                    <p>Sort By</p>
                    <select className='border-2 border-silver'>
                        <option>What's new</option>
                        <option>Popularity</option>
                        <option>Price-high to low</option>
                        <option>Price-low to high</option>
                    </select>
                </div>
            </div>
        </div>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default CategoryPage