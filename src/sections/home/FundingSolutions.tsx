import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, LineChart, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FundingSolutions() {
  const bullets = [
    "Business Funding Education",
    "Financial Readiness",
    "Business Planning",
    "Funding Resources",
    "Professional Guidance"
  ];

  return (
    <section className="py-24 relative bg-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Abstract Dashboard Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl glass-dark border border-white/5 p-8 flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-50" />
            
            {/* Mock Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="w-32 h-6 bg-white/5 rounded-md animate-pulse" />
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <PieChart className="w-4 h-4 text-gold/50" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <LineChart className="w-4 h-4 text-gold/50" />
                </div>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="relative flex-grow flex items-end space-x-4 mb-8 z-10">
              {[40, 70, 45, 90, 60, 100, 80].map((height, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="w-full bg-gradient-to-t from-gold/20 to-gold rounded-t-sm relative group-hover:from-gold/40 transition-colors"
                />
              ))}
            </div>

            {/* Mock Cards */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                  <BarChart3 className="w-4 h-4 text-gold" />
                </div>
                <div className="w-20 h-4 bg-white/10 rounded mb-2" />
                <div className="w-12 h-3 bg-white/5 rounded" />
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                  <LineChart className="w-4 h-4 text-gold" />
                </div>
                <div className="w-24 h-4 bg-white/10 rounded mb-2" />
                <div className="w-16 h-3 bg-white/5 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Funding Starts with <br />
              <span className="text-gold italic">Preparation</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-light text-lg mb-8 leading-relaxed"
            >
              Understanding your financial profile is an important part of preparing for funding opportunities. Through educational guidance and strategic consultations, we help you better understand the process and available options.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-center text-gray-light">
                  <CheckCircle2 className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/funding" className="btn-primary inline-flex items-center group">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}