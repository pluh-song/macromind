import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarsProps {
  value: number;
  className?: string;
  size?: number;
}

/** Accessible star rating — color is backed by a text label, never color alone. */
export function Stars({ value, className, size = 16 }: StarsProps) {
  const rounded = Math.round(value);
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          aria-hidden="true"
          className={i < rounded ? 'fill-orteva-amber text-orteva-amber' : 'fill-orteva-line text-orteva-line'}
        />
      ))}
    </span>
  );
}
