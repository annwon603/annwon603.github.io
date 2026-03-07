"use client";
import React, {useState} from "react";
import {LinkIcon, InformationCircleIcon} from "@heroicons/react/24/outline";
import localFont from "next/font/local";
import {Rubik,Space_Mono} from 'next/font/google';
import Link from "next/link";
import Modal from "./Modal";

const rubik = Rubik({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['300','400','500','600','700','800','900'],

})

const space_mono = Space_Mono({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['400','700'],

})

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

const codeColors = {
    "C++" : "bg-[#FFE8F0]",
    "Unreal Engine 5" : "bg-[#D2E5EF]",
    "Unity C#" : "bg-[#E7D2EF]",
    "FMOD" : "bg-[#D2E5EF]",
    "Wwise" : "bg-[#CACC9E]"
}


{/* 1. Mobile First: h-[250px] (Base height for phones) */}
    {/* 2. Tablet: md:h-[300px] (Standard iPads/Tablets) */}
    {/* 3. iPad Pro / Laptop: lg:h-[400px] (Portrait iPad Pro) */}
    {/* 4. Large Desktop: xl:h-[500px] (Landscape iPad Pro / Big Screens) */}
const ProjectCard = ({imgURL, title, description, codeStack, directURL, fullDescription}) => {
    const [showModal,setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    return(
        <div>
            <div
                className="h-57 lg:h-100 lg:w-180 xl:h-72 xl:w-130 w-full 
                bg-cover bg-center bg-no-repeat my-4 relative group rounded-md shadow-sm" 
                style={{backgroundImage: `url(${imgURL})`}}
            >
                {/* {Desktop View for direct link and popup} */}
                <div className="hidden xl:block">
                    <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-md
                        bg-[#181818] opacity-0 hidden 
                        group-hover:flex group-hover:opacity-80
                        transition-duration-500">
                        {/* Direct Link */}
                        <Link 
                            href={directURL} 
                            className="h-14 w-14 mr-6 relative rounded-full bg-[#AFA3D5] group/link">

                            <LinkIcon className="h-10 w-10 text-[#2E2C39] absolute top-1/2 left-1/2 transform -translate-x-1/2 
                            -translate-y-1/2 cursor-pointer group-hover/link:text-white ">
                            </LinkIcon>
                            
                        </Link>
                        {/* Full Description*/}

                        <button onClick={handleShowModal} className="h-14 w-14 relative rounded-full bg-[#AFA3D5] group/link">
                            <InformationCircleIcon 
                                className="h-10 w-10 text-[#2E2C39] absolute top-1/2 left-1/2 transform -translate-x-1/2 
                                -translate-y-1/2 cursor-pointer group-hover/link:text-white ">
                            </InformationCircleIcon>
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-[#2E2C39] mt-1">
                <div className="flex flex-wrap justify-between xl:hidden">
                    <h5 className={`${dogicaPixel.className}`}>{title}</h5>
                </div>
                {/* Mobile View for Direct Link and Popup */}
                {/* <div className="flex flex-wrap justify-between xl:hidden">
                    <h5 className={`${dogicaPixel.className}`}>{title}</h5>
                    <div className="md:w-auto">
                        <div className="flex flex-row">

                            <Link 
                            href={directURL} 
                            className="h-7 w-7 mr-1.5 relative rounded-full bg-[#E7E3F1] group/link">

                            <LinkIcon className="h-5 w-5 text-[#2E2C39] absolute top-1/2 left-1/2 transform -translate-x-1/2 
                                -translate-y-1/2 cursor-pointer group-hover/link:text-white ">
                            </LinkIcon>
                            
                            </Link>


                            <button onClick={handleShowModal} className="h-7.5 w-7.5 relative rounded-full bg-[#E7E3F1] group/link">
                                <InformationCircleIcon 
                                    className="h-5 w-5 text-[#2E2C39] absolute top-1/2 left-1/2 transform -translate-x-1/2 
                                    -translate-y-1/2 cursor-pointer group-hover/link:text-white ">
                                </InformationCircleIcon>
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* Desktop view for Direct Link and Popup */}
                <h5 className={`${dogicaPixel.className} hidden xl:block`}>{title}</h5>
                <p className={`${rubik.className} my-2`}>{description}</p>
                
            </div>
            {/*Button */}
             <div className="flex justify-between xl:hidden mt-4">
                <div className="flex flex-row flex-wrap gap-2 ">
                    {codeStack.map((code,index) => {
                        const dynamicClass = codeColors[code] || "bg-[#E3D4D9] text-[#2E2C39]";
                        return(
                        <span key={index} className={`${space_mono.className} border-2 rounded-lg p-1 px-2 border-[#6D6D6D] text-[#6D6D6D] ${dynamicClass}`}>
                            {code}
                        </span>
                    );
                    })}
                    
                </div>   
                    <div className="md:w-auto">
                        <div className="flex flex-row">

                            <Link 
                            href={directURL} 
                            className="h-8.75 w-8.75 mr-3 relative rounded-full bg-[#E7E3F1] group/link">

                            <LinkIcon className="h-5 w-5 text-[#2E2C39] absolute top-1/2 left-1/2 transform -translate-x-1/2 
                                -translate-y-1/2 cursor-pointer group-hover/link:text-white ">
                            </LinkIcon>
                            
                            </Link>


                            <button onClick={handleShowModal} className="h-9 w-9 relative rounded-full bg-[#E7E3F1] group/link">
                                <InformationCircleIcon 
                                    className="h-5 w-5 text-[#2E2C39] absolute top-1/2 left-1/2 transform -translate-x-1/2 
                                    -translate-y-1/2 cursor-pointer group-hover/link:text-white ">
                                </InformationCircleIcon>
                            </button>
                        </div>
                    </div>
                </div>
            {/* <div className="flex flex-row flex-wrap gap-2 mt-4">
                {codeStack.map((code,index) => {
                    const dynamicClass = codeColors[code] || "bg-[#E3D4D9] text-[#2E2C39]";
                    return(
                    <span key={index} className={`${space_mono.className} border-2 rounded-lg p-1 px-2 border-[#6D6D6D] text-[#6D6D6D] ${dynamicClass}`}>
                        {code}
                    </span>
                );
                })}
                
            </div>    */}
            {/* Modal breaks free of constraint inside the card */}
            {showModal && <Modal 
                handleShowModal={handleShowModal} 
                descriptionList={fullDescription} />}
        </div>
    )
}

export default ProjectCard;
