import { motion, useScroll, useTransform } from "framer-motion";

const Features = () => {
    const features = [
        {
            title: "Drag & Drop Builder",
            desc: "Create without coding.",
        },
        {
            title: "AI-Powered Analytics",
            desc: "Smart insights in real-time.",
        },
        {
            title: "Custom Integrations",
            desc: "Works with your favorite tools.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto overflow-hidden">
                <h2 className="mb-12 text-4xl font-bold text-center">Powerful Features</h2>
                <div className="flex gap-8 pb-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="min-w-[300px] bg-gray-50 p-6 rounded-xl"
                        >
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;