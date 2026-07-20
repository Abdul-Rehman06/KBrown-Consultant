import { motion } from 'framer-motion';
import { Briefcase, Settings, ArrowUpRight, BarChart, Calculator, Lightbulb } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const overviewItems = [
  {
    title: 'Working Capital',
    icon: <Calculator className="w-8 h-8 text-gold" />
  },
  {
    title: 'Equipment Financing',
    icon: <Settings className="w-8 h-8 text-gold" />
  },
  {
    title: 'Business Expansion',
    icon: <ArrowUpRight className="w-8 h-8 text-gold" />
  },
  {
    title: 'Operational Growth',
    icon: <BarChart className="w-8 h-8 text-gold" />
  },
  {
    title: 'Cash Flow Planning',
    icon: <Briefcase className="w-8 h-8 text-gold" />
  },
  {
    title: 'Strategic Investments',
    icon: <Lightbulb className="w-8 h-8 text-gold" />
  }
];

export default function FundingOverview() {
  return (
    <section className="py-24 relative bg-dark border-t border-white/5 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Understanding <br />
              <span className="text-gold italic">Business Funding</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-light leading-relaxed space-y-6"
          >
            <p>
              Funding can support a variety of business objectives, from expansion and equipment purchases to working capital and operational growth.
            </p>
            <p>
              Every funding opportunity has different eligibility requirements, documentation expectations, and evaluation criteria. Learning how the process works can help you make informed decisions before applying.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {overviewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.05} 
                transitionSpeed={1000}
                className="h-full"
              >
                <div className="h-full glass-dark p-6 rounded-2xl border border-white/10 hover:border-gold/30 flex flex-col items-center justify-center text-center group transition-colors duration-300">
                  <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-medium text-sm md:text-base leading-snug group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}