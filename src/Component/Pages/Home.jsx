import Profile from '../../Component/Profile'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import ScrollNav from '../../Component/ScrollNav'

const Home = ({ colors }) => {

    const tags = ["<h1>", "</h1>", "<p>", "</p>"]

    return (
        <div name='home' style={{ backgroundColor: colors.bg1 }} className='min-h-screen pb-20 px-10 max-sm:px-5 w-full' >
            <div className='w-full'>
                <Navbar colors={colors} />
            </div>
            <div className='flex items-start pt-5 justify-center w-full min-lg:gap-20 max-lg:gap-5'>
                <div className='fixed left-3 z-50 top_entry_animation'>
                    <ScrollNav colors={colors} />
                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <h1
                            style={{ color: colors.brand2 }}
                            className='text-5xl font-semibold pb-10 top_entry_animation '>
                            Developer
                        </h1>
                        <div className='min-lg:pl-10 flex max-[1270px]:flex-col w-full justify-center gap-10 items-center'>
                            <div className='right_entry_animation'>
                                <Profile colors={colors} />
                            </div>
                            <div className='flex max-[830px]:flex-col justify-center gap-5  w-full items-center'>
                                <div className='text-white w-full flex flex-col gap-5 center_entry_animation '>
                                    <div className='text-5xl max-md:text-2xl font-semibold w-full'>
                                        <p
                                            style={{ color: colors.brand1 }}
                                            className='text-[12px]'>
                                            {tags[0]}
                                        </p>
                                        <div className='pl-5 py-2'>
                                            <p>Hey</p>
                                            <p>I'm
                                                <span
                                                    style={{ color: colors.brand1 }}
                                                    className='pl-1'>
                                                    Harish
                                                </span>
                                            </p>
                                            <p>Front-End Developer
                                                <span className='text-cyan-400 pl-2 animate-bounce inline-block'>!</span>
                                            </p>
                                        </div>
                                        <p
                                            style={{ color: colors.brand1 }}
                                            className='text-[12px]'>
                                            {tags[1]}
                                        </p>
                                    </div>
                                    <div className='w-full'>
                                        <p
                                            style={{ color: colors.brand1 }}
                                            className='text-[12px]'>
                                            {tags[2]}
                                        </p>
                                        <p className='text-gray-400 pl-5 py-2'>I'm a Front-End Developer passionate about building clean, responsive, and user-friendly interfaces.
                                            I love turning design ideas into interactive web experiences that perform seamlessly across devices.</p>
                                        <p
                                            style={{ color: colors.brand1 }}
                                            className='text-[12px]'>
                                            {tags[3]}
                                        </p>
                                    </div>
                                    <div className='pl-5 flex items-center justify-baseline gap-5'>
                                        <button
                                            style={{ color: colors.brand1 }}
                                            className='font-semibold text-2xl cursor-pointer'
                                        >
                                            Let's Talk
                                        </button>
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            style={{ backgroundColor: colors.bg2, color: colors.brand1 }}
                                            className='p-2 rounded-full cursor-pointer' />
                                    </div>
                                </div>
                                <div
                                    style={{ backgroundColor: colors.bg2 }}
                                    className='left_entry_animation flex flex-col items-center gap-10 w-40 text-white px-5 py-5 rounded-[40px]'>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p
                                            style={{ color: colors.brand1 }}
                                            className='font-bold text-4xl'>
                                            6
                                        </p>
                                        <p
                                            className='text-[14px]'>
                                            Programming Language
                                        </p>
                                    </div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p
                                            style={{ color: colors.brand1 }} className='font-bold text-4xl'>
                                            5
                                        </p>
                                        <p
                                            className='text-[14px]'>
                                            Development Tools
                                        </p>
                                    </div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p
                                            style={{ color: colors.brand1 }}
                                            className='font-bold text-4xl'>
                                            0
                                        </p>
                                        <p
                                            className='text-[14px]'>
                                            Year Of Expereince
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Home