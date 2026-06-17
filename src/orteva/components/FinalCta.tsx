import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { FINAL_CTA } from '../content';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextAnimate } from '@/components/ui/text-animate';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

const PROMISES = [
  { icon: Truck, label: 'Free worldwide shipping' },
  { icon: RotateCcw, label: 'Free returns & exchanges' },
  { icon: ShieldCheck, label: '30-day comfort-fit guarantee' },
];

/** Last emotional push on an aurora backdrop — climax moment, then scroll-to-buy. */
export function FinalCta() {
  const toBuyBox = () => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section aria-label={FINAL_CTA.title}>
      <AuroraBackground
        showRadialGradient
        className="h-auto min-h-[560px] bg-orteva-navy py-20 text-white dark:bg-orteva-navy md:py-28"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <TextAnimate
            as="h2"
            by="word"
            animation="blurInUp"
            once
            className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl"
          >
            {FINAL_CTA.title}
          </TextAnimate>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {FINAL_CTA.body}
          </p>

          <div className="mt-8 flex justify-center">
            <InteractiveHoverButton
              onClick={toBuyBox}
              className="border-white/30 bg-white px-7 py-3.5 font-display text-base text-orteva-navy"
            >
              Get my Orteva
            </InteractiveHoverButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75">
            {PROMISES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-orteva-blue" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </AuroraBackground>
    </section>
  );
}
