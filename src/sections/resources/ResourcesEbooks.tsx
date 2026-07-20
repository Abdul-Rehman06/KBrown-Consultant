import { motion } from 'framer-motion';
import { Download, Book, FileText, Star } from 'lucide-react';

const ebooks = [
  {
    title: 'Business Funding Essentials',
    description: 'A comprehensive look into preparing your business for funding opportunities.',
    pages: '45 Pages',
    readTime: '45 min read',
    premium: true
  },
  {
    title: 'Credit Fundamentals Explained',
    description: 'Break down complex credit topics into easy-to-understand actionable insights.',
    pages: '32 Pages',
    readTime: '30 min read',
    premium: false
  },
  {
    title: 'Financial Confidence Guide',
    description: 'Strategies for building long-term wealth and sustainable business growth.',
    pages: '50 Pages',
    readTime: '60 min read',
    premium: true
  },
  {
    title: 'The Entrepreneur\'s Planning Workbook',
    description: 'Interactive exercises designed to help you map out your financial trajectory.',
    pages: '28 Pages',
    readTime: 'Interactive',
    premium: false
  },
  {
    title: 'Business Readiness Checklist',
    description: 'Ensure you have all the necessary documentation before exploring funding.',
    pages: '12 Pages',
    readTime: '15 min read',
    premium: false
  },
  {
    title: 'Financial Growth Roadmap',
    description: 'A step-by-step framework for scaling your business operations safely.',
    pages: '38 Pages',
    readTime: '40 min read',
    premium: true
  }
];

export default function ResourcesEbooks() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured <span className="text-gold italic">eBooks</span>
          </h2>
          <p className="text-gray-light text-lg">In-depth guides to build your financial confidence.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group flex flex-col sm:flex-row gap-6"
            >
              {/* Cover */}
              <div className="w-full sm:w-1/3 h-48 sm:h-auto rounded-xl bg-gradient-to-br from-dark-300 to-dark border border-white/5 relative overflow-hidden shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                <Book className="w-12 h-12 text-white/20 group-hover:text-gold/40 transition-colors duration-500 group-hover:scale-110" />
                
                {ebook.premium && (
                  <div className="absolute top-3 right-3 bg-gold text-dark px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-dark" /> Premium
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 justify-center">
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-gold-light transition-colors line-clamp-2">
                  {ebook.title}
                </h3>
                <p className="text-gray-light text-sm mb-4 line-clamp-2">
                  {ebook.description}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-light/80 mb-6">
                  <div className="flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    {ebook.pages}
                  </div>
                  <div className="flex items-center">
                    <span className="w-1 h-1 bg-white/20 rounded-full mr-4" />
                    {ebook.readTime}
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-sm font-semibold text-gold bg-gold/10 hover:bg-gold/20 px-6 py-2.5 rounded-lg transition-colors w-fit">
                  <Download className="w-4 h-4" />
                  <span>Download eBook</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}