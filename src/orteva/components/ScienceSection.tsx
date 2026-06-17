import { Activity, Droplets, ShieldCheck, Compass } from 'lucide-react';
import { SCIENCE, DISCLAIMER } from '../content';
import { SectionHeading } from './Section';
import { AccordionItem } from './Accordion';
import { Reveal } from './Reveal';
import { NumberTicker } from '@/components/ui/number-ticker';

const ICONS = [Activity, Droplets, ShieldCheck, Compass];

/** Authority section (navy). Justifies belief with mechanism, claim-safe. */
export function ScienceSection() {
  return (
    <section aria-labelledby="science-heading" className="bg-orteva-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          tone="dark"
          eyebrow="The science of compression"
          title={<span id="science-heading">Why compression can help — in plain language</span>}
          subtitle="No hype. Just the simple, well-understood reasons compression and support are so widely used."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SCIENCE.points.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-orteva-navy-light p-5">
                  <Icon className="h-6 w-6 text-orteva-blue" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stat tiles */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {SCIENCE.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                <NumberTicker value={s.value} className="text-white dark:text-white" />
                {s.suffix}
              </p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Research expandable + footnote */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6">
          <div className="[&_*]:!text-white/80 [&_button]:!text-white [&_svg]:!text-white/60 [&>div]:border-white/10">
            <AccordionItem question={<span className="text-white">Clinical research summary</span>}>
              <p className="text-white/75">{SCIENCE.researchSummary}</p>
            </AccordionItem>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-white/50">
          {SCIENCE.statFootnote}
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-white/40">{DISCLAIMER}</p>
      </div>
    </section>
  );
}
