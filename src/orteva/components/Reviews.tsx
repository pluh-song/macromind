import { useRef } from 'react';
import { BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS, BRAND } from '../content';
import { SectionHeading } from './Section';
import { Stars } from './Stars';
import { cn } from '@/lib/utils';

const AVATAR_TONES = ['bg-orteva-blue', 'bg-orteva-navy', 'bg-orteva-green', 'bg-orteva-amber'];

function initials(name: string): string {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
}

/**
 * Social proof carousel. Cards are plain testimonials (no medical claims).
 * NOTE: integration point for a live reviews app (Judge.me / Loox) — replace the
 * REVIEWS map with the app's widget while keeping the aggregate header.
 */
export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Real people, real days"
            title={<span id="reviews-heading">Loved by 30,000+ knees</span>}
          />
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl font-extrabold text-orteva-ink">{BRAND.rating}</span>
                <Stars value={BRAND.rating} size={18} />
              </div>
              <p className="text-sm text-orteva-slate">{BRAND.reviewCount.toLocaleString()}+ verified reviews</p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <CarouselButton dir={-1} onClick={() => scrollBy(-1)} />
              <CarouselButton dir={1} onClick={() => scrollBy(1)} />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              data-review-source="placeholder"
              className="w-[280px] shrink-0 snap-start rounded-2xl border border-orteva-line bg-orteva-mist/50 p-6 shadow-soft md:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <span className={cn('flex h-11 w-11 items-center justify-center rounded-full font-bold text-white', AVATAR_TONES[i % AVATAR_TONES.length])}>
                  {initials(r.name)}
                </span>
                <div>
                  <p className="flex items-center gap-1.5 font-semibold text-orteva-ink">
                    {r.name}
                    <BadgeCheck className="h-4 w-4 text-orteva-blue" aria-label="Verified buyer" />
                  </p>
                  <p className="text-xs text-orteva-slate">
                    {r.age} · {r.context}
                  </p>
                </div>
              </div>
              <Stars value={r.stars} className="mt-3" />
              <p className="mt-3 font-serif text-[1.05rem] italic leading-relaxed text-orteva-ink">“{r.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  const Icon = dir === 1 ? ChevronRight : ChevronLeft;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? 'Next reviews' : 'Previous reviews'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-orteva-line bg-white text-orteva-ink transition-colors hover:border-orteva-blue hover:text-orteva-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
