import { PROBLEMS } from '../content';
import { SectionHeading } from './Section';
import { Reveal } from './Reveal';

/** Empathy / agitation: makes the 45+ visitor feel seen before we sell anything. */
export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="bg-orteva-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          eyebrow="Sound familiar?"
          title={<span id="problem-heading">Does knee pain quietly hold you back?</span>}
          subtitle="It rarely announces itself. It just slowly shrinks what your day looks like."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-orteva-line bg-white p-6 shadow-soft transition-shadow hover:shadow-card">
                <h3 className="font-display text-lg font-bold text-orteva-ink">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-orteva-slate">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center font-serif text-xl italic text-orteva-ink md:text-2xl">
          “You shouldn’t have to plan your life around your knees.”
        </p>
      </div>
    </section>
  );
}
