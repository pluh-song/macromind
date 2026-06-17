import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { GALLERY } from '../content';
import { savingsPercent } from '../store';
import { useAddToCart } from '../useAddToCart';
import { cn } from '@/lib/utils';

/** Mobile sticky add-to-cart. Mirrors the buy box state via the shared store. */
export function StickyAtcBar() {
  const { adding, addToCart, pack } = useAddToCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const buy = document.getElementById('buy');
      const footer = document.querySelector('footer');
      if (!buy) return;
      const pastBuyBox = buy.getBoundingClientRect().bottom < 0;
      // Hide once the footer is reached to avoid overlapping the disclaimer.
      const atFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(pastBuyBox && !atFooter);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-orteva-line bg-white/95 px-3 py-2.5 shadow-[0_-8px_24px_rgba(12,22,38,0.1)] backdrop-blur transition-transform duration-300 motion-reduce:transition-none lg:hidden',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="flex items-center gap-3">
        <img
          src={GALLERY[0].src}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-lg border border-orteva-line object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-orteva-ink">{pack.title}</p>
          <p className="flex items-center gap-1.5 text-xs">
            <span className="font-extrabold text-orteva-ink">${pack.price.toFixed(2)}</span>
            <span className="text-orteva-slate line-through">${pack.compareAt.toFixed(2)}</span>
            <span className="font-bold text-orteva-green">Save {savingsPercent(pack)}%</span>
          </p>
        </div>
        <button
          type="button"
          onClick={addToCart}
          disabled={adding}
          className="flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-orteva-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orteva-blue-dark disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2"
        >
          {adding ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}
