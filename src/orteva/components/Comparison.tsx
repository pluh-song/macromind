import { Check, X } from 'lucide-react';
import { COMPARISON } from '../content';
import { SectionHeading, ScrollToBuyButton } from './Section';
import { Reveal } from './Reveal';

/** Kill the "I'll just grab a $10 one on Amazon" objection. Generic, not a real brand. */
export function Comparison() {
  return (
    <section aria-labelledby="compare-heading" className="bg-orteva-mist">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="Why it’s worth it"
          title={<span id="compare-heading">Orteva vs. a generic sleeve</span>}
          subtitle="A few dollars more, and a completely different experience on your knee."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-orteva-line bg-white shadow-card">
            <div className="grid grid-cols-[1fr_auto_auto]">
              {/* header */}
              <div className="bg-white px-5 py-4" />
              <div className="bg-orteva-blue px-5 py-4 text-center font-display text-sm font-bold text-white md:text-base">
                Orteva
              </div>
              <div className="bg-orteva-mist px-5 py-4 text-center font-display text-sm font-semibold text-orteva-slate md:text-base">
                Generic sleeve
              </div>

              {COMPARISON.rows.map((row, i) => (
                <FragmentRow key={row} label={row} even={i % 2 === 0} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <ScrollToBuyButton>Choose Orteva</ScrollToBuyButton>
        </div>
      </div>
    </section>
  );
}

function FragmentRow({ label, even }: { label: string; even: boolean }) {
  const bg = even ? 'bg-white' : 'bg-orteva-mist/40';
  return (
    <>
      <div className={`border-t border-orteva-line px-5 py-3.5 text-sm text-orteva-ink md:text-[0.95rem] ${bg}`}>
        {label}
      </div>
      <div className={`flex items-center justify-center border-t border-orteva-line px-5 py-3.5 ${bg}`}>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orteva-green-soft">
          <Check className="h-4 w-4 text-orteva-green" aria-label="Yes" />
        </span>
      </div>
      <div className={`flex items-center justify-center border-t border-orteva-line px-5 py-3.5 ${bg}`}>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orteva-line/60">
          <X className="h-4 w-4 text-orteva-slate" aria-label="No" />
        </span>
      </div>
    </>
  );
}
