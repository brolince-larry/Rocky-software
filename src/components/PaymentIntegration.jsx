import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Zap, CheckCircle2, Globe } from 'lucide-react';

import PAYMENT from '../assets/gellary/payment.png';
import paypalLogo from '../assets/gellary/paypal.png';
import visaLogo from '../assets/gellary/visa.png';
import mpesaLogo from '../assets/gellary/mpesa.png';

const logos = [
    { id: 1, src: mpesaLogo, alt: "M-Pesa", color: "text-green-600" },
    { id: 2, src: paypalLogo, alt: "PayPal", color: "text-blue-600" },
    { id: 3, src: visaLogo, alt: "Visa", color: "text-blue-800" }
];

export default function PaymentIntegration() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logic to cycle through logos one by one
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % logos.length);
        }, 3000); // Changes every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="payments" className="py-32 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100">
                                <ShieldCheck size={14} /> Global Payment Standards
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                                Seamless <br />
                                <span className="text-blue-600 italic">Transaction</span> Flow.
                            </h2>
                        </div>

                        {/* Animated Logo Display (One by One) */}
                        <div className="h-12 flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={logos[currentIndex].id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={logos[currentIndex].src}
                                        alt={logos[currentIndex].alt}
                                        className="h-8 md:h-10 w-auto object-contain  transition-all"
                                    />
                                    <span className={`text-xs font-black uppercase tracking-widest ${logos[currentIndex].color}`}>
                                        {logos[currentIndex].alt} Active
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
                            We bridge the gap between local mobile money and global banking with high-throughput gateways.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                                <Globe size={18} className="text-blue-500" />
                                <span className="text-sm font-bold text-slate-700">Multi-Currency</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                                <Zap size={18} className="text-orange-500" />
                                <span className="text-sm font-bold text-slate-700">Instant Settlement</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT: The Sliding Hero Image */}
                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full -z-10 blur-[120px] opacity-40"></div>

                        <motion.div
                            initial={{ opacity: 0, x: 120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.18)] border-[12px] border-white bg-slate-100">
                                <img
                                    src={PAYMENT}
                                    alt="Secure Transaction UI"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Verified Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -bottom-8 -left-4 md:-left-12 bg-white p-5 md:p-7 rounded-[2.5rem] shadow-2xl flex items-center gap-5 border border-slate-50 z-20"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center text-white">
                                    <CheckCircle2 size={32} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Status</p>
                                    <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">Verified</h4>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}