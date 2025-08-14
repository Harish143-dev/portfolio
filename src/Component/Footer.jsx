import { faGithub, faGithubAlt, faGithubSquare, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = ({ colors }) => {
    return (
        <div style={{ backgroundColor: colors.bg2 }} className='flex max-sm:flex-col max-sm:gap-2 justify-between items-center text-gray-400 text-sm px-10 py-3 border-t-2 border-gray-600'>
            <div className='flex max-md:flex-col max-md:gap-2 items-center justify-center gap-5'>
                <div>
                    <p>@2025 Harish. All rights reversed</p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <a href="https://www.instagram.com/harish__143_5/" target='blank'>
                    <FontAwesomeIcon icon={faInstagram}
                        className='text-black rounded-full p-1 py-1.5 cursor-pointer bg-cyan-300 hover:bg-cyan-400 transition-all' />
                </a>
                <a href="https://www.linkedin.com/in/harish1435/" target='blank'>
                    <FontAwesomeIcon icon={faLinkedinIn}
                        className='text-black rounded-full p-1 py-1.5 cursor-pointer bg-cyan-300 hover:bg-cyan-400 transition-all' />
                </a>
                <a href="https://github.com/Harish143-dev" target='blank'>
                    <FontAwesomeIcon icon={faGithub}
                        className='text-black rounded-full p-1 py-1.5 cursor-pointer bg-cyan-300 hover:bg-cyan-400 transition-all' />
                </a>
            </div>
            <div>
                <p> Designed by <span style={{ color: colors.brand1 }} className='pl-1'>Harish</span></p>
            </div>
        </div>
    )
}

export default Footer