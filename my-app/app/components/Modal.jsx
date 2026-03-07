import React from "react";
import RetroWindow from "./WindowTab";
import localFont from "next/font/local";
import {Rubik} from 'next/font/google';

const rubik = Rubik({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['300','400','500','600','700','800','900'],

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

const Modal = ({ handleShowModal ,  descriptionList}) => {
    return(
        <div 
            className="w-full h-full fixed px-100 left-0 z-50 top-0 backdrop-filter backdrop-brightness-60 backdrop-blur-md flex justify-center items-center"
            onClick={handleShowModal}
        >
            <div onClick={(e) => e.stopPropagation()}>
                <RetroWindow title="MY CONTRIBUTIONS" onClose={handleShowModal}>
                    <div className="p-4">
                        <ul className={`${rubik.className} text-[#2E2C39] font-normal text-md leading px-3 mx-1 tracking-tighter list-outside list-disc `}>
                            {descriptionList.map((description,index) =>
                                <li key={index} className="mb-2">
                                    {description}
                                </li>
                            )}
                        </ul>
                    </div>
                </RetroWindow>
            </div>
        </div>
    );
};

export default Modal;