import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', tone = 'light' }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-bold uppercase tracking-[0.14em]',
            tone === 'dark' ? 'text-orteva-blue' : 'text-orteva-blue',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-2 font-display text-2xl font-extrabold leading-tight tracking-tight md:text-4xl',
          tone === 'dark' ? 'text-white' : 'text-orteva-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-3 text-base leading-relaxed md:text-lg', tone === 'dark' ? 'text-white/70' : 'text-orteva-slate')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Inline CTA that smooth-scrolls to the buy box. */
export function ScrollToBuyButton({ children = 'Get my Orteva', className }: { children?: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
      className={cn(
        'group inline-flex items-center gap-2 rounded-xl bg-orteva-blue px-6 py-3.5 font-display text-base font-bold text-white shadow-lift transition-all hover:bg-orteva-blue-dark active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2',
        className,
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </button>
  );
}
