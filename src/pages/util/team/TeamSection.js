import React from 'react';
import { motion } from 'framer-motion';
import t1 from "../../../assets/team/images (1).jpeg";
import t2 from "../../../assets/team/images (2).jpeg";
import t3 from "../../../assets/team/images (3).jpeg";
import t4 from "../../../assets/team/images.jpeg";

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Shabir Khan",
            role: "Lead Travel Expert",
            bio: "Visionary leader who established Jalili with a passion for authentic travel experiences.",
            img: t1,
            social: {
                twitter: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Khan Mohammad",
            role: "Marketer",
            bio: "Crafts bespoke itineraries that transform ordinary trips into extraordinary adventures.",
            img: t2,
            social: {
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Inam U Rahman",
            role: "Web Developer",
            bio: "Ensures seamless execution of every journey with military precision.",
            img: t4,
            social: {
                linkedin: "#",
                instagram: "#",
            }
        },
        {
            name: "Ghafar Jalili",
            role: "CEO & Founder",
            bio: "Connects travelers with authentic local experiences across Afghanistan.",
            img: t3,
            social: {
                instagram: "#",
                twitter: "#"
            }
        }
    ];

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
            scale: 0.9
        },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 12px 20px rgba(0,0,0,0.2)",
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
                        Our Experts
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                        Meet the Dream Team
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
                        Passionate professionals dedicated to crafting your perfect journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg group hover:shadow-2xl"
                        >
                            <div className="relative overflow-hidden h-80">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-lg text-indigo-500">{member.role}</p>
                                <p className="mt-2 text-gray-600">{member.bio}</p>

                                <div className="flex mt-4 space-x-4">
                                    {member.social.twitter && (
                                        <a href={member.social.twitter} className="text-gray-400 transition-colors duration-300 hover:text-indigo-500">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    )}
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} className="text-gray-400 transition-colors duration-300 hover:text-indigo-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    )}
                                    {member.social.instagram && (
                                        <a href={member.social.instagram} className="text-gray-400 transition-colors duration-300 hover:text-indigo-500">
                                            <span className="sr-only">Instagram</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
