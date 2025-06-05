import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">MacroMind</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="text-text dark:text-gray-200 hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="text-text dark:text-gray-200 hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('features')}
            >
              Features
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="text-text dark:text-gray-200 hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('sample-meals')}
            >
              Sample Meals
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="text-text dark:text-gray-200 hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('macro-education')}
            >
              Macro Education
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-text" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
              onClick={() => scrollToSection('personalization')}
            >
              Get Started
            </motion.button>
          </nav>

          <button 
            className="md:hidden text-text dark:text-gray-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 px-4 space-y-4"
          >
            <a onClick={() => scrollToSection('hero')} className="block text-text dark:text-gray-200 hover:text-primary py-2">Home</a>
            <a onClick={() => scrollToSection('features')} className="block text-text dark:text-gray-200 hover:text-primary py-2">Features</a>
            <a onClick={() => scrollToSection('sample-meals')} className="block text-text dark:text-gray-200 hover:text-primary py-2">Sample Meals</a>
            <a onClick={() => scrollToSection('macro-education')} className="block text-text dark:text-gray-200 hover:text-primary py-2">Macro Education</a>
            <div className="flex items-center justify-between">
              <button 
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-200" />
                ) : (
                  <Moon className="h-5 w-5 text-text" />
                )}
              </button>
              <button 
                className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                onClick={() => scrollToSection('personalization')}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;