import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: 'div' | 'section' | 'li';
}

/**
 * Reveal-on-scroll wrapper. Uses IntersectionObserver (not scroll handlers) for
 * performance, animates compositor-friendly transform/opacity, and fully
 * respects prefers-reduced-motion via the `motion-reduce` variants.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -10% 0px' });
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform',
        'motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
