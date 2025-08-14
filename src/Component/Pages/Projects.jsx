import React from 'react'
import MouseNav from '../MouseNav'
import Heading from '../Heading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectBg from "../../assets/project_bg.jpg";
import netflixBg from '../../assets/Projects_Img/netflix.png'
import portfolioBg from '../../assets/Projects_Img/portfolio.png'
import ecommerceBg from '../../assets/Projects_Img/e-commerce.png'
import bskBg from '../../assets/Projects_Img/bsk.png'
import todoBg from '../../assets/Projects_Img/todoapp.png'

const Projects = ({ colors }) => {

    const imgSlide = [
        {
            index: 1,
            image: netflixBg,
            name: 'Netflix',
            technology: 'HTML, CSS, Javascript, React, Tailwind, Firebase',
            discription: 'I developed a Netflix-like streaming website with a clean and engaging user interface It features movie categories, banner sections, and detailed content display. I used dynamic data fetching and passed props to render different movie rows This project helped me understand how real-world streaming platforms organize content.',
            link: 'https://my-net-flics-clone.netlify.app/'
        },

        {
            index: 2,
            image: portfolioBg,
            name: 'Portfolio',
            technology: 'HTML, CSS, Javascript, React, Tailwind',
            discription: 'This portfolio showcases my work as a frontend developer, focusing on clean, responsive, and user-friendly web interfaces. It reflects my ability to turn designs into interactive digital experiences. The site serves as a central place to present my skills, creativity, and completed projects.',
            link: 'https://harishdev-portfolio.netlify.app/'
        },
        {
            index: 3,
            image:ecommerceBg,
            name: "E-Commerce",
            technology: 'HTML, CSS, Javascript, React, Tailwind',
            discription: 'An interactive e-commerce front-end built with React.js, offering product listings, category filtering, and a functional shopping cart. The application focuses on responsive design and dynamic components to simulate a real-world online shopping experience.',
            link: 'https://harish-e-commerce.netlify.app/'
        },
        {
            index: bskBg,
            image: '/src/assets/Projects_Img/bsk.png',
            name: 'BSK-Travels',
            technology: 'HTML, CSS, Javascript, React, Bootstrap',
            discription: 'A responsive online platform where users explore tour packages, book seats, browse trip photos, and contact the team—designed for seamless, hassle-free travel planning.',
            link: 'https://bsk-travels.netlify.app/'
        },
        {
            index: 5,
            image: todoBg,
            name: 'To-Do-App',
            technology: 'HTML, CSS, Javascript',
            discription: 'To-Do App – A simple and responsive task management tool that lets users add and delete tasks with ease. All tasks are saved in local storage, ensuring they remain available even after refreshing the page. Designed with a clean interface and smooth user interactions for an efficient and enjoyable experience.',
            link: 'https://harish-to-do-app.netlify.app/'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div
            id='projects'
            style={{ backgroundImage: `url("${projectBg}")` }}
            className='bg-cover bg-center bg-no-repeat'
        >
            <div className='px-10 py-25 w-full flex flex-col items-center justify-center gap-10 bg-white/5 backdrop-blur-xs backdrop-brightness-30 backdrop-invert-5'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className='scroll_animation'>
                        <MouseNav />
                    </div>
                    <div className='right_scroll_animation'>
                        <Heading head='Project' colors={colors} />
                    </div>
                    <p className='text-gray-400'>I had lot of experience in  working with these awesome project</p>
                </div>

                <div className='w-200 max-[1000px]:w-160 max-[730px]:w-120 max-[540px]:w-80'>
                    <Slider {...settings} className='scroll_animation'>
                        {
                            imgSlide.map((item) => (
                                <div key={item.index}

                                >
                                    <div
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                        className='h-100 max-[1000px]:h-80 max-[730px]:h-60 max-[540px]:h-50  bg-cover bg-no-repeat group'
                                    >
                                        <div className='hidden px-10 min-md:group-hover:flex flex-col min-md:gap-5 items-center justify-center w-full h-full bg-white/0 backdrop-brightness-20 backdrop-blur-sm'>
                                            <div>
                                                <h1
                                                    style={{ color: colors.brand1 }}
                                                    className='text-white min-md:text-3xl font-bold'>{item.name}</h1>
                                            </div>
                                            <div>
                                                <p className='font-semibold max-md:text-[12px] text-gray-400'>{item.discription}</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-center '>
                                                <p className='text-xl font-bold text-gray-400 underline underline-offset-2'>Technologies</p>
                                                <p className='text-lg text-cyan-400 font-semibold'>{item.technology}</p>
                                            </div>
                                            <div>
                                                <a href={item.link} target='blank' style={{ color: colors.brand2 }} className='text-sm font-semibold underline'>Live Demo</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* small screen duplicate */}
                                    <div className='min-md:hidden pt-5 flex flex-col gap-2 items-center scroll_animation justify-center w-full h-full'>
                                        <div>
                                            <h1
                                                style={{ color: colors.brand1 }}
                                                className='text-white min-md:text-3xl font-bold'>{item.name}</h1>
                                        </div>
                                        <div>
                                            <p className='font-semibold max-md:text-[12px] text-gray-400'>{item.discription}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center '>
                                            <p className='text-xl font-bold text-gray-400 underline underline-offset-2'>Technologies</p>
                                            <p className='text-lg text-cyan-400 font-semibold'>{item.technology}</p>
                                        </div>
                                        <div>
                                            <a href={item.link} target='blank' style={{ color: colors.brand2 }} className='text-sm font-semibold underline'>Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Projects