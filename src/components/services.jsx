import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe, Monitor, Smartphone,
    BrainCircuit, BarChart3, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import enterprise from '../assets/gellary/enterprise.png';
import data from '../assets/gellary/data.png';
import mobile from '../assets/gellary/mobile.png';
import secure from '../assets/gellary/secure.png';
import ui from '../assets/gellary/ui.png';
import Ai from '../assets/gellary/ai.png';

const services = [
    {
        title: "Enterprise Web Systems",
        desc: "We engineer high-availability web ecosystems using React, Next.js, and robust Laravel backends.",
        icon: <Globe size={28} />,
        img: enterprise,
        tag: "Scalable"
    },
    {
        title: "UI/UX Experience Design",
        desc: "Our design lab crafts visually breathtaking interfaces focused on conversion and user retention.",
        icon: <Monitor size={28} />,
       img: ui,
        tag: "Modern"
    },
    {
        title: "Native Mobile Ecosystems",
        desc: "From Swift-powered iOS apps to high-performance Android solutions using Flutter and React Native.",
        icon: <Smartphone size={28} />,
        img: mobile,
        tag: "Cross-Platform"
    },
    {
        title: "Cognitive AI Integration",
        desc: "Integrating LLMs and custom RAG pipelines to give your business an intelligent edge.",
        icon: <BrainCircuit size={28} />,
        img: Ai,
        tag: "AI First"
    },
    {
        title: "Big Data Intelligence",
        desc: "Real-time analytics dashboards providing deep-layer insights for data-driven decisions.",
        icon: <BarChart3 size={28} />,
        img: data,
        tag: "Analytics"
    },
    {
        title: "Fintech & Secure Payments",
        desc: "PCI-DSS compliant financial architectures with seamless M-Pesa and Stripe integrations.",
        icon: <ShieldCheck size={28} />,
        img: secure,
        tag: "Secure"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                            Capabilities
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                            World-Class Solutions for <br />
                            <span className="text-blue-600 italic">Digital Leaders.</span>
                        </h3>
                    </div>
                    <p className="text-slate-500 text-lg font-medium max-w-sm">
                        We blend precision engineering with creative strategy to build products that define industries.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -12 }}
                            className="group bg-slate-50 rounded-[2.5rem] p-4 border border-slate-100 hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="relative h-64 overflow-hidden rounded-[2rem] mb-8">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                                    {service.tag}
                                </div>
                            </div>

                            <div className="px-6 pb-8">
                                <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:rotate-6 transition-transform">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 flex items-center justify-between">
                                    {service.title}
                                    <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 transition-colors" size={20} />
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}