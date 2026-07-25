import { getAdminToken } from './adminAuth';

export type ResourceCategory = 'eBook' | 'Guide';

export interface ApiResourceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image_url: string | null;
  payment_link: string;
  category: ResourceCategory;
  is_featured: boolean;
  featured_order: number | null;
  created_at: string;
  updated_at: string;
}

export interface CreateOrUpdateResourcePayload {
  title: string;
  description: string;
  icon: string;
  image_url?: string | null;
  payment_link: string;
  category: ResourceCategory;
  is_featured?: boolean;
  featured_order?: number | null;
}

async function apiFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchResources(params?: {
  category?: ResourceCategory;
  featured?: boolean;
  limit?: number;
}): Promise<ApiResourceItem[]> {
  const qs = new URLSearchParams();
  if (params?.category) qs.set('category', params.category);
  if (typeof params?.featured === 'boolean') qs.set('featured', String(params.featured));
  if (params?.limit) qs.set('limit', String(params.limit));
  const suffix = qs.toString() ? `?${qs.toString()}` : '';
  return apiFetch<ApiResourceItem[]>(`/api/resources${suffix}`);
}

export async function adminLogin(username: string, password: string): Promise<{ token: string }> {
  return apiFetch<{ token: string }>(`/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
}

export async function adminLogout(): Promise<void> {
  const token = getAdminToken();
  if (!token) return;
  await apiFetch(`/api/auth/logout`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function createResource(payload: CreateOrUpdateResourcePayload): Promise<ApiResourceItem> {
  const token = getAdminToken();
  if (!token) throw new Error('Not authenticated');
  return apiFetch<ApiResourceItem>(`/api/resources`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}

export async function updateResource(
  id: number,
  payload: CreateOrUpdateResourcePayload
): Promise<ApiResourceItem> {
  const token = getAdminToken();
  if (!token) throw new Error('Not authenticated');
  return apiFetch<ApiResourceItem>(`/api/resources/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteResource(id: number): Promise<void> {
  const token = getAdminToken();
  if (!token) throw new Error('Not authenticated');
  await apiFetch(`/api/resources/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function uploadResourceImage(file: File): Promise<{ url: string }> {
  const token = getAdminToken();
  if (!token) throw new Error('Not authenticated');

  const form = new FormData();
  form.append('image', file);

  return apiFetch<{ url: string }>(`/api/uploads/image`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
}

export async function clearAllResources(): Promise<void> {
  const token = getAdminToken();
  if (!token) throw new Error('Not authenticated');
  await apiFetch(`/api/resources`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
}
