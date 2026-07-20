import { motion } from 'framer-motion';
import { BookOpen, UserCheck, TrendingUp } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const beliefs = [
  {
    title: 'Education First',
    description: 'Knowledge creates better financial decisions.',
    icon: <BookOpen className="w-8 h-8 text-gold" />
  },
  {
    title: 'Personalized Guidance',
    description: 'Every client deserves a strategy tailored to their goals.',
    icon: <UserCheck className="w-8 h-8 text-gold" />
  },
  {
    title: 'Long-Term Success',
    description: 'Sustainable growth begins with informed planning.',
    icon: <TrendingUp className="w-8 h-8 text-gold" />
  }
];

export default function AboutPhilosophy() {
  return (
    <section className="py-24 relative bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Our <span className="text-gold italic">Philosophy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => (
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
                <div className="card-premium h-full flex flex-col items-center text-center glass-dark border-white/10 hover:border-gold/30 hover:bg-dark-300/80 group">
                  <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/50 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                      {belief.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    {belief.title}
                  </h3>
                  <p className="text-gray-light leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}