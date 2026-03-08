"use client";
import React, {useState,useRef} from "react";
import {PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import localFont from "next/font/local";
import {Rubik} from 'next/font/google';
import dynamic from 'next/dynamic';


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

const rubik = Rubik({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['300','400','500','600','700','800','900'],

})

const Visualizer = dynamic(() => import('./AudioWave'), { 
    ssr: false 
});

const MusicCard = ({imgURl, title, description, filePath}) => {
    const [playPauseOpen, setPlayPauseOpen] = useState(false);
    const[currentTime, setCurrentTime] = useState(0);

    const handlePlayPause = () =>{
        if(playPauseOpen){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setPlayPauseOpen(!playPauseOpen);
    }

    //Reference to the actual HTML5 audio format
    const audioRef = useRef(null);

    const audioFilePath = {filePath};

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    }

    return(
        <div>
            {/* //Track body */}
            <div className="bg-[#EDEDED] py-2 px-4 mb-5 rounded-md shadow-sm">
                {/* //Image + Play/Pause Button */}
                <div className="h-24 w-24 xl:h-34 xl:w-34 rounded-md
                bg-cover bg-center bg-no-repeat my-4 relative group"
                style={{backgroundImage: `url(${imgURl})`}}
                >
                    <div className="overlay items-center justify-center rounded-md absolute top-0 left-0 w-full h-full
                        bg-[#181818] opacity-0 hidden
                        group-hover:flex group-hover:opacity-80
                        transition-duration-500 ">
                        

                        {/* PlayButton */}
                        <button onClick={handlePlayPause}
                            className="h-14 w-14 p-2 relative justify-center items-center text-center">
                                {!playPauseOpen ? (
                                    <PlayIcon className="h-10 w-10 text-[#AFA3D5] cursor-pointer hover:text-white
                                        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    </PlayIcon>
                                ):
                                    <PauseIcon className="h-10 w-10 text-[#AFA3D5] cursor-pointer hover:text-white
                                        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    </PauseIcon>
                                }
                                
                        </button>
                    </div>
                </div>

                <audio
                    ref={audioRef}
                    src={audioFilePath}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={()=> setPlayPauseOpen(false)} //Resets when songs end
                />

                <Visualizer
                    audioFilePath={audioFilePath}
                    currentTime={currentTime}
                />
            </div>
            <h5 className={`${dogicaPixel.className} text-[#2E2C39]`}> {title} </h5>
            <p className={`${rubik.className} my-1 text-[#5E596D]`}>{description}</p>
        </div>
    )
}

export default MusicCard;