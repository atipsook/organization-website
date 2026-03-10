import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onLoginClick: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#philosophy' },
  { name: 'Benefits', href: '#privileges' },
  { name: 'Team', href: '#council' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-3">
               <div className="relative w-10 h-10">
      <img 
        src="/LOGO.jpeg" 
        alt="NextGen Finance Club Logo" 
        className="w-full h-full object-contain rounded-1g"
      />
    </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white tracking-wider">NEXTGEN</span>
                <span className="text-[10px] tracking-[0.3em] text-gold/70 -mt-1">FINANCE CLUB</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeLink === link.name
                    ? 'text-gold'
                    : 'text-slate-400 hover:text-gold/80'
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span
                    layoutId="navbar-gold-line"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-gold-light to-gold"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-[1.02]"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-gold hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block px-4 py-3 text-base font-medium tracking-wide rounded-lg transition-colors ${
                    activeLink === link.name
                      ? 'text-gold bg-gold/10'
                      : 'text-slate-400 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian text-base font-semibold rounded-lg text-center"
                >
                  Join Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
