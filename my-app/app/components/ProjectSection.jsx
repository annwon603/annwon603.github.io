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

const projectData = [
    {    
        id: 1,
        title: "Mariposa",
        description: "Audio Lead, Sound Designer, and Composer for 2D storytelling puzzle platformer game now available on Steam.",
        image: "/images/project_thumbnail/Mariposa.jpg",
        directLink: "https://store.steampowered.com/app/3991120/Mariposa/",
        full_description: "",
        tag: ["Unity C#", "FMOD"],
        
    },
    {
        id: 2,
        title: "Out of Tune",
        description: "N/A",
        image: "/images/project_thumbnail/Mariposa.jpg",
        directLink: "/",
        full_description: "blah",
        tag: [],
    },
    {
        id: 3,
        title: "Heartwood",
        description: "N/A",
        image: "",
        directLink: "/",
        full_description: "blah",
        tag: [],
    },
    {
        id: 4,
        title: "Choros",
        description: "N/A",
        image: "",
        directLink: "/",
        full_description: "blah",
        tag: [],
    },
    {
        id: 5,
        title: "Serious Games: Climate Change",
        description: "N/A",
        image: "",
        directLink: "/",
        full_description: "blah",
        tag: [],
    }
]

const ProjectSection = () => {
    return(
        <div className="mx-4 sm:mx-10 md:mx-40 my-20">
            <h2 className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-lg`}>
                Projects 
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 mt-6">
                {projectData.map((project) => 
                <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgURL={project.image}
                directURL={project.directLink}
                fullDescription={project.full_description}
                codeStack={project.tag} />)}</div>
        </div>
        
    )
}

export default ProjectSection;



