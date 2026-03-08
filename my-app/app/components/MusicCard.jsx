"use client";
import React from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import localFont from "next/font/local";
import { Rubik } from 'next/font/google';
import Visualizer from "./AudioWave";

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
});

const rubik = Rubik({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['300','400','500','600','700','800','900'],
});

const MusicCard = ({id, imgURl, title, description, filePath, activeTrackId, setActiveTrackId}) => {
    const is_Playing = activeTrackId === id;

    const handlePlayPause = () => {
        if(is_Playing){
            setActiveTrackId(null);
        } else {
            setActiveTrackId(id);
        }
    }

    const handleSetIsPlaying = (playingStatus) => {
        if(playingStatus){
            setActiveTrackId(id);
        } else {
            if(activeTrackId === id){
                setActiveTrackId(null);
            }
        }
    }

    return(
        <div>
            {/* Track body */}
            <div className="bg-[#EDEDED] py-2 px-4 mb-5 rounded-md shadow-sm flex items-center gap-4">
                
               {/* Image + Play/Pause Button */}
                <button 
                    onClick={handlePlayPause}
                    className="h-24 w-24 xl:h-34 xl:w-34 rounded-md bg-cover bg-center bg-no-repeat my-4 relative group cursor-pointer border-none p-0 overflow-hidden text-left appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AFA3D5] 
                    active:brightness-75 transition-all duration-150" 
                    style={{backgroundImage: `url(${imgURl})`}}
                    aria-label={!is_Playing ? `Play ${title}` : `Pause ${title}`}
                >
                    {/* Overlay - Hidden by default, shows on hover ONLY on medium+ screens (md:group-hover) */}
                    <div className="absolute inset-0 w-full h-full bg-[#181818] flex items-center justify-center transition-opacity duration-500 opacity-0 md:group-hover:opacity-80">
                        
                        {/* Icon Container */}
                        <div className="h-14 w-14 p-2 relative flex justify-center items-center pointer-events-none">
                            {!is_Playing ? (
                                <PlayIcon className="h-10 w-10 text-[#AFA3D5]" />
                            ) : (
                                <PauseIcon className="h-10 w-10 text-[#AFA3D5]" />
                            )}
                        </div>
                    </div>
                </button>

                <Visualizer
                    audioFilePath={filePath}
                    isPlaying={is_Playing}
                    setIsPlaying={handleSetIsPlaying}
                />
            </div>

            {/* Track Info */}
            <h5 className={`${dogicaPixel.className} text-[#2E2C39]`}> {title} </h5>
            <p className={`${rubik.className} my-1 text-[#5E596D]`}>{description}</p>
        </div>
    )
}

export default MusicCard;