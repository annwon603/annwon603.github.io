import React from "react";
import localFont from "next/font/local";
import RetroWindow from "./WindowTab";
import Image from 'next/image';
import Pfp from "../../public/portfolioprofile.png";
import SpeechBubble from "../../public/SpeechBubble.svg";

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


const AboutMeSection = () => {
  return (
    // Outer wrapper acting as your "Group 13/18/19" frame
    <div className="">
    {/* // We use a relative container scaled to your design's approximate size */}
        {/* Desktop View */}
        <div className="hidden md:flex justify-center item-center relative w-full max-w-225 mx-auto  filter drop-shadow-sm font-['Dogica_Pixel']">

            {/* Big Main Window (Rectangle 74/75) */}
            <div className="bg-[#EDEDED] border-[#6D6D6D] border-2 p-4 my-24">
                <RetroWindow width="695px" height="452px" className="justify-center item-center shadow-sm z-10">
                    {/* Inner gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EDEDED] to-[#ACACAC] opacity-20 pointer-events-none" />

                    {/* Name Tag */}
                    <div className="absolute top-6.25 left-4.75 w-69.25 h-9.75 bg-white border border-[#2E2C39] flex items-center px-4 z-20">
                        <h1 className="text-[#2E2C39] text-[16px] font-bold tracking-tighter">
                            This is Annie Wong
                        </h1>
                    </div>
                    {/* Profile Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-99.75 h-99.75 z-10">
                        <Image src={Pfp} alt="Annie Wong" fill className="object-contain"/>
                    </div>

                </RetroWindow>
            </div>

            {/* Speech Bubble */}
            <div className="absolute bottom-60 left-7 w-69.75 h-11 z-30 flex items-center justify-center">
                <Image src={SpeechBubble} alt="SpeechBubble">
                </Image>
                <p className="text-[#2E2C39] text-[12px] tracking-tighter absolute left-6 z-10">
                    Welcome to my portfolio!
                </p>
            </div>

            {/* Stacked Small Windows on the Right */}
            <div className="absolute right-0 top-37 flex flex-col gap-6.75 z-30">
                {/* ABOUT ME Window */}
                <RetroWindow title="ABOUT ME" width="268px" height="83px">
                    <div className="p-3">
                        <p className="text-[#2E2C39] text-[14px] font-bold leading-tight tracking-tighter">
                            Recent UCSD grad majoring in ICAM!!
                        </p>
                    </div>
                </RetroWindow>

                {/* THE HATS I WEAR Window */}
                <RetroWindow title="MY ROLE" width="268px" height="115px">
                    <div className="p-3">
                        <p className="text-[#2E2C39] text-[14px] font-bold leading-[1.12] tracking-tighter">
                            Sound designer, audio implementer, composer, and music producer.
                        </p>
                    </div>
                </RetroWindow>
            </div>

        </div>
        {/* Phone View */}
        <div className="mobile-menu md:hidden flex flex-col items-center justify-center mx-4 my-10 gap-4 py-10">
            <div className="bg-white border-[#2E2C39] border-2">
                <p className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-center py-2 px-4`}> 
                    This is Annie Wong 
                </p>
            </div>
            <div className="bg-[#EDEDED] border-[#6D6D6D] border-2 m-4">
                <RetroWindow width= "326px" height = "283px" className="shadow-sm z-9 m-1 flex flex-col relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EDEDED] to-[#ACACAC] opacity-20 pointer-events-none" />
                
                    <div className="flex flex-row items-stretch justify-center gap-3 p-3 relative z-10 h-full">

                        <div className="bg-white border-[#D9D9D9] border-2 rounded-lg w-1/3 flex justify-center h-1/4 p-2">
                            <p className={`${dogicaPixel.className} text-[#2E2C39] text-left text-[10px] leading-3`}>
                                Welcome to my Portfolio!
                            </p>
                        </div>

                        <div className="w-3/4">
                            <Image src={Pfp} alt="Annie Wong" fill className="object-contain"/>
                        </div>
                        
                    </div>
                
                </RetroWindow>
            </div>

            <RetroWindow title="ABOUT ME" width="268px" height="110px" className="mb-3">
                    <div className="p-3">
                        <p className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-sm mx-1 tracking-tighter`}>
                            Recent UCSD grad majoring in ICAM-Music!!
                        </p>
                    </div>
            </RetroWindow>

            <RetroWindow title="MY ROLE" width="268px" height="125px">
                <div className="p-3">
                    <p className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-sm/4.5 mx-1 tracking-tighter`}>
                        Sound designer, audio implementer, composer, and music producer.
                    </p>
                </div>
            </RetroWindow>


        </div>
    </div>
  );
}

export default AboutMeSection;

