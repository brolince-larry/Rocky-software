import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu } from "lucide-react"; // Changed from CheckCircle to CheckCircle2

import posImage from '../assets/gellary/pos.png';
import smsImage from '../assets/gellary/sms.png';
import mailImage from '../assets/gellary/email.jpeg';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Products = () => {
    return (
        <section id="products" className="py-32 bg-slate-50 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
                        Proprietary Assets
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Ready-to-Deploy <span className="italic text-slate-400">Products</span>
                    </h3>
                </motion.div>

                <div className="space-y-32">
                    {/* 1. POS Software */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl group-hover:bg-blue-600/20 transition duration-1000"></div>
                                <img
                                    src={posImage}
                                    alt="POS System"
                                    className="relative rounded-[2.5rem] shadow-2xl border border-white hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-6"
                        >
                            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center font-black">
                                01
                            </div>
                            <h4 className="text-4xl font-black text-slate-900">Next-Gen Point of Sales</h4>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our POS architecture handles real-time inventory management with an ultra-responsive
                                interface designed for high-traffic retail environments.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" size={18}/> Real-time Tracking
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" size={18}/> Secure Payments
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" size={18}/> Custom Inventory
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-600" size={18}/> UX-Optimized
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* 2. Bulk SMS Service */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-orange-600/10 rounded-[3rem] blur-2xl group-hover:bg-orange-600/20 transition duration-1000"></div>
                                <img
                                    src={smsImage}
                                    alt="Bulk SMS"
                                    className="relative rounded-[2.5rem] shadow-2xl border border-white hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-6 text-right lg:text-left"
                        >
                            <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center font-black ml-auto lg:ml-0">
                                02
                            </div>
                            <h4 className="text-4xl font-black text-slate-900">Bulk SMS Ecosystem</h4>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Connect with thousands in seconds. Built for high delivery rates and seamless
                                API integration for marketing automation.
                            </p>
                            <div className="flex gap-4 justify-end lg:justify-start">
                                <span className="px-4 py-2 bg-slate-200 rounded-full text-xs font-black uppercase tracking-widest text-slate-600">
                                    API First
                                </span>
                                <span className="px-4 py-2 bg-slate-200 rounded-full text-xs font-black uppercase tracking-widest text-slate-600">
                                    Scheduled
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3. Mail Express */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            whileInView={{ scale: 1, opacity: 1 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <img
                                src={mailImage}
                                alt="Mail Express"
                                className="rounded-[2.5rem] shadow-2xl hover:rotate-2 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-6"
                        >
                            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-2xl flex items-center justify-center font-black">
                                03
                            </div>
                            <h4 className="text-4xl font-black text-slate-900">Mail Express Automator</h4>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Enterprise-grade Gmail automation. Manage multiple accounts and deploy
                                customizable HTML templates with Excel integration.
                            </p>
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                                <Cpu size={20}/> View Architecture
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;