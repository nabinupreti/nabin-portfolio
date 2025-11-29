import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        About Me
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            I am a motivated tech enthusiast with strong interest in web development and emerging technologies. I enjoy learning new tools, building creative solutions, and contributing to real-world projects. I’m eager to gain hands-on experience through internships and grow professionally.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
