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
        full_description: 
            ["Collaborated with over 60 people working in different disciplines over the 9 month production timeline: programming, writing, art, UI/UX, audio, design." , 

            "Led a 10 people audio team to deliver over 60 in-game SFXs, over 10 UI SFXs, and 16 BGMs. ",

            "Normalized and mixed all 200 audio assets",

            <span>Assisted with the game producer and creative director to release the 
            <a href ="https://open.spotify.com/album/332YnHugOLR57nhdGKEMUL?si=WGx7rS-CQRmXwVMYVoFNDg" 
            className="text-[#2E2C39] font-bold hover:opacity-70"> original soundtrack on Spotify </a>.</span>,

            "Conduct over 10 VA recording sessions to provide over 100 voicelines and variations as well as post-processing all of them.",

            "Created a reverb system via convolution reverb to have in-game SFX switch to different reverb depending on the player's area",

            "Implemented Typewriter SFX system to dynamically change typewriter SFX based on the current speaker",

            "Utilized doppler effect on in-game SFX to enhance player experience",

            "Co-score and co-sound designed the game trailer showcased on the Steam page."
            ],
        tag: ["Unity C#", "FMOD"],
        
    },
    {
        id: 2,
        title: "Out of Tune",
        description: "Sound Designer, Composer, and Audio Implementer for a custom 3D multiplayer puzzle game engine ",
        image: "/images/project_thumbnail/OutOfTune.png",
        directLink: "https://github.com/ucsd-cse125-sp25/group1",
        full_description: 
            ["Collaborated with a team of 8 people in UCSD's CSE 125 Software System Design and Implementation." , 

            "As the only audio person, created and implemented at least 30 audio assets including sound effects and background music.", 

            "Integrated FMOD Studio into the C++ custom game engine and balanced all audio together to deliver an immersive experience.",

            "Utilized spatial audio techniques such as doppler effect in order to have the audio play from the surround 5:1 speakers."
            ],
        tag: ["C++", "FMOD"],
    },
    {
        id: 3,
        title: "Heartwood",
        description: "Sound Designer, Composer, and Audio Implementer for 2D narrative top-down pixel RPG action-adventure game now available on itch.io.",
        image: "/images/project_thumbnail/Heartwood.png",
        directLink: "https://jashnola.itch.io/heartwood",
        full_description: 
            ["Collaborated with a team of 5 people for Gameplay First's 1 month game jam which then turned into 6 month project" , 

            <span>Composed, mixed, and mastered all 16 BGMs which is now released as 
                <a href = "https://on.soundcloud.com/HTaA07GSG9Pg2t1TNN"
                className="text-[#2E2C39] font-bold hover:opacity-70"> a soundtrack album </a>.</span>, 

            "Directed and defining the audio soundscape to match the game's aesthetic and setting",

            "Programmed Character Typewriter SFX dialogue system as well as sound designed all character dialogue SFX",

            "Enhanced dialogue system by creating tags to adjust speed and tone of speech",

            "Integrated FMOD studio and programmed a dynamic AudioManager system to switch BGM based on player's progress and area.",

            "Programmed the turn-based battle mechanics as well as sound designing its UI",

            "Utilized DaVinci Resolve to edit and score panel cutscenes."
            ],
        tag: ["Unity C#" , "FMOD"],
    },
    {
        id: 4,
        title: "Choros",
        description: "Sound Designer, Composer, and Audio Implementer for 2D mystery-crime game now availabe on itch.io.",
        image: "/images/project_thumbnail/Choros.png",
        directLink: "https://ani03.itch.io/choros",
        full_description: 
            ["Collaborated with a team of 4 people for a 3-day Winter Melon Jam." , 

            "Composed 5 BGMs inspired by Southern Gothic aesthetic and New Orleans jazz.", 

            "Sound-designed UI SFXs via foley-recording and post-processing.",

            "Mixed, normalized, and balance over 100 audio assets together.",

            "Created Typewriter SFX system to add to the game's Southern Gothic aesthetic.",

            "Programmed an Audio Manager to dynamically change BGM based on player's area and progress."
            ],
        tag: ["Unity C#", "FMOD"],
    },
    {
        id: 5,
        title: <span className="tracking-[-0.1em]">Serious Games: Climate Change</span>,
        description: "Sound Designer and Audio Implementer Intern for a 3D openworld sandbox game. Still in development",
        image: "/images/project_thumbnail/climategames.png",
        directLink: "https://qi.ucsd.edu/the-climate-games/",
        full_description: 
            ["Researched and implemented advanced spatial audio techniques to enhance immersive experiences, optimizing sound design for interactive environments" , 

            "Utilized Wwise and Metasound to debug and test sound systems, ensuring seamless audio integration and performance optimization.", 

            "Designed and implemented a Blueprint system to dynamically switch MetaSounds based on the in-game time of day, enhancing environmental realism and player immersion."
        ],
        tag: ["Unreal Engine 5", "C++", "Wwise", "Metasound"],
    }
]

const ProjectSection = () => {
    return(
        <div className="mx-4 sm:mx-10 md:mx-40 my-4 md:my-10 xl:my-15">
            <h2 className={`${dogicaPixel.className} text-[#2E2C39] font-bold text-2xl`}>
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
                codeStack={project.tag} />)}
            </div>
        </div>
        
    )
}

export default ProjectSection;



