import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowUpRight, Briefcase, GraduationCap, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Business Funding Guidance',
    description: 'Learn about funding options, preparation strategies, and factors lenders commonly evaluate.',
    icon: <Briefcase className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />,
    path: '/funding'
  },
  {
    title: 'Credit Education',
    description: 'Understand how personal and business credit work through educational resources and one-on-one guidance.',
    icon: <GraduationCap className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />,
    path: '/credit-education'
  },
  {
    title: 'Financial Strategy',
    description: 'Develop a roadmap designed to strengthen your long-term financial confidence and business growth.',
    icon: <LineChart className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />,
    path: '/book-consultation'
  }
];

export default function Services() {
  return (
    <section className="py-32 relative bg-dark">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Financial Guidance <br />
              <span className="text-gold italic">Designed Around Your Goals</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-light text-lg"
            >
              Every financial journey is different. Our consultation-first approach helps you understand your options while providing educational resources and strategic guidance tailored to your goals.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-0"
          >
            <Link to="/book-consultation" className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-medium group text-lg">
              Book a Strategy Session
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={1000}
                className="h-full"
              >
                <div className="card-premium group h-full flex flex-col glass-dark border-white/10 hover:border-gold/30 hover:bg-dark-300/80">
                  <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center mb-8 border border-white/10 group-hover:border-gold/50 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="relative z-10">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.path} 
                    className="inline-flex items-center text-sm font-medium text-white/70 hover:text-gold transition-colors mt-auto group/link"
                  >
                    Learn more
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform opacity-0 group-hover/link:opacity-100 -translate-x-2 translate-y-2" />
                  </Link>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}