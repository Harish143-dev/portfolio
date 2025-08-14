import React from 'react'
import MouseNav from '../MouseNav'
import AboutMe from '../../assets/about_me.png'
import aboutBg from '../../assets/about_bg.png'

const About = ({ colors }) => {

    const tags = ["<p>", "</p>"]

    return (
        <div name='about' style={{ backgroundImage: `url("${aboutBg}")` }} className='py-25 bg-contain px-10 flex flex-col gap-10 justify-center items-center' >
            <div className='scroll_animation'>
                <MouseNav />
            </div>
            <div className='flex max-[830px]:flex-col justify-center items-center gap-20 max-[830px]:gap-10 '>

                <div className='flex flex-col justify-center items-baseline gap-10'>
                    <div
                        style={{ backgroundColor: colors.bg1, border: `2px solid ${colors.brand1}` }}
                        className='py-2 px-5 text-4xl text-white rounded-tl-3xl rounded-br-3xl scroll_animation'>
                        <h1>About Me</h1>
                    </div>
                    <div
                        style={{ backgroundColor: colors.bg2 }}
                        className='flex flex-col justify-center items-baseline gap-2 p-5 rounded-2xl right_scroll_animation'
                    >
                        <p
                            style={{ color: colors.brand1 }}
                            className='font-semibold'
                        >
                            {tags[0]}
                        </p>
                        <div className='flex flex-col justify-center items-baseline gap-1 text-white'>
                            <h1
                                style={{ color: colors.brand1 }}
                                className='text-3xl'
                            >
                                Hello !
                            </h1>
                            <p>
                                I'm a passionate front-end developer with a love for clean and responsive design.
                            </p>
                            <p>
                                I specialize in JavaScript and React to build user-friendly web apps.
                            </p>
                            <p>
                                I enjoy solving real-world problems through code and creativity.
                            </p>
                            <p>
                                Always eager to learn, grow, and contribute to impactful projects.
                            </p>
                        </div>
                        <p
                            style={{ color: colors.brand1 }}
                            className='font-semibold'
                        >
                            {tags[1]}
                        </p>
                    </div>
                </div>

                <div className='left_scroll_animation'>
                    <img
                        src={AboutMe}
                        alt="mew"
                        className='w-60 mask-b-from-50% mask-b-to-95%'
                    />
                </div>

            </div>

        </div>
    )
}
export default About
