import { Check, ShieldCheck, Truck, RotateCcw, Lock, Loader2 } from 'lucide-react';
import { HERO, BRAND, SCIENCE } from '../content';
import { useOrtevaStore, useSelectedPack, savingsPercent } from '../store';
import { useAddToCart } from '../useAddToCart';
import { Stars } from './Stars';
import { PackSelector } from './PackSelector';
import { SleeveConfigurator } from './SleeveConfigurator';
import { SizeGuide } from './SizeGuide';
import { AccordionItem } from './Accordion';
import { PaymentBadges } from './PaymentBadges';
import { cn } from '@/lib/utils';

interface BuyBoxProps {
  className?: string;
}

/** The single most important component: self-contained, fully interactive buy box. */
export function BuyBox({ className }: BuyBoxProps) {
  const pack = useSelectedPack();
  const sleeves = useOrtevaStore((s) => s.sleeves);
  const { adding, addToCart } = useAddToCart();

  const scrollToReviews = () => {
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cn('rounded-2xl border border-orteva-line bg-white p-5 shadow-card md:p-6', className)}>
      {/* Rating */}
      <button
        type="button"
        onClick={scrollToReviews}
        className="mb-3 flex items-center gap-2 rounded text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue"
      >
        <Stars value={BRAND.rating} />
        <span className="font-semibold text-orteva-ink">{BRAND.rating}</span>
        <span className="text-orteva-slate underline-offset-2 hover:underline">
          {BRAND.reviewCount.toLocaleString()}+ verified reviews
        </span>
      </button>

      {/* Title + subhead */}
      <h2 className="font-display text-2xl font-extrabold leading-tight text-orteva-ink md:text-[1.75rem]">
        Orteva Knee Compression Sleeve
      </h2>
      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-orteva-slate">
        Targeted support from medical-grade graduated compression and an anatomical gel stabilizer ring.
      </p>

      {/* Benefit ticks */}
      <ul className="mt-4 space-y-1.5">
        {HERO.ticks.map((tick) => (
          <li key={tick} className="flex items-start gap-2 text-sm text-orteva-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-orteva-green" aria-hidden="true" />
            {tick}
          </li>
        ))}
      </ul>

      {/* Price row */}
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-display text-3xl font-extrabold text-orteva-ink">${pack.price.toFixed(2)}</span>
        <span className="text-lg text-orteva-slate line-through">${pack.compareAt.toFixed(2)}</span>
        <span className="rounded-full bg-orteva-green-soft px-2.5 py-1 text-xs font-bold text-orteva-green">
          Save {savingsPercent(pack)}%
        </span>
      </div>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-orteva-slate">
        <Truck className="h-4 w-4 text-orteva-blue" aria-hidden="true" /> Free shipping &amp; free returns
      </p>

      {/* Step 1 */}
      <Step n={1} label="Choose your pack" />
      <PackSelector />

      {/* Step 2 */}
      <div className="mt-5 flex items-center justify-between">
        <Step n={2} label="Set up your sleeve(s)" inline />
        <SizeGuide />
      </div>
      <p className="mb-3 text-xs text-orteva-slate">
        Between sizes? Size up for all-day comfort, down for a firmer fit. Exchanges are free.
      </p>
      <div className="space-y-2.5">
        {sleeves.map((_, i) => (
          <SleeveConfigurator key={i} index={i} total={sleeves.length} />
        ))}
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={addToCart}
        disabled={adding}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orteva-blue px-6 py-4 font-display text-base font-bold text-white shadow-lift transition-all hover:bg-orteva-blue-dark active:scale-[0.99] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2"
      >
        {adding ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Adding…
          </>
        ) : (
          <>Add to cart · ${pack.price.toFixed(2)}</>
        )}
      </button>
      <p className="mt-2 text-center text-xs font-medium text-orteva-slate">
        Most popular — selected by most customers
      </p>

      {/* Reassurance */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-orteva-line pt-4 text-center text-[11px] text-orteva-slate">
        <Reassure icon={<Lock className="h-4 w-4" />} label="Secure checkout" />
        <Reassure icon={<RotateCcw className="h-4 w-4" />} label="Free returns" />
        <Reassure icon={<ShieldCheck className="h-4 w-4" />} label="30-day guarantee" />
      </div>
      <PaymentBadges className="mt-3 justify-center" />

      {/* Detail accordions */}
      <div className="mt-5 border-t border-orteva-line">
        <AccordionItem question="Clinical research">
          <p>{SCIENCE.researchSummary}</p>
        </AccordionItem>
        <AccordionItem question="Materials &amp; care">
          <p>
            Nylon/spandex graduated-compression knit with a silicone gel stabilizer ring and dual
            non-slip cuffs. Hand wash cool or gentle machine cycle in a bag; lay flat to dry. No
            tumble dryer or fabric softener.
          </p>
        </AccordionItem>
        <AccordionItem question="Shipping &amp; returns">
          <p>
            Free worldwide shipping, fully tracked, with fast dispatch. Free returns and free
            size/side exchanges within 30 days under our comfort-fit guarantee.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}

function Step({ n, label, inline }: { n: number; label: string; inline?: boolean }) {
  return (
    <p className={cn('flex items-center gap-2 font-display text-sm font-bold text-orteva-ink', inline ? '' : 'mb-3 mt-5')}>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orteva-navy text-[11px] text-white">
        {n}
      </span>
      {label}
    </p>
  );
}

function Reassure({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex flex-col items-center gap-1">
      <span className="text-orteva-blue">{icon}</span>
      {label}
    </span>
  );
}
