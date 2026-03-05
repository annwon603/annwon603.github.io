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
                    <h1 className={`${dogicaPixel.className} text-[#2E2C39] mb-8 text-1xl font-bold`}>
                        This is Annie Wong
                    </h1>
                    <p className = {`${dogicaPixel.className} text-[#2E2C39] text-1xl leading-7 mb-4 font-normal`}>
                        Welcome to my portfolio!
                    </p>
                    <p className = {`${dogicaPixel.className} text-[#2E2C39] text-1xl leading-7 mb-7.5 font-bold`}>
                        Recent UCSD grad majoring in ICAM-Music. 
                    </p>
                    <p className = {`${dogicaPixel.className} text-[#2E2C39] text-sm leading-7 mb-7.5 font-bold`}>
                        Sound designer, audio implementator, composer and music producer.
                    </p>
                </div>

            </div>
        </section>
    )
};

export default HomeSection;