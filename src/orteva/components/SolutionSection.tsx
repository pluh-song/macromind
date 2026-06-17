import { Check } from 'lucide-react';
import { FEATURES, GALLERY } from '../content';
import { SectionHeading, ScrollToBuyButton } from './Section';
import { Reveal } from './Reveal';

/** Introduce Orteva as the answer to the pains above: feature → benefit pairs. */
export function SolutionSection() {
  return (
    <section id="solution" aria-labelledby="solution-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="Meet Orteva"
          title={<span id="solution-heading">A knee sleeve that actually fits the knee</span>}
          subtitle="Not a generic tube of fabric — a knee-specific design built around how the joint really moves."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-orteva-line shadow-card">
              <img
                src={GALLERY[1].src}
                alt={GALLERY[1].alt}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:order-2">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orteva-blue-soft text-orteva-blue">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-orteva-ink">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-orteva-slate">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <ScrollToBuyButton>Support my knees</ScrollToBuyButton>
        </div>
      </div>
    </section>
  );
}
