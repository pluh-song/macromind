import { lazy, Suspense } from 'react';
import { Truck, MapPin, Globe2, RotateCcw } from 'lucide-react';
import { SHIPPING } from '../content';
import { SectionHeading } from './Section';
import { Reveal } from './Reveal';

// Globe pulls in the WebGL `cobe` lib — lazy-load it since it sits well below the fold.
const Globe = lazy(() => import('@/components/ui/globe').then((m) => ({ default: m.Globe })));

const ICONS = [Truck, MapPin, Globe2, RotateCcw];

/**
 * Worldwide-shipping section. The repo had no dedicated shipping graphic, so we
 * reuse the interactive WebGL Globe component as the worldwide visual.
 */
export function ShippingSection() {
  return (
    <section aria-labelledby="shipping-heading" className="overflow-hidden bg-orteva-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Free worldwide shipping"
            title={<span id="shipping-heading">{SHIPPING.title}</span>}
            subtitle={SHIPPING.body}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {SHIPPING.points.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Icon className="h-5 w-5 text-orteva-blue" aria-hidden="true" />
                    <h3 className="mt-2 font-display text-sm font-bold text-white">{p.title}</h3>
                    <p className="mt-0.5 text-sm text-white/70">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Interactive globe — draggable, auto-rotating. */}
        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          <Suspense fallback={<div className="h-full w-full rounded-full bg-white/5" aria-hidden="true" />}>
            <Globe />
          </Suspense>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orteva-navy via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
