import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, AlertTriangle, Home, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B1523] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

      <SEO 
        title="Payment Successful | KBrown Consultant"
        description="Thank you for your purchase. Your secure download link has been emailed to you."
        noindex={true} // We don't want search engines indexing the success page
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl"
      >
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="KBrown Consultant" className="h-10 md:h-12 mx-auto mb-8 hover:opacity-80 transition-opacity" />
        </Link>

        {/* Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-[#10B981]" />
        </motion.div>

        {/* Headings */}
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-[#10B981] font-medium text-lg mb-8">
          Thank you for your purchase.
        </p>

        {/* Info Box */}
        <div className="bg-[#0B1523]/50 border border-white/5 rounded-2xl p-6 text-left mb-8 shadow-inner">
          <div className="flex items-start gap-4 mb-5">
            <div className="p-2 bg-[#10B981]/10 rounded-lg shrink-0">
              <Mail className="w-6 h-6 text-[#10B981]" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Check Your Inbox</h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                We have just emailed your secure download link and access instructions to the email address you provided during checkout.
              </p>
            </div>
          </div>

          {/* Warning Box */}
          <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-amber-200/80 text-sm">
              <span className="font-semibold text-amber-500">Didn't receive it?</span> It usually arrives within 5 minutes. If you don't see it in your primary inbox, please check your <span className="font-semibold text-white">Spam, Junk, or Promotions</span> folders.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link 
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#B5952F] text-[#0B1523] font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
          >
            <Home className="w-5 h-5" />
            Return to Homepage
          </Link>
          <Link 
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-xl transition-all duration-300"
          >
            <LifeBuoy className="w-5 h-5" />
            Need Support?
          </Link>
        </div>

        {/* Footer Legal */}
        <p className="text-white/40 text-xs leading-relaxed">
          Order ID generated automatically via Stripe. For billing questions, contact <a href="mailto:support@kbrownconsultant.com" className="text-[#D4AF37] hover:text-[#B5952F] hover:underline transition-colors">support@kbrownconsultant.com</a>.
        </p>
      </motion.div>
    </main>
  );
}
