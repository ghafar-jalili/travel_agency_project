import { UserCircleIcon, GlobeAltIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <UserCircleIcon className="w-12 h-12 text-indigo-600" />,
            title: "Personalized Service",
            description: "We tailor each trip to your preferences for a truly unique experience."
        },
        {
            icon: <GlobeAltIcon className="w-12 h-12 text-indigo-600" />,
            title: "Expert Guides",
            description: "Our guides are local experts and ensure you get the best experience."
        },
        {
            icon: <CurrencyDollarIcon className="w-12 h-12 text-indigo-600" />,
            title: "Best Value",
            description: "We offer competitive pricing without compromising on quality."
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
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

    const featureCardHover = {
        y: -5,
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    };

    const featureCardTap = {
        scale: 0.98
    };

    return (
        <motion.section
            className="py-20 bg-gradient-to-b from-gray-50 to-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
        >
            <div className="container px-4 mx-auto text-center">
                <motion.h2
                    className="mb-10 text-4xl font-bold text-gray-900"
                    variants={item}
                >
                    Why Choose Us?
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 gap-10 md:grid-cols-3"
                    variants={container}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white shadow-lg rounded-2xl"
                            variants={item}
                            whileHover={featureCardHover}
                            whileTap={featureCardTap}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WhyChooseUs;