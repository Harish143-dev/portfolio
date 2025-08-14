import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link as ScrollLink } from "react-scroll"

const Navbar = ({ colors }) => {
    const name = '</>'
    return (
        <div className='w-full'>
            <div className='flex justify-between w-full items-center border-b-1 border-gray-700 py-8 text-white'>
                <div className='flex items-center justify-center gap-2 font-semibold text-[18px] right_entry_animation'>
                    <span className='text-[#12f7d6]'>{name}</span>
                    <h1>Harish</h1>
                </div>
                <div className='flex items-center justify-center gap-10 left_entry_animation'>
                    <div className='flex items-center justify-center gap-5'>
                        <ScrollLink
                            to='home'
                            className='cursor-pointer hover:text-cyan-300 transition-all '
                            spy={true}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to='projects'
                            className='cursor-pointer hover:text-cyan-300 transition-all '
                            spy={true}
                        >
                            Project
                        </ScrollLink>
                    </div>
                    <div className='flex items-center justify-center gap-3 text-[14px]'>
                        <div className='flex justify-center items-center gap-1'>
                            <a
                                className='cursor-pointer'
                                href='https://www.instagram.com/harish__143_5/'
                                target="blank"
                            >
                                <span>
                                    <FontAwesomeIcon
                                        style={{ color: colors.brand1 }}
                                        icon={faInstagram}
                                        className='pr-1 cursor-pointer'
                                    />
                                </span>

                                <span className='max-[830px]:hidden hover:text-cyan-300 transition-all'>
                                    instagram
                                </span>

                            </a>
                        </div>

                        <div className='flex justify-center items-center gap-1'>

                            <a
                                className='cursor-pointer'
                                href='https://www.linkedin.com/in/harish1435/'
                                target="blank"
                            >
                                <span>
                                    <FontAwesomeIcon
                                        style={{ color: colors.brand1 }}
                                        icon={faLinkedinIn}
                                        className='pr-1 cursor-pointer'
                                    />
                                </span>

                                <span className='max-[830px]:hidden hover:text-cyan-300 transition-all'>
                                    LinkedIn
                                </span>

                            </a>

                        </div>
                        <div className='flex justify-center items-center gap-1'>

                            <a
                                className='cursor-pointer'
                                href='https://github.com/Harish143-dev'
                                target="blank"
                            >
                                <span>
                                    <FontAwesomeIcon
                                        style={{ color: colors.brand1 }}
                                        icon={faGithub}
                                        className='pr-1 cursor-pointer'
                                    />
                                </span>

                                <span className='max-[830px]:hidden hover:text-cyan-300 transition-all'>
                                    Github
                                </span>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar