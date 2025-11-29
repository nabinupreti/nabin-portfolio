import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "BIM (Bachelor of Information Management)",
            institution: "National College of Computer Studies",
            period: "2021 – Present",
            description: "TU Topper, 3rd Semester"
        },
        {
            id: 2,
            degree: "High School (Computer Science)",
            institution: "NCCS",
            period: "2019 – 2021",
            description: "CGPA 3.57/4"
        }
    ];

    const certificates = [
        {
            id: 1,
            title: "Data Analyst Certificate",
            issuer: "Datacamp",
            link: "https://www.datacamp.com/certificate/DA0024203635333",
            date: "2023" // Approximate or omit if unknown
        }
    ];

    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Education & Certifications
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        My academic journey and professional achievements
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                            <GraduationCap className="text-accent" />
                            Education
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 relative pl-8 border-l-4 border-l-accent"
                                >
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {edu.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certificates Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                            <Award className="text-accent" />
                            Certifications
                        </h3>
                        <div className="space-y-8">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
                                >
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {cert.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Issued by <span className="font-semibold text-accent">{cert.issuer}</span>
                                    </p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-accent hover:text-blue-600 transition-colors"
                                    >
                                        View Certificate <ExternalLink size={16} className="ml-1" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
