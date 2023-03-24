import React from 'react'
import image1 from '../images/image_5.jpg'
import image2 from '../images/image_4.jpg'
import image3 from '../images/image_3.jpg'
import image4 from '../images/image_2.jpg'
import image5 from '../images/image_1.jpg'
export const Resorts = () => {
    return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={image1} alt="/" />
            <img className='w-full h-full object-cover' src={image2} alt="/" />
            <img className='w-full h-full object-cover' src={image3} alt="/" />
            <img className='w-full h-full object-cover' src={image4} alt="/" />
            <img className='w-full h-full object-cover' src={image5} alt="/" />
        </div>
    </div>
)
}
