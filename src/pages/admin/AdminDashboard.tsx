import { useEffect, useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Save, Trash2, LogOut, Pencil, ExternalLink, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import { clearAdminToken, getAdminToken } from '../../lib/adminAuth';
import type { ApiResourceItem, CreateOrUpdateResourcePayload, ResourceCategory } from '../../lib/resourcesApi';
import { createResource, deleteResource, fetchResources, updateResource, adminLogout, uploadResourceImage, clearAllResources } from '../../lib/resourcesApi';
import { resourceIconOptions } from '../../lib/resourceIcons';

const defaultPayload: CreateOrUpdateResourcePayload = {
  title: '',
  description: '',
  icon: 'FileText',
  image_url: '',
  payment_link: '',
  category: 'eBook',
  is_featured: false,
  featured_order: null,
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const token = getAdminToken();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ApiResourceItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [payload, setPayload] = useState<CreateOrUpdateResourcePayload>({ ...defaultPayload });
  const [uploading, setUploading] = useState(false);

  const isEditing = useMemo(() => editingId !== null, [editingId]);

  useEffect(() => {
    if (!token) navigate('/admin/login', { replace: true });
  }, [navigate, token]);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchResources();
      setItems(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load resources');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function startCreate() {
    setEditingId(null);
    setPayload({ ...defaultPayload });
  }

  function startEdit(item: ApiResourceItem) {
    setEditingId(item.id);
    setPayload({
      title: item.title,
      description: item.description,
      icon: item.icon,
      image_url: item.image_url ?? '',
      payment_link: item.payment_link,
      category: item.category,
      is_featured: item.is_featured,
      featured_order: item.featured_order,
    });
  }

  async function onSave() {
    setLoading(true);
    setError(null);
    try {
      const normalized: CreateOrUpdateResourcePayload = {
        ...payload,
        image_url: payload.image_url ? payload.image_url : null,
        featured_order: payload.featured_order === null || payload.featured_order === undefined ? null : Number(payload.featured_order),
      };

      if (editingId === null) {
        await createResource(normalized);
      } else {
        await updateResource(editingId, normalized);
      }

      await load();
      startCreate();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setLoading(false);
    }
  }

  async function onUpload(file: File) {
    setUploading(true);
    setError(null);
    try {
      const res = await uploadResourceImage(file);
      setPayload((p) => ({ ...p, image_url: res.url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  async function onDelete(id: number) {
    if (!confirm('Delete this resource?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteResource(id);
      await load();
      if (editingId === id) startCreate();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setLoading(false);
    }
  }

  async function onLogout() {
    try {
      await adminLogout();
    } catch {
    } finally {
      clearAdminToken();
      navigate('/admin/login', { replace: true });
    }
  }

  async function onClearAll() {
    if (!confirm('Clear ALL resources? This cannot be undone.')) return;
    setLoading(true);
    setError(null);
    try {
      await clearAllResources();
      await load();
      startCreate();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Clear failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B1523] px-4 py-14">
      <SEO title="Admin Dashboard | KBrown Consultant Group LLC" description="Manage resources" noindex={true} />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">Admin Dashboard</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading text-white">Resources Manager</h1>
            <p className="text-white/60 mt-2">Create, edit, and feature items for your eBooks + Guides.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/" className="btn-outline px-4 py-2.5 text-sm">Back to Site</Link>
              <button onClick={onClearAll} className="btn-outline px-4 py-2.5 text-sm">
                Clear All
              </button>
            <button onClick={onLogout} className="btn-primary px-4 py-2.5 text-sm flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {error && <div className="mb-6 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl p-4">{error}</div>}

        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8">
          <section className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-heading text-white">All Resources</h2>
              <button onClick={startCreate} className="btn-outline px-4 py-2 text-sm flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-white/60">
                  <tr className="border-b border-white/10">
                   <th className="py-3 pr-3 font-medium">Image</th>
                    <th className="py-3 pr-3 font-medium">Title</th>
                    <th className="py-3 pr-3 font-medium">Category</th>
                    <th className="py-3 pr-3 font-medium">Featured</th>
                    <th className="py-3 pr-3 font-medium">Link</th>
                    <th className="py-3 pr-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 pr-3">
                        <div className="w-16 h-full rounded-2xl overflow-hidden border border-white/5">
                          <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="py-3 pr-3 text-white font-medium">{item.title}</td>
                      <td className="py-3 pr-3 text-white/70">{item.category}</td>
                      <td className="py-3 pr-3 text-white/70">{item.is_featured ? `Yes (${item.featured_order ?? 0})` : 'No'}</td>
                      <td className="py-3 pr-3">
                        <a
                          href={item.payment_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-[#B5952F]"
                        >
                          Open <ExternalLink className="w-4 h-4" />
                        </a>
                      </td>
                      <td className="py-3 pr-3">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => startEdit(item)}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                            title="Edit"
                            type="button"
                          >
                            <Pencil className="w-4 h-4 text-white/80" />
                          </button>
                          <button
                            onClick={() => onDelete(item.id)}
                            className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20"
                            title="Delete"
                            type="button"
                          >
                            <Trash2 className="w-4 h-4 text-red-300" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {items.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-white/60">
                        {loading ? 'Loading…' : 'No resources yet.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
            <h2 className="text-xl font-heading text-white mb-5">{isEditing ? 'Edit Resource' : 'Create Resource'}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Title</label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                  value={payload.title}
                  onChange={(e) => setPayload((p) => ({ ...p, title: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Description</label>
                <textarea
                  className="w-full min-h-28 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                  value={payload.description}
                  onChange={(e) => setPayload((p) => ({ ...p, description: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Category</label>
                  <select
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                    style={{ colorScheme: 'dark' }}
                    value={payload.category}
                    onChange={(e) => setPayload((p) => ({ ...p, category: e.target.value as ResourceCategory }))}
                  >
                    <option className="bg-[#0B1523] text-white" value="eBook">eBook</option>
                    <option className="bg-[#0B1523] text-white" value="Guide">Guide</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Icon</label>
                  <select
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                    style={{ colorScheme: 'dark' }}
                    value={payload.icon}
                    onChange={(e) => setPayload((p) => ({ ...p, icon: e.target.value }))}
                  >
                    {resourceIconOptions.map((opt) => (
                      <option className="bg-[#0B1523] text-white" key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <label className="block text-sm text-white/70">Cover Image</label>
                  {uploading && <span className="text-xs text-white/50">Uploading…</span>}
                </div>
                <div className="grid gap-4">
                  <input
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                    value={payload.image_url ?? ''}
                    placeholder="Paste image URL (optional)"
                    onChange={(e) => setPayload((p) => ({ ...p, image_url: e.target.value }))}
                  />
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    disabled={uploading || loading}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) onUpload(file);
                    }}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/70 outline-none focus:border-[#D4AF37]/60 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white file:hover:bg-white/15"
                  />
                  {!!payload.image_url && (
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                      <img src={payload.image_url} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Payment / Access Link</label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                  value={payload.payment_link}
                  onChange={(e) => setPayload((p) => ({ ...p, payment_link: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-3 text-white/70 text-sm">
                  <input
                    type="checkbox"
                    checked={!!payload.is_featured}
                    onChange={(e) => setPayload((p) => ({ ...p, is_featured: e.target.checked }))}
                    className="h-5 w-5 rounded border-white/20 bg-white/10 text-[#D4AF37] focus:ring-[#D4AF37]/30"
                  />
                  Feature on homepage
                </label>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Featured Order</label>
                  <input
                    type="number"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[#D4AF37]/60"
                    value={payload.featured_order ?? ''}
                    onChange={(e) =>
                      setPayload((p) => ({ ...p, featured_order: e.target.value === '' ? null : Number(e.target.value) }))
                    }
                  />
                </div>
              </div>

              <button
                disabled={loading}
                onClick={onSave}
                type="button"
                className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Save className="w-5 h-5" />
                {isEditing ? 'Save Changes' : 'Create Resource'}
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
