import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AboutEducation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative bg-dark-500 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-dark-500 to-dark-500" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight"
          >
            Financial Knowledge <br />
            <span className="text-gold italic">Creates Better Decisions</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-light leading-relaxed space-y-6 max-w-3xl mx-auto"
          >
            <p>
              Financial success isn't built on shortcuts—it grows through understanding, preparation, and informed decision-making.
            </p>
            <p>
              That's why we invest in educational resources, consultations, and practical guidance designed to help our clients navigate financial topics with greater confidence.
            </p>
          </motion.div>
        </div>

        {/* Animated Statistics */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <div className="text-5xl font-heading font-bold text-gold mb-2">
              {inView ? <CountUp end={100} duration={2.5} /> : '0'}
              <span className="text-gold">+</span>
            </div>
            <p className="text-gray-light font-medium uppercase tracking-wider text-sm">Educational Resources</p>
          </div>

          {/* Stat 2 */}
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <div className="text-5xl font-heading font-bold text-gold mb-2">
              {inView ? <CountUp end={500} duration={2.5} /> : '0'}
              <span className="text-gold">+</span>
            </div>
            <p className="text-gray-light font-medium uppercase tracking-wider text-sm">Consultations</p>
          </div>

          {/* Stat 3 */}
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <div className="text-5xl font-heading font-bold text-gold mb-2">
              {inView ? <CountUp end={98} duration={2.5} /> : '0'}
              <span className="text-gold">%</span>
            </div>
            <p className="text-gray-light font-medium uppercase tracking-wider text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}