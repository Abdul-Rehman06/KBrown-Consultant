import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const metrics = [
  { value: 1000, suffix: '+', label: 'Consultations' },
  { value: 500, suffix: '+', label: 'Resources Downloaded' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Business Topics Covered' }
];

export default function Metrics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/5">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-6xl font-heading font-bold text-gold mb-2 font-numbers flex justify-center items-center">
                {inView ? (
                  <CountUp end={metric.value} duration={2.5} separator="," />
                ) : (
                  '0'
                )}
                {metric.suffix}
              </div>
              <p className="text-gray-light text-sm md:text-base font-medium tracking-wide">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}