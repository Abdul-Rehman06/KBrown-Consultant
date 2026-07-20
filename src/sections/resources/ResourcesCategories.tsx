import { motion } from 'framer-motion';
import { Building2, CreditCard, Target, TrendingUp, Lightbulb, Wrench } from 'lucide-react';

const categories = [
  {
    title: 'Business Funding',
    description: 'Explore educational content related to funding opportunities and financial preparation.',
    icon: <Building2 className="w-8 h-8 text-gold" />
  },
  {
    title: 'Credit Education',
    description: 'Understand key concepts surrounding personal and business credit.',
    icon: <CreditCard className="w-8 h-8 text-gold" />
  },
  {
    title: 'Financial Planning',
    description: 'Practical resources focused on budgeting, organization, and long-term planning.',
    icon: <Target className="w-8 h-8 text-gold" />
  },
  {
    title: 'Business Strategy',
    description: 'Guides designed to help entrepreneurs make informed business decisions.',
    icon: <TrendingUp className="w-8 h-8 text-gold" />
  },
  {
    title: 'Entrepreneurship',
    description: 'Educational content for launching and growing a business.',
    icon: <Lightbulb className="w-8 h-8 text-gold" />
  },
  {
    title: 'Tools & Templates',
    description: 'Download worksheets, checklists, and planning resources.',
    icon: <Wrench className="w-8 h-8 text-gold" />
  }
];

export default function ResourcesCategories() {
  return (
    <section className="py-24 relative bg-dark border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Browse by <span className="text-gold italic">Topic</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-dark-300 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300 border border-white/5 group-hover:border-gold/20">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-light text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}