import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';
export const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                <h1>BEACHES.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                </div>
                </div>
                <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li className=' cursor-pointer duration-300 hover:text-[#5651e5]'>About</li>
                    <li className=' cursor-pointer duration-300 hover:text-[#5651e5]'>Partnerships</li>
                    <li className=' cursor-pointer duration-300 hover:text-[#5651e5]'>Careers</li>
                    <li className=' cursor-pointer duration-300 hover:text-[#5651e5]'>Newsroom</li>
                    <li className=' cursor-pointer duration-300 hover:text-[#5651e5]'>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li className='cursor-pointer duration-300 hover:text-[#5651e5]'>Home</li>
                    <li className='cursor-pointer duration-300 hover:text-[#5651e5]'>Destinations</li>
                    <li className='cursor-pointer duration-300 hover:text-[#5651e5]'>Travel</li>
                    <li className='cursor-pointer duration-300 hover:text-[#5651e5]'>View</li>
                    <li className='cursor-pointer duration-300 hover:text-[#5651e5]'>Book</li>
                </ul>
                </div>
            </div>
        </div>
)
}
