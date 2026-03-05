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
                        <Link href="drive.google.com">
                            <p className={`${space_mono.className} block py-2 pl-3 pr-4 text-[#A99DCF] sm:text-sm rounded`}>RESUME</p>
                        </Link>
                        <Link href="github.com">
                            <Image src={GithubIcon} alt="Github Icon"/> 
                        </Link>
                        <Link href="linkedin.com">
                            <Image src={LinkedInIcon} alt="LinkedIn Icon"/>
                        </Link>
                        <Link href="gmail.com">
                            <Image src={EmailIcon} alt="Email Icon"/>
                        </Link>
                    </div>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar;