import React from "react";
import localFont from "next/font/local";
import RetroWindow from "./WindowTab";
import Image from 'next/image';
import Pfp from "../../public/portfolioprofile.png";

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

const HomeSection = () => {
  return (
    // Outer wrapper acting as your "Group 13/18/19" frame
    <div className="">
    {/* // We use a relative container scaled to your design's approximate size */}
        <div className="relative w-full max-w-[900px] h-[500px] mx-auto mt-10 filter drop-shadow-sm font-['Dogica_Pixel']">
        
        {/* Big Main Window (Rectangle 74/75) */}
        <RetroWindow 
            width="695px" 
            height="452px" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm z-10"
        >
            {/* Inner gradient background mentioned in Rec 75 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EDEDED] to-[#ACACAC] opacity-20 pointer-events-none" />

            {/* Name Tag (Rectangle 79) */}
            <div className="absolute top-[25px] left-[19px] w-[277px] h-[39px] bg-white border border-[#2E2C39] flex items-center px-4 z-20">
            <h1 className="text-[#2E2C39] text-[16px] font-bold tracking-tighter">
                This is Annie Wong
            </h1>
            </div>

            {/* Speech Bubble (Union / Vector) */}
            <div className="absolute bottom-[40px] left-[-69px] w-[279px] h-[44px] bg-white border border-[#6D6D6D] flex items-center justify-center z-30 shadow-md">
            <p className="text-[#2E2C39] text-[12px] tracking-tighter">
                Welcome to my portfolio!
            </p>
            </div>

            {/* Profile Image */}
            <div className="absolute top-[25px] left-[138px] w-[399px] h-[399px] z-10">
            <Image src={Pfp} alt="Annie Wong" fill className="object-contain"/>
            </div>
        </RetroWindow>

        {/* Stacked Small Windows on the Right */}
        <div className="absolute right-0 top-[148px] flex flex-col gap-[27px] z-30">
            
            {/* ABOUT ME Window */}
            <RetroWindow 
            title="ABOUT ME" 
            width="268px" 
            height="83px"
            >
            <div className="p-3">
                <p className="text-[#2E2C39] text-[14px] font-bold leading-tight tracking-tighter">
                Recent UCSD grad majoring in ICAM!!
                </p>
            </div>
            </RetroWindow>

            {/* THE HATS I WEAR Window */}
            <RetroWindow 
            title="MY ROLE" 
            width="268px" 
            height="115px"
            >
            <div className="p-3">
                <p className="text-[#2E2C39] text-[14px] font-bold leading-[1.12] tracking-tighter">
                Sound designer, audio implementer, composer, and music producer.
                </p>
            </div>
            </RetroWindow>

        </div>
        </div>
    </div>
  );
}

// const HomeSection = () => {
//     return(
//         <section>
//             <div className = "grid grid-cols-2 lg: grid-cols-12">
//                 <div className = "col-span-7">
//                     <h1 className={`${dogicaPixel.className} text-[#2E2C39] mb-8 text-1xl font-bold`}>
//                         This is Annie Wong
//                     </h1>
//                     <p className = {`${dogicaPixel.className} text-[#2E2C39] text-1xl leading-7 mb-4 font-normal`}>
//                         Welcome to my portfolio!
//                     </p>
//                     <p className = {`${dogicaPixel.className} text-[#2E2C39] text-1xl leading-7 mb-7.5 font-bold`}>
//                         Recent UCSD grad majoring in ICAM-Music. 
//                     </p>
//                     <p className = {`${dogicaPixel.className} text-[#2E2C39] text-sm leading-7 mb-7.5 font-bold`}>
//                         Sound designer, audio implementator, composer and music producer.
//                     </p>
//                 </div>

//             </div>
//         </section>
//     )
// };

export default HomeSection;

