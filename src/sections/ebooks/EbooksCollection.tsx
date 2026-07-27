import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useResources } from '../../hooks/useResources';

export default function EbooksCollection() {
  const { items: ebooks } = useResources({ category: 'eBook' });

  return (
    <section className="py-24 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Featured Collection
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ebooks.map((ebook, index) => {
            const Icon = ebook.Icon;
            return (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 group relative flex flex-col">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-transparent group-hover:from-[#D4AF37]/5 rounded-3xl transition-colors duration-500" />
                    
                    {ebook.image ? (
                      <div className="w-full h-25 rounded-2xl bg-black/40 mb-6 relative z-10 overflow-hidden border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors">
                        <img 
                          src={ebook.image} 
                          alt={ebook.title} 
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                    )}

                    <h3 className="text-2xl font-heading text-white mb-4 relative z-10">
                      {ebook.title}
                    </h3>
                    
                    <p className="text-white/70 mb-8 leading-relaxed relative z-10 flex-grow">
                      {ebook.description}
                    </p>

                    <div className="space-y-3 mb-8 relative z-10 border-t border-white/10 pt-6">
                      <div className="flex justify-between text-sm">
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Format:</span>
                        <span className="text-white">PDF</span>
                      </div>
                    </div>

                    <a 
                      href={ebook.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full relative z-10 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1523] px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Buy Now</span>
                      <Download className="w-4 h-4 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
