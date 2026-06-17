import { useEffect, useState } from 'react';
import { Truck, ShieldCheck, Heart } from 'lucide-react';
import { BRAND } from '../content';

const MESSAGES = [
  { icon: Truck, text: 'Free worldwide shipping & free returns' },
  { icon: ShieldCheck, text: '30-day comfort-fit guarantee' },
  { icon: Heart, text: `${BRAND.kneesSupported.toLocaleString()}+ knees supported` },
];

const ROTATE_MS = 3500;

/** Rotating trust + offer bar. Pauses rotation under prefers-reduced-motion. */
export function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % MESSAGES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const Active = MESSAGES[i].icon;

  return (
    <div className="bg-orteva-navy text-white">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-4 text-center text-xs font-medium md:text-sm">
        <Active className="h-3.5 w-3.5 text-orteva-blue" aria-hidden="true" />
        <span key={i} className="animate-fade-up motion-reduce:animate-none">
          {MESSAGES[i].text}
        </span>
      </div>
    </div>
  );
}
