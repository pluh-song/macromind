import React from 'react';
import { Instagram, Twitter, Facebook, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const handleLinkClick = (type: string) => {
    switch (type) {
      case 'about':
        window.open('/about', '_blank');
        break;
      case 'contact':
        window.open('/contact', '_blank');
        break;
      case 'careers':
        window.open('/careers', '_blank');
        break;
      default:
        alert('Coming soon!');
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-0"
          >
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-primary mr-2" />
              <span className="text-lg font-semibold text-primary">MacroMind</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs mb-4">
              Smart nutrition planning for a healthier, more energetic you.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleLinkClick('about')}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    About
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleLinkClick('contact')}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    Contact
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleLinkClick('careers')}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    Careers
                  </motion.button>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Nutrition Guide</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Recipes</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} MacroMind. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;