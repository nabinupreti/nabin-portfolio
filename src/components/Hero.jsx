import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Code } from 'lucide-react';

const Hero = () => {
    const handleScrollToProjects = (e) => {
        e.preventDefault();
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gray-50 dark:bg-gray-950">
            {/* Animated Background Elements - Tech Grid/Glow */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h2 className="text-xl md:text-2xl font-medium text-accent mb-4 inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                                Hello, I'm
                            </h2>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Nabin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Upreti</span>
                        </motion.h1>

                        <motion.h3
                            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Cloud & DevOps | Tech Enthusiast
                        </motion.h3>

                        <motion.p
                            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            I build creative digital solutions using modern web technologies. Passionate about crafting seamless user experiences and robust backend systems.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <a
                                href="/resume.pdf"
                                download="Nabin_Upreti_Resume.pdf"
                                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 transform hover:-translate-y-1"
                            >
                                <FileText size={20} />
                                Download Resume
                            </a>
                            <a
                                href="#projects"
                                onClick={handleScrollToProjects}
                                className="px-8 py-3.5 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
                            >
                                <Code size={20} />
                                View Projects
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="flex-1 relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                            {/* Tech Ring Animation */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-[-10px] rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Glowing Pulse Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gray-200 dark:bg-gray-800 z-10 p-1">
                                <img
                                    src="/profile.png"
                                    alt="Nabin Upreti"
                                    className="w-full h-full object-cover rounded-full transform group-hover:scale-115 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = 'https://ui-avatars.com/api/?name=Nabin+Upreti&background=0D8ABC&color=fff&size=512'; // Fallback
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={(e) => handleScrollToProjects(e)}
            >
                <ArrowDown size={24} className="text-gray-400 hover:text-accent transition-colors" />
            </motion.div>
        </section>
    );
};

export default Hero;
