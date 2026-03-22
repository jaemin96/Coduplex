import { cn } from '@/lib/utils';
import * as React from 'react';

// H1
export function TypographyH1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn('scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance', className)}>
      {children}
    </h1>
  );
}

// H2
export function TypographyH2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>
      {children}
    </h2>
  );
}

// H3
export function TypographyH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{children}</h3>;
}

// H4
export function TypographyH4({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>{children}</h4>;
}

// P
export function TypographyP({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>;
}

// Blockquote
export function TypographyBlockquote({ children, className }: { children: React.ReactNode; className?: string }) {
  return <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>;
}

// List
interface TypographyListProps {
  items: string[];
  className?: string;
}
export function TypographyList({ items, className }: TypographyListProps) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

// Inline code
export function TypographyInlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code
      className={cn('bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
    >
      {children}
    </code>
  );
}

// Lead
export function TypographyLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-muted-foreground text-xl', className)}>{children}</p>;
}

// Large
export function TypographyLarge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('text-lg font-semibold', className)}>{children}</div>;
}

// Small
export function TypographySmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return <small className={cn('text-sm leading-none font-medium', className)}>{children}</small>;
}

// Mute
export function TypographyMuted({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>;
}
