import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { ContactService } from "../services/api";

export default function ContactForm() {
    const [uiStatus, setUiStatus] = useState('idle'); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // FIX: Set status to loading, not the error message
        setUiStatus('loading');
        setErrorMessage('');

        try {
            const response = await ContactService.send(formData);

            // Laravel usually returns success: true if you follow the senior pattern
            if (response.data.success || response.status === 200) {
                setUiStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Return to idle state after 5 seconds
                setTimeout(() => setUiStatus('idle'), 3000);
            }
        } catch (error) {
            setUiStatus('error');
            // Grabs Laravel validation errors or generic server errors
            const serverMessage = error.response?.data?.message || "Something went wrong. Please try again.";
            setErrorMessage(serverMessage);
        }
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50" />

            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                Leave your message
                {uiStatus === 'success' && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <CheckCircle className="text-green-500" size={20} />
                    </motion.div>
                )}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Your Name" required disabled={uiStatus === 'loading'}
                        className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-600 outline-none font-bold transition-all disabled:opacity-50 focus:bg-white"
                    />
                    <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="Your Email" required disabled={uiStatus === 'loading'}
                        className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-600 outline-none font-bold transition-all disabled:opacity-50 focus:bg-white"
                    />
                </div>
                <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange}
                    placeholder="Subject" disabled={uiStatus === 'loading'}
                    className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-600 outline-none font-bold transition-all focus:bg-white"
                />
                <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    rows="4" placeholder="Message" required disabled={uiStatus === 'loading'}
                    className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-600 outline-none font-bold transition-all resize-none focus:bg-white"
                />

                <AnimatePresence>
                    {uiStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm font-bold overflow-hidden"
                        >
                            <AlertCircle size={16} /> {errorMessage}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="submit"
                    disabled={uiStatus === 'loading'}
                    className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all w-full md:w-auto shadow-lg disabled:bg-slate-300 active:scale-95"
                >
                    {uiStatus === 'loading' ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : uiStatus === 'success' ? (
                        <CheckCircle size={18} />
                    ) : (
                        <Send size={18} />
                    )}
                    <span>
                        {uiStatus === 'loading' ? 'Sending...' : uiStatus === 'success' ? 'Message Sent' : 'Send Message'}
                    </span>
                </button>
            </form>
        </div>
    );
}