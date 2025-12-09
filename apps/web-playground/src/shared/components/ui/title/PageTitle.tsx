'use client';

import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface PageTitleProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const PageTitle = ({ label, icon: Icon, className }: PageTitleProps) => (
  <div
    className={cn(
      'flex items-center justify-center text-center w-full gap-3 text-3xl font-semibold text-gray-900 mb-6 mt-6',
      className
    )}
  >
    {Icon && <Icon className="w-6 h-6 text-gray-700" />}
    <h1>{label}</h1>
  </div>
);
