'use client';

import * as React from 'react';
import { PanelLeft } from 'lucide-react';
import { Button } from '@shared/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from './hooks/use-sidebar';

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn('h-7 w-7', className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);

SidebarTrigger.displayName = 'SidebarTrigger';
