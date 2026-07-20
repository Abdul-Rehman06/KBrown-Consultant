import { motion } from 'framer-motion';
import { BookOpen, CreditCard, FileCheck, Target, TrendingUp, FolderOpen } from 'lucide-react';

const options = [
  {
    title: 'Business Funding Education',
    description: 'Learn about common funding products available to businesses and how they may differ.',
    icon: <BookOpen className="w-8 h-8 text-gold" />
  },
  {
    title: 'Business Credit Education',
    description: 'Understand how business credit profiles may influence lending decisions.',
    icon: <CreditCard className="w-8 h-8 text-gold" />
  },
  {
    title: 'Financial Readiness',
    description: 'Explore ways businesses prepare documentation and financial information before pursuing funding opportunities.',
    icon: <FileCheck className="w-8 h-8 text-gold" />
  },
  {
    title: 'Business Planning',
    description: 'Discover how strategic planning can support long-term business growth.',
    icon: <Target className="w-8 h-8 text-gold" />
  },
  {
    title: 'Growth Strategy',
    description: 'Understand how funding may fit into a broader business strategy.',
    icon: <TrendingUp className="w-8 h-8 text-gold" />
  },
  {
    title: 'Educational Resources',
    description: 'Access guides and learning materials covering business funding topics.',
    icon: <FolderOpen className="w-8 h-8 text-gold" />
  }
];

export default function FundingOptions() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Funding Opportunities <span className="text-gold italic">We Discuss</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-xl bg-dark flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 relative z-10">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {option.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4 relative z-10 group-hover:text-gold-light transition-colors">
                {option.title}
              </h3>
              
              <p className="text-gray-light leading-relaxed relative z-10">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}