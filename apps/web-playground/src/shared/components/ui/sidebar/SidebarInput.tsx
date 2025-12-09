'use client';

import * as React from 'react';
import { Input } from '@shared/components/ui';
import { cn } from '@/lib/utils';

export const SidebarInput = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
          className
        )}
        {...props}
      />
    );
  }
);
SidebarInput.displayName = 'SidebarInput';
