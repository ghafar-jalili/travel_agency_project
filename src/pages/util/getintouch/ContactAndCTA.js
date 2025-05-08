import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from "../../../components/Booking_modal/BookingModal";
import { motion } from 'framer-motion';

const ContactAndCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',   // Added email field
        departure: '', // Added departure date field
        return: '',    // Added return date field
        passengers: '' // Added passengers field
    });
    const [verificationCode, setVerificationCode] = useState('AB12CD'); // Example verification code

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsModalOpen(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const ctaVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        }
    };

    const buttonHover = {
        scale: 1.05,
        transition: { duration: 0.2 }
    };

    const buttonTap = {
        scale: 0.98
    };

    return (
        <>
            {/* Contact Section */}
            <motion.section
                className="py-20 bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="container px-4 mx-auto text-center">
                    <motion.h2
                        className="mb-4 text-4xl font-bold text-gray-800"
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        className="mb-8 text-lg text-gray-600"
                        variants={itemVariants}
                    >
                        Have any questions? We'd love to hear from you!
                    </motion.p>
                    <motion.div
                        className="flex flex-col items-center space-y-4"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="flex items-center space-x-2 text-gray-700"
                            variants={itemVariants}
                        >
                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>(123) 456-7890</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-2 text-gray-700"
                            variants={itemVariants}
                        >
                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>contact@jalilitravel.com</span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="py-20 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ctaVariants}
            >
                <div className="container px-4 mx-auto">
                    <motion.h2
                        className="mb-4 text-4xl font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Ready to Book Your Dream Vacation?
                    </motion.h2>
                    <motion.p
                        className="mb-8 text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Let us help you create the perfect travel experience!
                    </motion.p>
                    <motion.button
                        onClick={openModal}
                        className="inline-block px-8 py-3 text-lg font-semibold text-white transition rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:opacity-90"
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                    >
                        Reserve Now
                    </motion.button>
                </div>
            </motion.section>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={closeModal}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                verificationCode={verificationCode}
            />
        </>
    );
};

export default ContactAndCTA;
