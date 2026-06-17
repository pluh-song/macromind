import { Activity } from 'lucide-react';
import { BRAND, DISCLAIMER } from '../content';
import { PaymentBadges } from './PaymentBadges';

const LINKS = [
  { heading: 'Shop', items: ['Knee Sleeve', 'Size guide', 'Bundles', 'Track my order'] },
  { heading: 'Support', items: ['Contact us', 'Shipping & returns', 'FAQ', 'Reviews'] },
  { heading: 'Company', items: ['Our story', 'Guarantee', 'Privacy', 'Terms'] },
];

export function OrtevaFooter() {
  return (
    <footer className="bg-orteva-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2 font-display text-xl font-extrabold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orteva-blue">
                <Activity className="h-4 w-4" aria-hidden="true" />
              </span>
              {BRAND.name}
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Knee-specific compression sleeves with a gel stabilizer ring — built for comfort,
              support and getting back to your day.
            </p>
            <PaymentBadges className="mt-5" />
          </div>

          {LINKS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">{col.heading}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#buy" className="text-white/60 transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Medical / compliance disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/40">{DISCLAIMER}</p>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
