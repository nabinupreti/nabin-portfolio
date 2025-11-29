import React from 'react';
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex space-x-6">
                        <a href="https://github.com/nabinupreti" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/nabinupreti/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/itsupreti/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:nupreti00@gmail.com" className="text-gray-500 hover:text-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                        Made with <Heart size={16} className="text-red-500 mx-1 fill-current" /> by Nabin Upreti
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
