import { motion } from 'framer-motion';
import { Download, CheckSquare } from 'lucide-react';

const checklists = [
  'Business Funding Checklist',
  'Financial Planning Checklist',
  'Monthly Business Review',
  'Goal Setting Worksheet',
  'Document Preparation Guide',
  'Business Readiness Checklist'
];

export default function ResourcesChecklists() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-y border-white/5">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Ready-to-Use <span className="text-gold italic">Resources</span>
          </h2>
          <p className="text-gray-light text-lg">Actionable checklists and templates to keep you organized.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {checklists.map((checklist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center shrink-0 border border-white/5 group-hover:border-gold/30 transition-colors">
                  <CheckSquare className="w-4 h-4 text-gold" />
                </div>
                <h3 className="text-white font-medium group-hover:text-gold-light transition-colors truncate">
                  {checklist}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 ml-4">
                <Download className="w-4 h-4 text-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}