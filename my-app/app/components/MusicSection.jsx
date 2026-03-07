import React from "react";
import localFont from "next/font/local";
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

const musicData = [
    {
        id: 1,
        title: "Intro",
        image: "/",
        description: "",
        file: ""
    },
    {
        id: 2,
        title: "",
        image: "/",
        description: "",
        file: ""
    },
    {
        id: 3,
        title: "",
        image: "/",
        description: "",
        file: ""
    },
    {
        id: 4,
        title: "",
        image: "/",
        description: "",
        file: ""
    },
     {
        id: 5,
        title: "",
        image: "/",
        description: "",
        file: ""
    }

]


const MusicSection = () =>
{
    return(
        <div className="mx-4 sm:mx-10 md:mx-40 my-4 md:my-10 xl:my-15 xl:py-25 py-10">
            <h2 className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-2xl`}>
                Music
            </h2>

        </div>
    )
}

export default MusicSection;
