import { motion } from "framer-motion";

const ValueProp = () => {
    const items = [
        {
            icon: "🚀",
            title: "Lightning Fast",
            desc: "Optimized for speed and performance.",
        },
        {
            icon: "💡",
            title: "Innovative Solutions",
            desc: "Stay ahead with the latest tech.",
        },
        {
            icon: "🛡️",
            title: "Secure & Reliable",
            desc: "Enterprise-grade security.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-4xl font-bold text-center"
                >
                    Why Choose Us?
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 text-center bg-white shadow-lg rounded-xl"
                        >
                            <div className="mb-4 text-4xl">{item.icon}</div>
                            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;