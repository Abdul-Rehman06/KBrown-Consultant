import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Solutions', 
      dropdown: [
        { name: 'Business Funding', path: '/funding' },
        { name: 'Credit Education', path: '/credit-education' },
      ]
    },
    { 
      name: 'Resources', 
      dropdown: [
        { name: 'eBooks', path: '/ebooks' },
        { name: 'Guides', path: '/guides' },
      ]
    },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'py-4 glass-dark' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="z-50 relative flex items-center space-x-3 group">
          <img 
              src="/logo-new.png" 
              alt="KBrown Consultant Group LLC Logo" 
            className="h-20 w-25 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <button className="flex items-center text-sm font-medium text-gray-light hover:text-gold transition-colors py-2">
                  {link.name}
                  <ChevronDown className="ml-1 w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                <Link
                  to={link.path!}
                  className="text-sm font-medium text-gray-light hover:text-gold transition-colors relative py-2 block"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-56 pt-4"
                    >
                      <div className="glass-dark rounded-xl p-2 border border-white/10 shadow-2xl">
                        {link.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className="block px-4 py-2.5 text-sm text-gray-light hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+1234567890" className="text-gray-light hover:text-gold transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <Link to="/book-consultation" className="btn-primary text-sm py-2.5 flex items-center">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 relative text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-dark-500/95 backdrop-blur-3xl flex flex-col pt-24 px-6 z-40 overflow-y-auto pb-12"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <div className="text-sm text-gold uppercase tracking-widest mb-4 font-mono font-medium">
                        {link.name}
                      </div>
                      <div className="flex flex-col space-y-4 pl-4 border-l border-white/10">
                        {link.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className="text-2xl font-heading text-white hover:text-gold transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      className="text-2xl font-heading text-white hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-8 border-t border-white/10 mt-8 flex flex-col space-y-4">
                <a href="tel:+1234567890" className="flex items-center text-white hover:text-gold transition-colors text-lg">
                  <Phone className="w-5 h-5 mr-3" />
                  Call Us
                </a>
                <Link to="/book-consultation" className="btn-primary text-center">
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}