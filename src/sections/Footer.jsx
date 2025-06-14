import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden' id='footer'>
    <div className='container mx-auto flex flex-row md:flex-row justify-between items-center'>
        <div className='flex flex-col m-5'>
            <img src={assets.logo_dark} alt="" />
        </div>
       
        <div>
            <p className='text-gray-400 text-sm'>2023 &copy; All rights reserved</p>
        </div>
    </div>
    <div></div>
    </div>
  )
}

export default Footer