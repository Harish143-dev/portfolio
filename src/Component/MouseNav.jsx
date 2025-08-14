import React from 'react'
import mouse from '../assets/mouse.png'

const MouseNav = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <div>
                <img src={mouse} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
                <div className='bg-white h-2 w-0.5'></div>
                <div className='bg-white h-2 w-0.5'></div>
                <div className='bg-white h-2 w-0.5'></div>
                <div className='bg-white h-2 w-0.5'></div>
                <div className='bg-white h-2 w-0.5'></div>
                <div className='bg-white h-2 w-0.5'></div>
                <div className='bg-white h-2.5 w-2.5 rotate-z-45'></div>
            </div>
        </div>
    )
}

export default MouseNav