import React from 'react'
import MouseNav from '../MouseNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import tailwind from '../../assets/tailwind.png'
import Heading from '../Heading'

const Skills = ({ colors }) => {

    const bg = {
        backgroundImage: "/src/assets/skill_bg.jpg",
    }


    return (
        <div
            id='skills'
            style={{ backgroundImage: `url("${bg.backgroundImage}")` }}
            className='bg-contain'
        >
            <div className='flex flex-col items-center px-10 justify-center gap-10 bg-white/0 backdrop-blur-sm backdrop-opacity-200 backdrop-invert-5 w-full py-25'>
                <div className='scroll_animation'>
                    <MouseNav />
                </div>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className='flex flex-col items-center justify-center gap-3 right_scroll_animation'>
                        <Heading head='Skills' colors={colors} />
                        <p className='text-gray-400 text-lg'>I'm striving to never stop learning and imporving</p>
                    </div>
                    <div className='flex items-center justify-center left_scroll_animation'>
                        <div style={{ backgroundColor: colors.brand2 }} className='flex flex-col items-center justify-center gap-2 px-10 py-3 rounded-lg border-l-5 border-blue-600'>
                            <FontAwesomeIcon icon={faDesktop} className='text-gray-600 text-lg' />
                            <p className='text-[20px] font-semibold'>Web Development</p>
                            <p className='text-sm font-semibold text-gray-600'>HTML-CSS-JS-REACT</p>
                        </div>
                    </div>
                    <div className='flex max-[830px]:flex-col justify-center items-center gap-10 scroll_animation'>

                        <div className='flex justify-center items-center gap-10 max-[830px]:gap-5'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-white bg-orange-600 text-5xl h-20 w-20 rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </div>
                                <p className='font-bold text-orange-600'>HTML</p>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-white bg-blue-600 text-5xl h-20 w-20 rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                </div>
                                <p className='font-bold text-blue-600'>CSS</p>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-white bg-yellow-500 text-5xl h-20 w-20 rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faJs} />
                                </div>
                                <p className='font-bold text-yellow-500'>JavaScript</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-10 max-[830px]:gap-5'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-white bg-blue-500 text-5xl h-20 w-20 rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faReact} />
                                </div>
                                <p className='font-bold text-blue-500'>REACT JS</p>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-white bg-violet-600 text-5xl h-20 w-20 rounded-full flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faBootstrap} />
                                </div>
                                <p className='font-bold text-violet-600'>BootStrap CSS</p>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-white bg-blue-500 text-5xl h-20 w-20 rounded-full flex items-center justify-center'>
                                    <img src={tailwind} alt="ta" className='h-10 w-10' />
                                </div>
                                <p className='font-bold text-blue-500'>Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills