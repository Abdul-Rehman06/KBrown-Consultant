import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { step: 'Step 1', title: 'Schedule Consultation' },
  { step: 'Step 2', title: 'Discuss Your Goals' },
  { step: 'Step 3', title: 'Review Educational Information' },
  { step: 'Step 4', title: 'Explore Available Options' },
  { step: 'Step 5', title: 'Continue Through Our Partner Process' },
];

export default function FundingHowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 relative bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            How <span className="text-gold italic">Funding Works</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-light via-gold to-transparent origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark border-4 border-dark-300 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    <div className="w-4 h-4 rounded-full bg-gold" />
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                  >
                    <div className="text-gold font-mono text-lg tracking-widest mb-2 opacity-70">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {item.title}
                    </h3>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}