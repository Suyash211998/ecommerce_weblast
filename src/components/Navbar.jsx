import { Badge, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';




function Navbar() {

 
    const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';


  return (


    <div className="navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">


          <div className=" left flex flex-1  items-center">
            <div className="language cursor-pointer text-[16px] mobile:hidden">
                Eng
            </div>

            {/* Search Input */}
            <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
                <input type='text' className="border-none mobile:w-[50px]" placeholder="Search"/>
                <Search className="text-[#8a4af3] m" style={{fontSize: '16px'}}/>
            </div>
          </div>


          {/* Logo */}
          <div className="center flex-1 text-center  mobile:ml-6">
              <div className = "logo font-bold mobile:text-sm"></div>
          </div>

          {/* Right Side */}
          <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-1">
              <div className={style} 
              >
              <Link to='/register'>
              <button>Register</button>
              </Link>
              </div>
              
              <div className={style}>
              <Link to='/Login'>
              <button>
              Sign In
              </button>
              </Link>
              </div>
              <div className={style}>
              <Link to='/Cart'>
              <button >
                <Badge badgecontent={4} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>
                </button>
                </Link>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Navbar