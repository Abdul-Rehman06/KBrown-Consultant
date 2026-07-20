import { motion } from 'framer-motion';
import { Download, FileText, BarChart3, TrendingUp, BookOpen, ShieldCheck } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const ebooks = [
  {
    title: "CLOCKED IN, CASHING OUT",
    description: "The Entrepreneur's Complete Playbook for Building a Business, Growing Your Brand, and Retiring on Your Own Terms. Kevin Brown's personal journey from electrician to 7-business owner fused with the exact social media, marketing, credit, and funding strategies his consulting group uses to turn 9-to-5 workers into business owners.",
    icon: BarChart3,
    image: "https://assets.cdn.filesafe.space/ztsVjHfx1vCkkB9BDqg1/media/6a41ab7b89d9cd8dc21cc383.jpg",
    paymentLink: "https://api.ahriat.com/payment-link/6a41acb1390a6e280643b14b" 
  },
  {
    title: "From 4 A.M. To Freedom",
    description: "The Blueprint for Turning a 9-to-5 Into Business Ownership. The real story behind 28 years of 4 A.M. alarms, 7 businesses built while working full-time, 9 children raised, and one retirement that happened on Kevin Brown's terms not his employer's.",
    icon: ShieldCheck,
    image: "https://assets.cdn.filesafe.space/ztsVjHfx1vCkkB9BDqg1/media/6a41ae21c492ddc24ce27b96.jpg",
    paymentLink: "https://api.ahriat.com/payment-link/6a41af5f9b12592b36824f76"
  },
  {
    title: "Master Funding Strategies Playbook",
    description: "The complete credit-to-funding system for entrepreneurs, consultants, and business owners looking to build business credit, access funding, establish banking relationships, and create long-term wealth. Inside this playbook, Kevin Brown reveals the exact systems, strategies, and insider plays used to help entrepreneurs become permanently fundable.",
    icon: TrendingUp,
    image: "https://assets.cdn.filesafe.space/ztsVjHfx1vCkkB9BDqg1/media/6a41ae5689d9cd8dc21d34e4.png",
    paymentLink: "https://api.ahriat.com/payment-link/6a41af99390a6e280643b14d"
  },
  {
    title: "The LLC Blueprint",
    description: "The complete legal structure, tax strategy, business credit, and wealth-building blueprint every entrepreneur needs to properly build and protect their business. This powerful guide by Kevin Brown walks entrepreneurs step-by-step through forming an LLC, building business credit, accessing funding, understanding tax strategies, and creating generational wealth.",
    icon: FileText,
    image: "https://assets.cdn.filesafe.space/ztsVjHfx1vCkkB9BDqg1/media/6a41ae88c492ddc24ce281ae.png",
    paymentLink: "https://api.ahriat.com/payment-link/6a41b096390a6e280643b150"
  },
  {
    title: "The Approval Code",
    description: "Banks don't approve people. They approve profiles. Learn the hidden system behind credit, funding, and financial power. The Approval Code by Kevin Brown KBCG.",
    icon: BookOpen,
    image: "https://assets.cdn.filesafe.space/ztsVjHfx1vCkkB9BDqg1/media/6a41aed0c492ddc24ce28716.png",
    paymentLink: "https://api.ahriat.com/payment-link/6a41b0b59b12592b36824f79"
  },
];

export default function EbooksCollection() {
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
            const Icon = ebook.icon;
            return (
              <motion.div
                key={index}
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
                      <div className="w-full h-64 rounded-2xl bg-black/40 mb-6 relative z-10 overflow-hidden border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors">
                        <img 
                          src={ebook.image} 
                          alt={ebook.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
