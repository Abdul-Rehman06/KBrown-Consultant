import { motion } from 'framer-motion';
import { Download, Clock, FileText } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const featuredResources = [
  {
    title: 'Business Funding Starter Guide',
    description: 'Learn the fundamentals of business funding and explore common preparation strategies.',
    category: 'Guide',
    readTime: '15 min read',
    type: 'PDF'
  },
  {
    title: 'Credit Education Handbook',
    description: 'Understand credit concepts, financial habits, and educational best practices.',
    category: 'Handbook',
    readTime: '20 min read',
    type: 'PDF'
  },
  {
    title: 'Financial Planning Workbook',
    description: 'Organize financial goals with practical worksheets and planning tools.',
    category: 'Workbook',
    readTime: 'Interactive',
    type: 'PDF'
  },
  {
    title: 'Business Growth Blueprint',
    description: 'Educational strategies for entrepreneurs focused on sustainable business development.',
    category: 'Blueprint',
    readTime: '25 min read',
    type: 'PDF'
  }
];

export default function ResourcesFeatured() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Start With Our <span className="text-gold italic">Most Popular</span>
          </h2>
          <p className="text-gray-light text-lg">Curated educational materials to begin your journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={1000}
                className="h-full"
              >
                <div className="h-full glass-dark p-6 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-dark-300/80 group transition-all duration-500 flex flex-col cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Premium Cover Mockup */}
                  <div className="w-full h-48 rounded-xl bg-gradient-to-br from-dark-300 to-dark border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-gold/20 transition-colors">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                    <FileText className="w-12 h-12 text-white/20 group-hover:text-gold/40 transition-colors duration-500" />
                    <div className="absolute top-3 right-3 bg-dark/80 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-gold border border-white/5">
                      {resource.category}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-light transition-colors duration-300 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-light text-sm mb-6 flex-grow line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-light/80 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {resource.readTime}
                    </div>
                    <div className="flex items-center font-mono">
                      {resource.type}
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-gold hover:text-dark text-white font-medium py-3 rounded-xl transition-colors duration-300 border border-white/5 hover:border-gold">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}