import React from 'react'

import image1 from '../images/image_5.jpg'
import image2 from '../images/image_4.jpg'
import image3 from '../images/image_3.jpg'
import image4 from '../images/image_2.jpg'
import image5 from '../images/image_1.jpg'
import image6 from '../images/image_6.jpg'
const SelectsCard = (props) => {
        return (
        <div className='relative'>
            <img className='w-full h-full object-cover' src={props.bg} alt='/' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
            <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                {props.text}
            </p>
            </div>
        </div>
        );
    };
export const Select = () => {
    return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <SelectsCard bg={image1} text='Bora Bora' className="hover:scale-105 duration-300 rotate-1" />
    <SelectsCard bg={image2} text='Maldives'  className="hover:scale-105 duration-300 rotate-1" />
    <SelectsCard bg={image3} text='Antigua'   className="hover:scale-105 duration-300 rotate-1" />
    <SelectsCard bg={image4} text='Cozumel'   className="hover:scale-105 duration-300 rotate-1" />
    <SelectsCard bg={image5} text='Jamaica'   className="hover:scale-105 duration-300 rotate-1" />
    <SelectsCard bg={image6} text='Key West'  className="hover:scale-105 duration-300 rotate-1" />
    
        
    </div>
)
}
