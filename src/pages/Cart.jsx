import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Announce from "../components/Announce";

import Tee1 from '../images/tee1.jpg'
import Tee2 from '../images/tee2.jpg'
import Tee3 from '../images/tee3.webp'
import { Link } from "react-router-dom";

const Cart = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex items-center justify-between w-[25%] h-[60%] mobile:flex-col";
  
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-3 ">
        <div className="flex justify-center text-5xl">Cart</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
        <Link to="/">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0">
            Continue Shopping
          </button>
          </Link>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: 3</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn mt-0">Checkout Now</button>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img"
                  src={Tee1}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Green and gold-toned Tshirt for men, Brand logo printed, Regular length Round neck
                  </p>
                  <p>
                    <b className="mr-2">Price:</b>$70
                  </p>
                  
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

              
            </div>

            <hr className="mb-7 mt-7 mobile:mt-0" />
            {/* 2nd product div */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src={Tee2}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>341256789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Blue self-design T-shirt, has a polo collar, and short sleeves
                  </p>
                  <p>
                    <b className="mr-2">Price:</b>$70
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

            
              
            </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />

            {/* 3rd Product */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src={Tee3}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>234567891
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Black and white T-shirt for men Graphic printed Regular length Round neck Short
                  </p>
                  <p>
                    <b className="mr-2">Price:</b>$70
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

             
              
            </div>
              <hr className="mb-7 mt-7 mobile:mt-0" />
          </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>$210</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Charge:</p>
              <p>+$10</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>$210</p>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;