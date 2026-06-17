import { Check } from 'lucide-react';
import { HERO } from '../content';
import { Gallery } from './Gallery';
import { BuyBox } from './BuyBox';

/** Above-the-fold hero: benefit-led headline + gallery and buy box side by side. */
export function Hero() {
  return (
    <section
      id="buy"
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-orteva-blue-soft/50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 md:pb-16 md:pt-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-orteva-blue shadow-soft">
            {HERO.eyebrow}
          </span>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-orteva-ink md:text-5xl"
          >
            {HERO.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-orteva-slate md:text-lg">
            {HERO.subhead}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Gallery first on mobile so cold traffic sees the product. */}
          <Gallery />
          <BuyBox />
        </div>

        {/* mobile-only benefit ticks under the fold-line for quick scanning */}
        <ul className="mt-8 grid gap-2 sm:grid-cols-3 lg:hidden">
          {HERO.ticks.map((tick) => (
            <li
              key={tick}
              className="flex items-start gap-2 rounded-xl border border-orteva-line bg-white p-3 text-sm text-orteva-ink shadow-soft"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-orteva-green" aria-hidden="true" />
              {tick}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
