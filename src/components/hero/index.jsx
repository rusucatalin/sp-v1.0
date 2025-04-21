import React, { useEffect, useRef } from 'react';
import { runTextAnimation } from "../../animation/textRunAnimation.js";
import {ScrollRevealAnimation} from "../../animation/imageRevealAnimation.jsx";


export default function Hero() {
    const textRef = useRef(null);

    const images = [
        "/hn.png",
        "/re.png",
        "/sk.png",
        "/cu.png",
        "/vw.png"
    ];

    useEffect(() => {
        runTextAnimation(textRef);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="min-h-[20rem] flex items-center justify-center bg-white relative w-full">
                <div
                    ref={textRef}
                    className="absolute w-full mb-[10rem] text-[3rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold text-transparent z-10 text-center select-none tracking-tight"
                    style={{ WebkitTextStroke: '3px rgba(0, 0, 0, 0.2)', textStroke: '3px rgba(0, 0, 0, 0.2)' }}
                >
                    Supreme Rentals
                </div>
                <div className="w-full max-w-5xl mx-auto mt-28 px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center gap-4 flex-wrap">
                    {images.map((img, index) => (
                        <ScrollRevealAnimation key={index} index={index}>
                            <img
                                src={img}
                                alt={`Logo ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </ScrollRevealAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
}
