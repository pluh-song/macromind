import { Activity, Footprints, Droplets, Move, Wind, Dumbbell } from 'lucide-react';
import { BENEFITS } from '../content';
import { SectionHeading, ScrollToBuyButton } from './Section';
import { Reveal } from './Reveal';

const ICONS = [Activity, Footprints, Droplets, Move, Wind, Dumbbell];

/** Stack the outcomes — what life looks like with Orteva on. */
export function BenefitsGrid() {
  return (
    <section aria-labelledby="benefits-heading" className="bg-orteva-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="The payoff"
          title={<span id="benefits-heading">What changes when your knees feel supported</span>}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={b.title} delay={i * 50}>
                <article className="flex h-full gap-4 rounded-2xl border border-orteva-line bg-white p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orteva-blue text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-orteva-ink">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-orteva-slate">{b.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <ScrollToBuyButton>Get back to your day</ScrollToBuyButton>
        </div>
      </div>
    </section>
  );
}
