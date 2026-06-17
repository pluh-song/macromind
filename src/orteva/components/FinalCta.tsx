import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { FINAL_CTA } from '../content';
import { ScrollToBuyButton } from './Section';
import { Reveal } from './Reveal';

const PROMISES = [
  { icon: Truck, label: 'Free worldwide shipping' },
  { icon: RotateCcw, label: 'Free returns & exchanges' },
  { icon: ShieldCheck, label: '30-day comfort-fit guarantee' },
];

/** Last emotional push + scroll-to-buy. */
export function FinalCta() {
  return (
    <section aria-labelledby="final-heading" className="relative overflow-hidden bg-orteva-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[120%] w-1/2 -translate-y-1/2 rounded-full bg-orteva-blue/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
        <Reveal>
          <h2 id="final-heading" className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
            {FINAL_CTA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {FINAL_CTA.body}
          </p>

          <div className="mt-8 flex justify-center">
            <ScrollToBuyButton>Get my Orteva</ScrollToBuyButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {PROMISES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-orteva-blue" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
