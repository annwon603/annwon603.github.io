"use client";
import React, {useState} from "react";
import localFont from "next/font/local";
import MusicCard from './MusicCard';
import {Rubik,Space_Mono} from 'next/font/google';

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


const musicData = [
    {
        id: 1,
        title: "Glass of Water",
        image: "/images/music_thumbnail/Mariposa.jpg",
        description: <span>Produced, mixed, and mastered for the pier area in "<b>Mariposa</b>" 
        <br></br> Inspired by Porter Robinson's Nurture album, a botantica album. </span>,
        file: "/audio/Pier 12.3 Master FINAL.wav"
    },
    {
        id: 2,
        title: "Accusation",
        image: "/images/music_thumbnail/Choros.png",
        description: <span> Produced, mixed, and mastered for "<b>Choros</b>" <br></br>
            Inspired by the dark-orchestral soundtrack in Sinners (2025). </span>,
        file: "/audio/Accusation Mastered Ver1.wav"
    },
    {
        id: 3,
        title: "Electro Swing",
        image: "/images/music_thumbnail/ScreamingKeys.png",
        description: <span> Produced, mixed, and mastered for "<b>Magitune and Memory</b>", 
            a point and click game displayed at <span className="font-medium">MAVERic Studio </span>'s DnD inspired steampunk exhibit at 
            <span className="font-semibold italic"> San Diego Comic Con</span>.</span>,
        file: "/audio/ElectroSwing Master Ver 1(Pow 2).wav"
    },
    {
        id: 4,
        title: "Starsick",
        image: "/images/music_thumbnail/HeartwoodAlbum.png",
        description: <span> Composed, mixed, and mastered for "<b>Heartwood</b>" 
            <br></br>Vocal by <span className="font-medium">Breanna Lau </span>
             and <span className="font-medium">Bree Tassinari</span><br></br>
            Inspired by Slavic traditional music and Dragon Age Inquisition.</span>,
        file: "/audio/HeartwoodSiblingFight-Master Ver5.wav"
    },
     {
        id: 5,
        title: "Intro",
        image: "/images/music_thumbnail/dontspaceouticon.png",
        description: <span> Produced for the title screen of "<b>Don't Space Out</b>" 
            <br></br> Inspired by Retro 8-bit space games such as Space Invaders and Asteroids.</span>,
        file: "/audio/8bitIntro.wav"
    }

]


const MusicSection = () =>
{
    const [activeTrackId, setActiveTrackId] = useState(null);
    return(
        <div className="mx-4 sm:mx-10 md:mx-40 mt-4 md:mt-10 xl:mt-15 xl:py-25 py-10">
            <h2 className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-2xl`}>
                Music
            </h2>
            <p className={`${space_mono.className} text-[#2e2c3990] text-sm mt-1`}>
                Click on the image to play the track!
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 mt-6">
                {musicData.map((music) =>
                <MusicCard
                key={music.id}
                id={music.id}
                title={music.title}
                description={music.description}
                imgURl={music.image}
                filePath={music.file} 
                activeTrackId={activeTrackId} //Pass currently playing ID
                setActiveTrackId={setActiveTrackId} //Pass function to change it
                />)}
            </div>
        </div>
    )
}

export default MusicSection;
