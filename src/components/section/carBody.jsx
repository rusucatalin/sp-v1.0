import React from 'react';
import {CarTypeAnimation} from "../../animation/carTypeAnimation.jsx";


const carLogos = [
    { name: "SUV", logo: "./suv.png" },
    { name: "Crossover", logo: "./crossover.png" },
    { name: "Sedan", logo: "./sedan.png" },
    { name: "Hatchback", logo: "./hatchback.png" },
    { name: "Universal", logo: "./universal.png" },
];

export default function CarBody() {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-800 mb-4">
                Select Your Car
            </h2>

            <div className="flex justify-center items-end gap-6 flex-wrap">
                {carLogos.map((car, index) => (
                    <CarTypeAnimation key={index} index={index}>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex justify-center items-center w-32 h-32 border-2 rounded-xl border-black bg-white">
                                <img
                                    src={car.logo}
                                    alt={car.name}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <span className="font-medium text-black text-sm">
                                {car.name}
                            </span>
                        </div>
                    </CarTypeAnimation>
                ))}
            </div>
        </div>
    );
}
