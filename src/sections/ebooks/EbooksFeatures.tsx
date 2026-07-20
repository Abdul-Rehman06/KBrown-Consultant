import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Step-by-step educational guides",
  "Financial planning workbooks",
  "Business growth strategies",
  "Practical checklists",
  "Business funding education",
  "Credit education resources",
  "Goal-setting templates",
  "Business organization guides",
  "Entrepreneur playbooks",
  "Downloadable PDF resources"
];

export default function EbooksFeatures() {
  return (
    <section className="py-24 relative bg-[#0B1523] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                Designed for Continuous Learning
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight">
              What You'll <span className="text-[#D4AF37]">Find</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-8">
              <p>
                Our digital library continues to grow with new educational materials covering a wide range of topics, including business planning, financial literacy, funding education, entrepreneurship, and long-term business growth.
              </p>
              <p>
                We regularly update our collection to ensure our readers have access to relevant, practical, and easy-to-understand information.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <ul className="grid sm:grid-cols-2 gap-6 relative z-10">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
