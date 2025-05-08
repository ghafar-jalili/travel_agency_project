import React from 'react';
import Footer from '../components/footer/Footer';
import { Navbar } from 'react-bootstrap';
import backgroundImage from '../assets/bg/50a5c74b2ca565b00a660cba9d86f82e.jpg';
import { LuMessageSquareMore } from "react-icons/lu";
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Contact() {
    return (
        <>
            <Navbar />

            {/* Background Image with Blur */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-center bg-cover -z-10"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    filter: 'blur(2px)',
                    backgroundSize: "cover"
                }}
            />

            <div className="flex items-center justify-center min-h-screen p-4">
                <motion.div
                    className="w-full max-w-5xl p-10 text-white shadow-xl bg-white/10 backdrop-blur-sm rounded-2xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        {/* Left side */}
                        <motion.div variants={fadeInUp} className='hidden md:block'>
                            <h2 className="mb-2 text-4xl font-bold">Let's talk!</h2>
                            <p className="mb-6 text-sm text-white/80">We’d love to hear from you. Please fill out the form.</p>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                            >
                                <LuMessageSquareMore size={220} className="mt-8 text-white opacity-90" />
                            </motion.div>
                        </motion.div>

                        {/* Right side: Form */}
                        <motion.form className="space-y-6" variants={fadeInUp}>
                            <div>
                                <label htmlFor="name" className="block mb-1 text-sm font-medium">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 text-black transition rounded-md bg-white/70 placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 text-black transition rounded-md bg-white/70 placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 text-black transition rounded-md bg-white/70 placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 font-semibold rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-[1.02] transition-transform duration-300"
                            >
                                Send Message
                            </button>
                        </motion.form>
                    </div>

                    {/* Google Map */}
                    <motion.div className="mt-12" variants={fadeInUp}>
                        <h3 className="mb-4 text-2xl font-semibold">Our Location</h3>
                        <div className="w-full h-64 overflow-hidden shadow-lg rounded-xl">
                            <iframe
                                title="Kabul Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.572456983184!2d69.2074863152105!3d34.55534958047168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16ebf0d3f0f3b%3A0x7f0e6b9c0c0e0e0!2sKabul%2C%20Afghanistan!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </>
    );
}
