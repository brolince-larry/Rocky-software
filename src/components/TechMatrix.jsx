import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Landmark, BrainCircuit } from 'lucide-react';

const techCircles = [
    {
        id: "web",
        label: "Web Core",
        icon: <Globe className="w-5 h-5 md:w-8 md:h-8"/>,
        subIcons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        ],
        xRange: ["2%", "65%"],
        yRange: ["10%", "50%"],
        duration: 12
    },
    {
        id: "banking",
        label: "Banking & Systems",
        icon: <Landmark className="w-5 h-5 md:w-8 md:h-8"/>,
        subIcons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        ],
        xRange: ["68%", "5%"],
        yRange: ["40%", "10%"],
        duration: 16
    },
    {
        id: "mobile",
        label: "Mobile Ecosystem",
        icon: <Smartphone className="w-5 h-5 md:w-8 md:h-8"/>,
        subIcons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
        ],
        xRange: ["5%", "60%"],
        yRange: ["60%", "30%"],
        duration: 20
    },
    {
        id: "ai",
        label: "AI & Data Science",
        icon: <BrainCircuit className="w-5 h-5 md:w-8 md:h-8"/>,
        subIcons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        ],
        xRange: ["60%", "10%"],
        yRange: ["15%", "65%"],
        duration: 14
    }
];

export default function TechMatrix() {
    return (
        <section id="technology" className="py-24 bg-white overflow-hidden relative min-h-[700px] md:min-h-[900px] border-y border-slate-100">

            {/* Professional Section Header */}
            <div className="relative z-30 container mx-auto px-6 pointer-events-none">
                <div className="text-center md:text-left mb-16">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Proprietary Stack</span>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Engineering <span className="text-slate-300 italic">Matrix</span>
                    </h3>
                </div>
            </div>

            {/* Animation Canvas */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pt-20">
                {techCircles.map((circle) => (
                    <motion.div
                        key={circle.id}
                        initial={{ left: circle.xRange[0], top: circle.yRange[0] }}
                        animate={{ left: circle.xRange, top: circle.yRange }}
                        transition={{
                            duration: circle.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="absolute p-4 flex flex-col items-center"
                    >
                        {/* THE CIRCLE: High Visibility Glassmorphism */}
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-60 md:h-60 rounded-full border-2 border-slate-50 bg-white/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] backdrop-blur-xl flex flex-col items-center justify-center group hover:border-blue-400 hover:z-50 transition-all duration-700">

                            <div className="hidden sm:block text-slate-400 mb-1 md:mb-4 group-hover:text-blue-600 transition-colors">
                                {circle.icon}
                            </div>

                            <div className="flex gap-2 md:gap-5 px-3 flex-wrap justify-center items-center">
                                {circle.subIcons.map((url, index) => (
                                    <img
                                        key={index}
                                        src={url}
                                        alt="tech"
                                        className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain filter drop-shadow-sm"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* THE LABEL: Floating Outside & Below the circle */}
                        <div className="mt-6 md:mt-10 pointer-events-none text-center">
                            <span className="text-slate-300 text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em] block">
                                {circle.label}
                            </span>
                            {/* Accent line for premium feel */}
                            <div className="w-8 h-[1px] bg-slate-200 mx-auto mt-2 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-700"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}