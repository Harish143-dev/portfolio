import React from 'react'

const Heading = ({ head, colors }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 '>
            <h1 style={{ color: colors.brand1 }} className='text-4xl font-semibold'>{head}</h1>
            <div className='flex items-center justify-center'>
                <div style={{ backgroundColor: colors.brand1 }} className='h-1.5 w-1.5 rounded-full'></div>
                <div style={{ backgroundColor: colors.brand1 }} className='h-[2px] w-18'></div>
                <div style={{ backgroundColor: colors.brand1 }} className='h-1.5 w-1.5 rounded-full'></div>
            </div>
        </div>
    )
}

export default Heading