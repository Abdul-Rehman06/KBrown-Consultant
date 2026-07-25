import type { LucideIcon } from 'lucide-react';
import { BarChart3, ShieldCheck, TrendingUp, FileText, BookOpen } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  ShieldCheck,
  TrendingUp,
  FileText,
  BookOpen,
};

export function resolveResourceIcon(icon: string): LucideIcon {
  return iconMap[icon] ?? FileText;
}

export const resourceIconOptions = Object.keys(iconMap);

