import React from "react";
import {Space_Mono} from 'next/font/google';


const space_mono = Space_Mono({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['400','700'],

})


const HeroSection = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 mb-24 flex flex-col container">
            <h1 className={`${space_mono.className} text-[#2E2C39] text-center md:text-2xl sm:text-xl mb-6`}> Audio Reel </h1>
            <iframe className = "w-full aspect-video rounded-md shadow-md"
                src="https://www.youtube.com/embed/y6andxJkh7g?si=a9Gu-qyYqeWDPINp" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default HeroSection;