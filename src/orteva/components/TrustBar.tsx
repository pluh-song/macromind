import { Truck, Star, RotateCcw, Lock } from 'lucide-react';
import { NumberTicker } from '@/components/ui/number-ticker';

const ITEMS = [
  { icon: Truck, value: 30000, suffix: '+', label: 'Sleeves shipped' },
  { icon: Star, value: 4.8, decimals: 1, suffix: '★', label: 'From 3,000+ reviews' },
  { icon: RotateCcw, value: null, label: 'Free returns & exchanges' },
  { icon: Lock, value: null, label: 'Secure encrypted checkout' },
];

/** Trust bar just under the hero. Animated counters draw the eye to the proof. */
export function TrustBar() {
  return (
    <section aria-label="Why customers trust Orteva" className="border-y border-orteva-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-7 md:grid-cols-4">
        {ITEMS.map(({ icon: Icon, value, suffix, decimals, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 text-center">
            <Icon className="h-5 w-5 text-orteva-blue" aria-hidden="true" />
            {value !== null ? (
              <span className="font-display text-xl font-extrabold text-orteva-ink md:text-2xl">
                <NumberTicker value={value} decimalPlaces={decimals ?? 0} className="text-orteva-ink dark:text-orteva-ink" />
                {suffix}
              </span>
            ) : null}
            <span className="text-xs font-medium text-orteva-slate md:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
