import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CreditEducation() {
  const stats = [
    { value: '50+', label: 'Educational Resources' },
    { value: '100+', label: 'Consultations' },
    { value: '5★', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Learn How <br />
              <span className="text-gold italic">Credit Works</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-light text-lg mb-10 leading-relaxed"
            >
              Knowledge is one of your greatest financial assets. Explore educational content designed to help you better understand credit fundamentals, financial habits, and long-term financial wellness.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mb-10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/credit-education" className="btn-outline inline-flex items-center group">
                Explore Credit Education
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Animated Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center"
          >
            {/* Abstract rotating rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full border border-white/5 border-t-gold/30 border-b-gold/10"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full border border-white/5 border-l-gold/40 border-r-gold/5"
            />
            
            {/* Center Book/Education icon */}
            <div className="relative z-10 w-32 h-32 rounded-full glass flex items-center justify-center border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <BookOpen className="w-12 h-12 text-gold" />
            </div>

            {/* Floating smaller elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[15%] w-12 h-12 rounded-xl glass-dark border border-white/10 flex items-center justify-center"
            >
              <span className="text-gold font-bold text-xs">FICO</span>
            </motion.div>
            <motion.div 
              animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[25%] right-[10%] w-16 h-12 rounded-xl glass-dark border border-white/10 flex items-center justify-center"
            >
              <span className="text-white text-xs font-mono">850</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}