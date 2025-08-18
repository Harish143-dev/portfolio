import React from 'react'
import me from '../assets/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Profile = ({ colors }) => {
    return (
        <div className='flex flex-col items-center w-65 justify-center gap-3 shadow-cyan-400 shadow-md text-white border-2 border-white px-5 py-10 rounded-tl-[130px] rounded-br-[130px]'>
            <div className='flex justify-center'>
                <img
                    src={me}
                    alt="me"
                    style={{ border: `2px solid ${colors.brand1}` }}
                    className='h-20 w-20 rounded-full' />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-semibold text-2xl'>Harish</h1>
                <p className='text-cyan-400 font-semibold underline underline-offset-3 animate-pulse'>Front-end Developer</p>
            </div>
            <div className='flex justify-center text-[14px] gap-1 items-baseline flex-col'>
                <p>
                    <span
                        className='pr-1'>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: colors.brand1 }} />
                    </span>
                    Chennai
                </p>
                <p>
                    <span
                        className='pr-1'>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: colors.brand1 }} />
                    </span>
                    Sarvananharish143@gmail.com
                </p>
                <p>
                    <span
                        className='pr-1'>
                        <FontAwesomeIcon
                            icon={faPhone}
                            style={{ color: colors.brand1 }} />
                    </span>
                    +91 8056503191
                </p>
            </div>
            <div className='flex justify-center'>
                <a href='https://drive.google.com/file/d/1HH3pylAWRB5FBf4c1TqbVjpbzR2_JV1t/view?usp=sharing' target='blank' className='bg-white text-black rounded-full px-5 py-1 text-sm font-semibold cursor-pointer hover:shadow-md transition-all shadow-cyan-400'>Download CV</a>
            </div>
        </div>
    )
}

export default Profile