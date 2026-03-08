"use client";
import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const Visualizer = ({ audioFilePath, isPlaying, setIsPlaying }) => {
    const containerRef = useRef(null);
    const wavesurferRef = useRef(null);
    
    // State to track if the component is visible on screen
    const [shouldLoad, setShouldLoad] = useState(false);

    // 1. Intersection Observer to detect when the container enters the viewport
    useEffect(() => {
        if (!containerRef.current || !audioFilePath) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // When the container comes into view, trigger the load
                if (entries[0].isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect(); // Stop observing once we've decided to load it
                }
            },
            { threshold: 0.1 } // Triggers when at least 10% of the div is visible
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [audioFilePath]);

    // 2. Initialize wavesurfer ONLY after shouldLoad becomes true
    useEffect(() => {
        if (!shouldLoad || !audioFilePath) return;

        const wavesurfer = WaveSurfer.create({
            container: containerRef.current,
            waveColor: "#AFA3D6",
            progressColor: "#2E2C39",
            cursorColor: "#EDEDED",
            cursorWidth: 1,
            url: audioFilePath,
            barWidth: 2,
            barGap: 2,
            barRadius: 3,
            height: 80,
            normalize: true,
            responsive:true,
            hideScrollbar:true,
        });

        wavesurferRef.current = wavesurfer;

        wavesurfer.on('play', () => setIsPlaying(true));
        wavesurfer.on('pause', () => setIsPlaying(false));
        wavesurfer.on('finish', () => setIsPlaying(false));

        return () => {
            wavesurfer.destroy();
        };

    }, [shouldLoad, audioFilePath]);

    // 3. Listens to play-pause button from the parent MusicCard
    useEffect(() => {
        const ws = wavesurferRef.current;
        if (!ws) return;

        if (isPlaying && !ws.isPlaying()) {
            ws.play();
        } else if (!isPlaying && ws.isPlaying()) {
            ws.pause();
        }
    }, [isPlaying]);

    return (
        // Added a fixed height class (h-[75px]) to match Wavesurfer's height
        // This gives the Observer a physical space to "see" before Wavesurfer injects the canvas
        <div ref={containerRef} className="w-3/4"></div>
    );
};

export default Visualizer;