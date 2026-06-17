import { useState } from 'react';
import { Star } from 'lucide-react';
import { GALLERY, BRAND } from '../content';
import { cn } from '@/lib/utils';

/** Swipeable product gallery with thumbnail dots + rating badge overlay. */
export function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative overflow-hidden rounded-2xl border border-orteva-line bg-orteva-mist shadow-card">
        <img
          src={GALLERY[active].src}
          alt={GALLERY[active].alt}
          width={900}
          height={900}
          // First gallery image is the LCP element — load it eagerly with high priority.
          loading={active === 0 ? 'eager' : 'lazy'}
          // @ts-expect-error fetchpriority is valid HTML, not yet in React's types
          fetchpriority={active === 0 ? 'high' : undefined}
          className="aspect-square w-full object-cover"
        />

        {/* rating badge overlay */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-soft backdrop-blur">
          <Star className="h-4 w-4 fill-orteva-amber text-orteva-amber" aria-hidden="true" />
          <span className="text-sm font-bold text-orteva-ink">{BRAND.rating}</span>
          <span className="text-xs text-orteva-slate">({BRAND.reviewCount.toLocaleString()}+)</span>
        </div>

        <span className="absolute bottom-3 left-3 rounded-full bg-orteva-navy/85 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {GALLERY[active].caption}
        </span>
      </div>

      {/* thumbnails */}
      <div className="mt-3 grid grid-cols-5 gap-2">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${img.caption}`}
            aria-current={active === i}
            className={cn(
              'overflow-hidden rounded-lg border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue',
              active === i ? 'border-orteva-blue' : 'border-transparent opacity-70 hover:opacity-100',
            )}
          >
            <img src={img.src} alt="" width={160} height={160} loading="lazy" className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
