import React, { useState } from 'react'
import Heading from '../Heading'
import MouseNav from '../MouseNav'

const Contact = ({ colors }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleUserInput = () => {
       alert(name +" Thank you for your Message !!!" )
    }
    return (
        <div name='contact' style={{ backgroundColor: colors.bg2 }} className=' py-20 flex flex-col items-center justify-center gap-5'>
            <div className='scroll_animation'>
                <MouseNav />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 left_scroll_animation'>
                < Heading head='Contact' colors={colors} />
                <p className='text-gray-500'>you could be give a feedback here</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-5'>
                <div style={{ color: colors.brand1, border: `2px solid ${colors.brand1}` }} className='right_scroll_animation px-5 py-2 rounded-br-2xl rounded-tl-2xl font-semibold text-2xl'>
                    <p>Send Me A Message</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-10 scroll_animation'>
                    <div className='flex max-md:flex-col items-center justify-center gap-20 max-md:gap-10'>
                        <div className='w-full flex items-baseline gap-2 justify-center flex-col '>
                            <label style={{ color: colors.brand1 }} className='font-semibold' htmlFor="name">Name</label>
                            <input
                                type="text"
                                id='name'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className='border-cyan-100 text-gray-300 px-2 f border-b-2 w-80 outline-0' />
                        </div>
                        <div className='w-full flex items-baseline gap-2 justify-center flex-col'>
                            <label style={{ color: colors.brand1 }} className='font-semibold' htmlFor="email">Email</label>
                            <input
                                type="text"
                                id='email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className='border-cyan-100 text-gray-300 px-2 f border-b-2 w-80 outline-0' />
                        </div>
                    </div>
                    <div className='w-full flex items-baseline gap-2 justify-center flex-col'>
                        <label style={{ color: colors.brand1 }} className='font-semibold' htmlFor="message">Message</label>
                        <input
                            type="text"
                            id='message'
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                            className='border-cyan-100 text-gray-300 px-2 border-b-2 w-180 max-md:w-80 outline-0' />
                    </div>
                </div>
                <button 
                onClick={handleUserInput}
                className='px-5 py-2 rounded-full font-semibold cursor-pointer bg-cyan-400 hover:bg-cyan-300 transition-all'>
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default Contact