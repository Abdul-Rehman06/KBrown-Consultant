import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { adminLogin } from '../../lib/resourcesApi';
import { getAdminToken, setAdminToken } from '../../lib/adminAuth';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (getAdminToken()) navigate('/admin', { replace: true });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await adminLogin(username, password);
      setAdminToken(res.token);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B1523] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <SEO title="Admin Login | KBrown Consultant Group LLC" description="Admin login" noindex={true} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,transparent_70%)] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
      >
        <Link to="/" className="flex justify-center mb-8">
          <img src="/logo-new.png" alt="KBrown Consultant Group LLC" className="h-12 object-contain" />
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <Lock className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">Admin Access</span>
        </div>

        <h1 className="text-3xl font-heading text-white mb-2">Login</h1>
        <p className="text-white/60 mb-8">Manage your resources without touching code.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-2">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
              autoComplete="current-password"
            />
          </div>

          {error && <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl p-3">{error}</div>}

          <button
            disabled={submitting}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
          >
            {submitting ? 'Signing in…' : 'Sign In'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </main>
  );
}

