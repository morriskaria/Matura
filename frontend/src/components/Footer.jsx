import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import logoImage from '../assets/Futuristic neon-them.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Software Development', path: '/services#software' },
        { name: 'Hardware Solutions', path: '/services#hardware' },
        { name: 'Automation', path: '/services#automation' },
        { name: 'IT Consultancy', path: '/services#consultancy' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', external: true, icon: Github },
        { name: 'Twitter', external: true, icon: Twitter },
        { name: 'LinkedIn', external: true, icon: Linkedin },
      ],
    },
  ];

  return (
    <footer className="bg-dark-800/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="MaturaCo Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions.
              Your trusted partner in software development, hardware solutions,
              and automation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-neon-blue" />
                <span>contact@maturaco.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-neon-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-neon-blue" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href="#"
                        className="text-gray-400 hover:text-neon-pink transition-colors duration-200 flex items-center space-x-2"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-neon-pink transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MaturaCo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-neon-pink text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-neon-pink text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-neon-pink/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-neon-purple/5 rounded-full blur-xl"
        />
      </div>
    </footer>
  );
};

export default Footer;
