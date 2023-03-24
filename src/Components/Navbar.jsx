    import React, { useState } from 'react'
    import {
        FaFacebook,
        FaTwitter,
        FaInstagram,
        FaPinterest,
        FaYoutube,
    } from 'react-icons/fa';
    import { AiOutlineClose } from 'react-icons/ai';
    import { HiOutlineMenuAlt4 } from 'react-icons/hi';
    import { BsPerson } from 'react-icons/bs';
    import { BiSearch } from 'react-icons/bi';
    export const Navbar = () => {
        const [nav, Opennav] = useState(false);
        const handleNav = () => {
            Opennav(!nav);
        };
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 className='block cursor-default'>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='hover:scale-105 hover:text-white  duration-300 cursor-pointer'>Home</li>
            <li className='hover:scale-105 hover:text-white  duration-300 cursor-pointer'>Destinations</li>
            <li className='hover:scale-105 hover:text-white  duration-300 cursor-pointer'>Travel</li>
            <li className='hover:scale-105 hover:text-white  duration-300 cursor-pointer'>View</li>
            <li className='hover:scale-105 hover:text-white  duration-300 cursor-pointer'>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className=' cursor-pointer' size={20} />
            <BsPerson size={20} />
        </div>
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black cursor-pointer' size={25} /> : <HiOutlineMenuAlt4 size={25} className="cursor-pointer" />}
        </div>
        {/* Mobile menu*/}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col cursor-pointer' : 'cursor-pointer absolute left-[-100%]'}>
            <ul>
            <h1>BEACHES.</h1>
            <li className='border-b duration-300 hover:text-[#5651e5] hover:border-[#5651e5] hover:translate-x-1.5 '>Home</li>
            <li className='border-b duration-300 hover:text-[#5651e5] hover:border-[#5651e5] hover:translate-x-1.5 '>Destinations</li>
            <li className='border-b duration-300 hover:text-[#5651e5] hover:border-[#5651e5] hover:translate-x-1.5 '>Travel</li>
            <li className='border-b duration-300 hover:text-[#5651e5] hover:border-[#5651e5] hover:translate-x-1.5 '>View</li>
            <li className='border-b duration-300 hover:text-[#5651e5] hover:border-[#5651e5] hover:translate-x-1.5 '>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon' />
                <FaYoutube className='icon' />
                <FaPinterest className='icon' />
                <FaInstagram className='icon' />
            </div>
            </ul>
        </div>
        </div>
    )
}
