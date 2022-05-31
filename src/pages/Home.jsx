import React from 'react';
import Announce from '../components/Announce';
import Categories from '../components/Categories';
import CategoryBar from '../components/CategoryBar';
import CategoryBelow from '../components/CategoryBelow';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';
// import DisplayPage from '../components/DisplayPage';

function Home() {
  return (
    <div>
    <Announce/>
    <Navbar/>
    <Slider/>
    <CategoryBar/>
    <Categories/>
    <CategoryBelow/>
    <Products/>
    {/* <DisplayPage/> */}
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home;