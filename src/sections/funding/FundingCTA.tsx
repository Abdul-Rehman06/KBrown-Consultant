import { motion } from 'framer-motion';

export default function FundingCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Luxury Gold Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold-dark" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="absolute inset-0 bg-dark/10" />
        </motion.div>
      </div>
    </section>
  );
}