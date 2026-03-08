"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./Navlink";
import MenuOverlay from "./MenuOverlay";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import EmailIcon from "../../public/mailicon.svg";
import Image from "next/image";
import localFont from "next/font/local";
import {Space_Mono} from 'next/font/google'


const dogica = localFont({
    src: [
        {
            path: "../../fonts/dogica.ttf",
            weight: '400',
            style: 'normal',
        },
        {
            path: "../../fonts/dogicabold.ttf",
            weight: '700',
            style: 'bold',
        },
    ]
})

const dogicaPixel = localFont({
    src: [
        {
            path: "../../fonts/dogicapixel.ttf",
            weight: '400',
            style: 'normal',
        },
        {
            path: "../../fonts/dogicapixelbold.ttf",
            weight: '700',
            style: 'bold',
        },
    ]
})

const space_mono = Space_Mono({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['400','700'],

})

const navLinks = [
    {
        title: "ABOUT",
        path: "#about",
    },
    {
        title: "PROJECTS",
        path: "#projects",
    },
    {
        title: "MUSIC",
        path: '#music',
    }
]


const NavBar = () => {
    const [navbarOpen,setNavbarOpen] = useState(false);
    return (
        <nav className = "fixed top-0 left-0 right-0 z-10  bg-[#FFFFFF]">
            <div className = "flex flex-wrap item-center justify-between mx-auto py-4 px-4">
                {/* Mobile View */}
                <div className="mobile-menu block md:hidden flex items-center w-full relative">
                    {/* Hamburger/Close Button On Left */}
                    {!navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(true)} className = "flex items-center px-3 py-2 text-slate-900 hover:text-gray-600">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ) : (
                        <button onClick={()=> setNavbarOpen(false)}className = "flex items-center px-3 py-2 text-slate-900 hover:text-gray-400">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                        <Link href = {"/"} className = {`${dogicaPixel.className} md:text-sm text-[#2E2C39] font-bold flex p-4 md:04`}>
                            <p className="sm:text-center py-2 pl-3 pr-4">Annie Wong</p>
                        </Link>
                    </div>
                </div>

                {/* Desktop View */}
                <Link href = {"/"} className = {`${dogicaPixel.className} hidden md:text-sm text-[#2E2C39] font-bold md:flex p-4 md:04`}>
                 <p className="sm:text-center py-2 pl-3 pr-4">Annie Wong</p>
                </Link>
                
                {/*Links to section of the website Desktop View*/}
                <div className = "menu hidden md:block md:w-auto md:space-x-8 mt-0" id="navbar">
                    <ul className="flex p-4 md:04 md:flex-row">
                        {
                            navLinks.map((link,index) => (
                                <li key = {index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Contacts on Desktop Mode */}
                <div className="menu hidden md:block md:w-auto md:space-x-8 mt-0">
                    <div className="socials flex flex-row gap-2 p-4">
                        <Link href="https://drive.google.com/file/d/1ebMD8YCTZxlNGBCATbPtqeKn6_6Xo9WA/view?usp=sharing">
                            <p className={`${space_mono.className} block py-2 pl-3 pr-4 text-[#A99DCF] hover:text-[#2E2C39] sm:text-sm rounded`}>RESUME</p>
                        </Link>

                        <Link href="https://github.com/annwon603">
                            <svg 
                            className="fill-[#A99DCF] hover:fill-[#2E2C39]"
                            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        </Link>

                        <Link href="https://www.linkedin.com/in/annie-wong-4030a6226/">
                            <svg 
                            className="fill-[#A99DCF] hover:fill-[#2E2C39]"
                            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </Link>

                        <Link href="mailto:aniwong603@gmail.com">
                            <svg 
                            className="fill-[#A99DCF] hover:fill-[#2E2C39]"
                            width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.02743 5.64646C5.15652 5.62696 5.30793 5.6451 5.44012 5.64562L18.0544 5.6466C19.1562 5.64646 19.7716 5.52538 20.6099 6.44685C20.4958 6.53728 20.3676 6.6164 20.2483 6.70026L16.2479 9.53268C15.3305 10.1935 14.4045 10.8487 13.4721 11.4878C13.1557 11.7047 12.8511 11.9474 12.5255 12.1488C11.8141 12.5889 11.3316 12.0499 10.7761 11.6509L5.49041 7.91999C4.8096 7.4421 4.13877 6.94382 3.43945 6.49345C3.8323 5.99399 4.39083 5.69132 5.02743 5.64646Z" />
                            <path d="M20.988 7.39966L21.0013 7.42305C20.9736 7.72277 20.9877 8.03139 20.9879 8.33242L20.9884 15.9066C20.9894 16.6668 21.006 17.1536 20.4214 17.7457C20.0357 18.1364 19.599 18.3054 19.0562 18.3091L5.25317 18.3096C4.2215 18.3094 3.3307 17.9492 3.06774 16.813C2.99817 16.5123 3.00902 16.2113 3.0093 15.9054L3.00967 12.3927L3.00976 9.06339C3.00973 8.50956 2.99776 7.95321 3.00967 7.39966C3.21893 7.52106 3.41633 7.68105 3.61484 7.82022L10.8151 12.8702C11.9217 13.6361 12.2651 13.5151 13.3984 12.7147L20.2275 7.91041C20.4757 7.73927 20.7222 7.54075 20.988 7.39966Z" />
                            <defs>
                            <linearGradient id="paint0_linear_134_245" x1="12.1518" y1="5.03582" x2="11.5007" y2="12.2447" gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="#E1DDEB"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_134_245" x1="12.1789" y1="7.09283" x2="11.7552" y2="18.5356" gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="#E1DDEB"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        </Link>
                    </div>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar;