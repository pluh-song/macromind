import { ShieldCheck } from 'lucide-react';
import { FAQS, GUARANTEE } from '../content';
import { SectionHeading, ScrollToBuyButton } from './Section';
import { AccordionItem } from './Accordion';

/** Remove the last objections, then a risk-reversal CTA card. */
export function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="Good questions"
          title={<span id="faq-heading">Still deciding? Let’s clear it up</span>}
        />

        <div className="rounded-2xl border border-orteva-line bg-white px-6 shadow-soft">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} question={f.q} defaultOpen={i === 0}>
              <p>{f.a}</p>
            </AccordionItem>
          ))}
        </div>

        {/* Risk-reversal card */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-orteva-blue/20 bg-orteva-blue-soft p-6 text-center sm:flex-row sm:text-left">
          <ShieldCheck className="h-10 w-10 shrink-0 text-orteva-blue" aria-hidden="true" />
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-orteva-ink">{GUARANTEE.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-orteva-slate">{GUARANTEE.body}</p>
          </div>
          <ScrollToBuyButton className="shrink-0">Try Orteva</ScrollToBuyButton>
        </div>
      </div>
    </section>
  );
}
