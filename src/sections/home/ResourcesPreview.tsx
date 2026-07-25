import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useResources } from '../../hooks/useResources';

export default function ResourcesPreview() {
  const ebooks = useResources({ category: 'eBook', limit: 4 });
  const featuredResources = ebooks.items.slice(0, 4);

  return (
    <section className="py-24 relative bg-dark border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Explore Our <span className="text-gold italic">Resource Library</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-light text-lg"
          >
            Access professionally designed educational materials that help you make informed financial decisions.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredResources.map((resource, index) => {
            const Icon = resource.Icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-dark border border-white/5 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-xs text-gold uppercase tracking-wider mb-2 font-mono">
                  {resource.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex-grow">
                  {resource.title}
                </h3>
                <Link 
                  to="/ebooks"
                  className="flex items-center text-sm font-medium text-gray hover:text-gold transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Details
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/resources" className="btn-outline inline-flex items-center group">
            View All Resources
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
