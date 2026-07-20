import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Understanding Business Funding',
    summary: 'A beginner-friendly overview of how business funding operates and what to prepare.',
    category: 'Funding'
  },
  {
    title: 'Financial Planning for Entrepreneurs',
    summary: 'Strategic planning tips to help founders align their personal and business finances.',
    category: 'Planning'
  },
  {
    title: 'Building Healthy Financial Habits',
    summary: 'Daily, weekly, and monthly routines that support long-term financial wellness.',
    category: 'Habits'
  },
  {
    title: 'Credit Education Explained',
    summary: 'Breaking down the core components of credit profiles and why they matter.',
    category: 'Credit'
  },
  {
    title: 'Preparing for Business Growth',
    summary: 'How to organize your operations and documents before seeking expansion capital.',
    category: 'Strategy'
  },
  {
    title: 'How Financial Education Supports Long-Term Success',
    summary: 'Why continuous learning is the best investment you can make for your future.',
    category: 'Education'
  }
];

export default function ResourcesArticles() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Latest <span className="text-gold italic">Educational Articles</span>
          </h2>
          <p className="text-gray-light text-lg">Insights and strategies from our consulting team.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group overflow-hidden flex flex-col h-full"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-dark relative overflow-hidden border-b border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent z-0 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-0" />
                <ImageIcon className="w-8 h-8 text-white/10 z-10" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-gold tracking-widest uppercase mb-3">
                  {article.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-light text-sm mb-6 flex-grow">
                  {article.summary}
                </p>
                <Link to="/resources" className="inline-flex items-center space-x-2 text-sm font-semibold text-white group-hover:text-gold transition-colors w-fit">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}