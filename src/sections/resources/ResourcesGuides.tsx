import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  'Funding Preparation Guide',
  'Business Organization Guide',
  'Understanding Financial Documents',
  'Business Planning Basics',
  'Financial Goal Setting',
  'Educational Roadmap'
];

export default function ResourcesGuides() {
  return (
    <section className="py-24 relative bg-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Practical <span className="text-gold italic">Learning Guides</span>
          </h2>
          <p className="text-gray-light text-lg">Step-by-step documentation for financial clarity.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to="/resources" 
                className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center border border-white/5 group-hover:border-gold/20 transition-colors">
                    <FileText className="w-5 h-5 text-gray-light group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-gold-light transition-colors">
                    {guide}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-light group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}