import { useEffect, useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { resourcesData } from '../data/resources';
import { resolveResourceIcon } from '../lib/resourceIcons';
import type { ApiResourceItem, ResourceCategory } from '../lib/resourcesApi';
import { fetchResources } from '../lib/resourcesApi';

export interface UiResourceItem {
  id: string | number;
  title: string;
  description: string;
  Icon: LucideIcon;
  image?: string;
  paymentLink: string;
  category: ResourceCategory;
  isFeatured?: boolean;
  featuredOrder?: number | null;
}

function mapApiToUi(item: ApiResourceItem): UiResourceItem {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    Icon: resolveResourceIcon(item.icon),
    image: item.image_url ?? undefined,
    paymentLink: item.payment_link,
    category: item.category,
    isFeatured: item.is_featured,
    featuredOrder: item.featured_order,
  };
}

function fallbackUi(): UiResourceItem[] {
  return resourcesData.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    Icon: item.icon,
    image: item.image || undefined,
    paymentLink: item.paymentLink,
    category: item.category as ResourceCategory,
  }));
}

export function useResources(params?: { category?: ResourceCategory; featured?: boolean; limit?: number }) {
  const [items, setItems] = useState<UiResourceItem[]>(() => {
    const base = fallbackUi();
    if (params?.category) return base.filter((x) => x.category === params.category);
    return base;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const key = useMemo(() => JSON.stringify(params ?? {}), [params]);

  useEffect(() => {
    let mounted = true;
    const base = fallbackUi();
    const filteredBase = params?.category ? base.filter((x) => x.category === params.category) : base;
    setItems(filteredBase);
    setLoading(true);
    setError(null);

    fetchResources(params)
      .then((data) => {
        if (!mounted) return;
        setItems(data.map(mapApiToUi));
      })
      .catch((e: unknown) => {
        if (!mounted) return;
        setItems(filteredBase);
        setError(e instanceof Error ? e.message : 'Failed to load resources');
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [key]);

  return { items, loading, error };
}
