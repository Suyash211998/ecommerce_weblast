import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            <h1 className='text-[25px]'>
                Suyash2112
            </h1>
            <p>
                In order to be irreplaceable one must always be different.
            </p>
            <div className='flex items-center justify-center mt-3 '>
                <div className='m-3 rounded-full cursor-pointer p-2 text-white bg-blue-700'>
                <Facebook/></div>
                <div className='m-3 rounded-full cursor-pointer p-2 text-white bg-[#fb3958]'><Instagram/></div>
                <div className='m-3 rounded-full cursor-pointer p-2 text-white bg-[#1DA1F2]'><Twitter/></div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
                <LocationOnOutlined/>
                <p className='pl-3'>State of Maharashtra</p>
            </div>
            <div className='flex m-3'>
                <LocalPhoneOutlined/>
                <p className='pl-3'>+91 1234567890</p>
            </div>
            <div className='flex m-3'>
                <EmailOutlined/>
                <p className='pl-3'>suyashecommerceweb@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer