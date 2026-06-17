import { useEffect, useState } from 'react';
import { Activity, Star } from 'lucide-react';
import { BRAND } from '../content';
import { cn } from '@/lib/utils';

/** Minimal trust-forward header. Single CTA scrolls to the buy box. */
export function OrtevaHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toBuyBox = () => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors',
        scrolled ? 'border-b border-orteva-line bg-white/90 backdrop-blur' : 'bg-white',
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-orteva-navy">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orteva-blue text-white">
            <Activity className="h-4 w-4" aria-hidden="true" />
          </span>
          {BRAND.name}
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-sm text-orteva-slate sm:flex">
            <Star className="h-4 w-4 fill-orteva-amber text-orteva-amber" aria-hidden="true" />
            <span className="font-semibold text-orteva-ink">{BRAND.rating}</span> · {BRAND.reviewCount.toLocaleString()}+ reviews
          </span>
          <button
            type="button"
            onClick={toBuyBox}
            className="rounded-lg bg-orteva-blue px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orteva-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2"
          >
            Shop now
          </button>
        </div>
      </div>
    </header>
  );
}
