import { STEPS, GALLERY } from '../content';
import { SectionHeading } from './Section';
import { Reveal } from './Reveal';

/** Three steps — make it feel effortless and de-risk daily use. */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title={<span id="how-heading">On in seconds. Working all day.</span>}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-orteva-line bg-orteva-mist shadow-soft">
                <img
                  src={GALLERY[i + 2 < GALLERY.length ? i + 2 : i].src}
                  alt=""
                  width={600}
                  height={400}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orteva-navy font-display text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-orteva-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-orteva-slate">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
