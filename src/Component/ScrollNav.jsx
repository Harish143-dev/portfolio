import { faEnvelope, faHouse, faUser, faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link as ScrollLink } from "react-scroll"

const ScrollNav = ({ colors }) => {

    const [active, setActive] = useState(0)
    const nav = [
        {
            id: 0,
            title: faHouse,
            href: "home",
        },
        {
            id: 1,
            title: faUser,
            href: "about",
        },
        {
            id: 2,
            title: faCode,
            href: "skills",
        },
        {
            id: 3,
            title: faDesktop,
            href: "projects",
        },
        {
            id: 4,
            title: faEnvelope,
            href: "contact",
        },
    ]


    return (
        <div>
            <div
                style={{ backgroundColor: colors.bg2 }}
                className='flex flex-col items-center justify-baseline gap-3 py-3 px-3 border-1 border-white rounded-full'>
                {
                    nav.map((item) => (
                        <ScrollLink
                            to={item.href}
                            spy
                            activeClass='activeClass'
                            key={item.id}
                            className={`cursor-pointer transition-all text-white hover:text-black hover:bg-[#12F7D6] p-1 px-1.5 rounded-full  ${active === item.index ? 'activeClass' : ''} `}
                        >
                            <FontAwesomeIcon
                                icon={item.title}
                            />
                        </ScrollLink>
                    ))
                }
            </div>
        </div>
    )
}

export default ScrollNav