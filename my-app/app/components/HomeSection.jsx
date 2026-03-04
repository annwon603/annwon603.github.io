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

const HomeSection = () => {
    return(
        <section>
            <div className = "grid grid-cols-2 lg: grid-cols-12">
                <div className = "col-span-7">
                    <h1 className={`${dogicaPixel.className} text-[#2E2C39] mb-8 text-4xl font-bold`}>
                        Hello!
                    </h1>
                    <p className = {`${dogicaPixel.className} text-[#2E2C39] text-2xl leading-7 mb-4 font-normal`}>
                        Welcome to my portfolio!
                    </p>
                    <p className = "text-[#2E2C39] text-2xl leading-7 mb-7.5">
                        My name is Annie Wong and I'm a recent UCSD grad. 
                    </p>
                    <p className = "text-[#2E2C39] text-2xl leading-7 mb-8">
                        I'm a <i>sound designer, audio implementator, composer,</i> and 
                        <i> music producer.</i>
                    </p>
                    <p className = "text-[#2E2C39] text-2xl leading-7">
                        I spend my free time watching anime, listening to and making music, and playing
                        story-telling games (Fav Game: Life is Strange, Detroit: Become Human, Omori, + more)!
                    </p>
                </div>

            </div>
        </section>
    )
};

export default HomeSection;