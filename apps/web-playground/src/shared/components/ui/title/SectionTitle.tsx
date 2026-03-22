import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
  to?: string;
}

export const SectionTitle = ({ label, icon: Icon, className, to }: SectionTitleProps) => {
  const Wrapper = to ? Link : 'h2';

  return (
    <div className={cn('flex items-center gap-3 text-xl font-semibold text-gray-900')}>
      {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      <Wrapper
        to={to as string}
        className={cn(
          'text-2xl font-semibold text-gray-800',
          className,
          to && 'transition-colors duration-200 cursor-pointer'
        )}
      >
        {label}
      </Wrapper>
    </div>
  );
};
