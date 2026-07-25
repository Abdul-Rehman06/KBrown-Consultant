import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-500 pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img 
                src="/logo-new.png" 
                alt="KBrown Consultant Group LLC Logo" 
                className="h-20 w-22 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray mb-8 text-sm">
              A premium financial consulting brand helping people understand funding opportunities and business growth through compliant educational content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-light hover:bg-gold hover:text-dark transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-light hover:bg-gold hover:text-dark transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-light hover:bg-gold hover:text-dark transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-lg font-heading text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray text-sm hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/success-stories" className="text-gray text-sm hover:text-gold transition-colors">Success Stories</Link></li>
              <li><Link to="/contact" className="text-gray text-sm hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray text-sm hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-lg font-heading text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/funding" className="text-gray text-sm hover:text-gold transition-colors">Funding Guidance</Link></li>
              <li><Link to="/credit-education" className="text-gray text-sm hover:text-gold transition-colors">Credit Education</Link></li>
              <li><Link to="/ebooks" className="text-gray text-sm hover:text-gold transition-colors">eBooks</Link></li>
              <li><Link to="/resources" className="text-gray text-sm hover:text-gold transition-colors">Guides</Link></li>
            </ul>
          </div>
          {/* Column 5: Legal */}
          <div>
            <h4 className="text-lg font-heading text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray text-sm hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray text-sm hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-gray text-sm hover:text-gold transition-colors">Disclaimer</Link></li>
              <li><Link to="/accessibility" className="text-gray text-sm hover:text-gold transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10 text-center">
          <p className="text-gray text-sm mb-6">
            &copy; {new Date().getFullYear()} KBrown Consultant Group LLC. All Rights Reserved.
          </p>
          
          <div className="text-[10px] text-gray/50 max-w-5xl leading-relaxed">
            Disclaimer: The information provided on this website is for educational and informational purposes only and should not be interpreted as legal, financial, lending, or credit repair services. Results vary based on individual circumstances. Any funding opportunities or third-party services are subject to their own eligibility requirements and terms.
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-12 right-6 md:right-12 w-12 h-12 rounded-full bg-dark-300 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300 z-20 group"
      >
        <ArrowUpRight size={20} className="transform -rotate-45 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}