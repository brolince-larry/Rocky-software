import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Zap, X } from 'lucide-react';

// Specialized Components
import ContactForm from './components/ContactForm.jsx';
import Services from './components/services.jsx';
import Products from './components/Products.jsx';
import TechMatrix from './components/TechMatrix.jsx';
import PaymentIntegration from './components/PaymentIntegration.jsx';

// Assets
import hero from './assets/gellary/hero.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function App() {
    const [activeFooterInfo, setActiveFooterInfo] = useState(null);

    const footerDetails = {
        'About': 'Rocky Software is a boutique engineering firm specializing in high-performance digital architecture.',
        'Services': 'We offer end-to-end development from initial wireframes to global cloud deployment.',
        'Reviews': 'Trusted by 50+ startups to deliver unshakable code and breathtaking UI.',
        'Pricing': 'Project-based pricing tailored to your specific technical requirements and timeline.',
        'Privacy Policy': 'We strictly adhere to global data protection standards. Your vision is safe with us.',
        'Terms & Condition': 'Standard professional service agreements with a focus on IP ownership for our clients.',
        'FAQ': 'Answers regarding our sprint cycles, stack recommendations, and post-launch support.',
        'Contact': 'Get in touch via our inquiry form or direct line for immediate partnership discussions.'
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

            {/* NAVIGATION */}
            <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer"
                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="bg-blue-600 text-white w-9 h-9 rounded-lg flex items-center justify-center italic font-serif shadow-xl">R</div>
                        ROCKY <span className="text-blue-600">SOFTWARE</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        {['Services', 'Products', 'Technology', 'Contact'].map((item) => (
                            <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition">{item}</button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={hero} className="w-full h-full object-cover" alt="Hero"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-blue-600"></div>
                </div>
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10 max-w-5xl">
                    <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 text-xs font-black tracking-[0.3em] uppercase mb-8">
                        <Zap size={14}/> Next-Gen Software Agency
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]">
                        Unshakable Code for <br/> <span className="text-blue-300 italic">Modern Startups.</span>
                    </h1>
                    <button onClick={() => scrollToSection('contact')}
                            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-blue-500/50 hover:shadow-2xl transition-all">
                        Initiate Project
                    </button>
                </motion.div>
            </header>

            {/* MAIN ARCHITECTURE */}
            <main>
                <Services/>
                <Products />
                <TechMatrix />
                <PaymentIntegration />

                {/* CONTACT SECTION */}
                <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h3 className="text-5xl font-black text-slate-900 leading-tight">
                                    Let's build your <br /> <span className="text-blue-600">next big thing.</span>
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
                                        <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl"><Phone size={24} /></div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Direct Line</p>
                                            <p className="text-xl font-bold">+254 710 138 172</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
                                        <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl"><MapPin size={24} /></div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">HQ Location</p>
                                            <p className="text-xl font-bold">Nairobi, Kenya</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="bg-[#050a30] text-white pt-20 pb-10 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold">🚀 We Ready 24 Hours</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Have a project in mind? Let's Talk</h2>
                        <a href="tel:+254710138172" className="bg-blue-600 inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all mt-8">
                            +254710138172 <Phone size={20} fill="currentColor"/>
                        </a>
                    </div>

                    <div className="grid md:grid-cols-4 gap-12 border-t border-white/10 pt-16 relative">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">R</div>
                                <span className="text-2xl font-black">Rocky</span>
                            </div>
                            <p className="text-slate-400 text-sm">A trusted company formed to help your business grow.</p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest">Useful Links</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                {['About', 'Services', 'Reviews', 'Pricing'].map(link => (
                                    <li key={link}>
                                        <button onClick={() => setActiveFooterInfo(link)} className="hover:text-blue-500 transition-colors">{link}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest">Support</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                {['Privacy Policy', 'Terms & Condition', 'FAQ', 'Contact'].map(link => (
                                    <li key={link}>
                                        <button onClick={() => setActiveFooterInfo(link)} className="hover:text-blue-500 transition-colors">{link}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest">Find Us</h4>
                            <p className="text-sm text-slate-400">LARRY<br/><span className="text-blue-500 font-bold">rocky@support.com</span></p>
                        </div>

                        <AnimatePresence>
                            {activeFooterInfo && (
                                <motion.div
                                    initial={{opacity: 0, scale: 0.95}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.95}}
                                    className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl z-50 p-10 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center"
                                >
                                    <button onClick={() => setActiveFooterInfo(null)} className="absolute top-6 right-6 text-white/50 hover:text-white"><X size={24}/></button>
                                    <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4">{activeFooterInfo}</span>
                                    <p className="text-2xl md:text-3xl font-light leading-tight max-w-2xl">{footerDetails[activeFooterInfo]}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </footer>
        </div>
    );
}