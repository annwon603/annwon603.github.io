import React from "react";
import localFont from "next/font/local";
import ProjectCard from './ProjectCard';

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

const ProjectData = [
    {
        id: 1,
        title: "Mariposa",
        description: "N/A",
        image: "",
        
    },
    {

    },
    {

    },
    {

    },
    {

    }
]

const ProjectSection = () => {
    return(
        <div className="mx-24 my-20">
            <h2 className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-lg`}>
                Projects 
            </h2>
        </div>
        
    )
}

export default ProjectSection;



