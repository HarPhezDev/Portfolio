import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiCode, FiSmartphone, FiLayers } from 'react-icons/fi';

const Services = () => {
    const services = [
        {
            title: "Frontend Development",
            desc: "Building scalable, high-performance web applications using React and modern JavaScript.",
            icon: <FiCode className="text-blue-500" size={28} />,
        },
        {
            title: "Responsive Design",
            desc: "Ensuring your digital tools work seamlessly across all devices, from mobile to ultra-wide monitors.",
            icon: <FiLayout className="text-blue-500" size={28} />,
        },
        {
            title: "UI/UX Implementation",
            desc: "Transforming design concepts into interactive, accessible, and user-friendly interfaces.",
            icon: <FiLayers className="text-blue-500" size={28} />,
        },
        {
            title: "Testing",
            desc: "Conducting thorough testing of websites to ensure functionality, performance, and user experience are flawless across browsers and devices.",
            icon: <FiMonitor className="text-blue-500" size={28} />,
        }, {
            title: "API Integration",
            desc: "Connecting websites and applications to external APIs for real-time data, services, and seamless functionality.",
            icon: <FiLink className="text-blue-500" size={28} />,
        },

        {
            title: "Maintenance & Updates",
            desc: "Regularly updating websites, fixing bugs, and ensuring optimal performance and security over time.",
            icon: <FiRefreshCcw className="text-blue-500" size={28} />,
        },

        {
            title: "Accessibility",
            desc: "Ensuring websites are usable by everyone, including people with disabilities, following best practices and standards.",
            icon: <FiUserCheck className="text-blue-500" size={28} />,
        }
    ];

    return (
        <section id="services" className="py-20 px-4 md:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-blue-500">Services</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <motion.div
                     
                        key={`${service.title}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300"
                    >
                        <div className="mb-6 p-4 bg-blue-500/10 w-fit rounded-2xl">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;