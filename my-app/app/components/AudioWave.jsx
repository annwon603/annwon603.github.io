"use client";
import React,{useState, useRef, useEffect} from "react";
import { AudioVisualizer } from 'react-audio-visualize';



const Visualizer = ({audioFilePath, currentTime}) => {
    //Blob is basically large audio binary file for example: .wav or .mp3
    const [blob, setBlob] = useState(null);
    const visualizerRef = useRef(null);

    //Converts audio filepath to blob
    useEffect(() =>{
        const fetchAudio = async () => {
            try{
                const response = await fetch(audioFilePath);
                const audioBlob = await response.blob();
                setBlob(audioBlob);
            }catch(error)
            {
                console.error("Failed to load audio file:", error);
            }
        };

        fetchAudio();
    }, [audioFilePath]);


    return(
        <div className="flex-1">
            {blob && (
            <AudioVisualizer
                ref={visualizerRef}
                blob={blob}
                width={500}
                height={75}
                barWidth={2}
                gap={1}
                barColor={'#f76565'} //Unplayed color
                barPlayedColor={"#FFFFFF"}
                currentTime={currentTime}
            />
            )}
        </div>
    )
}

export default Visualizer;