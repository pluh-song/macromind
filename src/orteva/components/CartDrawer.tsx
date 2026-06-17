import { Check, ShieldCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useOrtevaStore, useSelectedPack } from '../store';

/**
 * Lightweight cart confirmation. Shown when no checkout backend is configured
 * (VITE_CHECKOUT_ENDPOINT unset) so the selected pack + per-sleeve Size/Side
 * captured for checkout is visible end-to-end.
 */
export function CartDrawer() {
  const open = useOrtevaStore((s) => s.cartOpen);
  const closeCart = useOrtevaStore((s) => s.closeCart);
  const sleeves = useOrtevaStore((s) => s.sleeves);
  const pack = useSelectedPack();

  return (
    <Dialog open={open} onOpenChange={(o) => !o && closeCart()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display text-xl text-orteva-ink">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orteva-green-soft">
              <Check className="h-4 w-4 text-orteva-green" aria-hidden="true" />
            </span>
            Added to cart
          </DialogTitle>
          <DialogDescription className="text-orteva-slate">{pack.title} · ${pack.price.toFixed(2)}</DialogDescription>
        </DialogHeader>

        <ul className="space-y-2">
          {sleeves.map((s, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded-xl border border-orteva-line bg-orteva-mist/50 px-4 py-2.5 text-sm"
            >
              <span className="font-semibold text-orteva-ink">Sleeve {i + 1}</span>
              <span className="text-orteva-slate">
                Size {s.size} · <span className="capitalize">{s.side}</span> knee
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={closeCart}
          className="w-full rounded-xl bg-orteva-blue px-6 py-3.5 font-display font-bold text-white transition-colors hover:bg-orteva-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2"
        >
          Proceed to checkout · ${pack.price.toFixed(2)}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-orteva-slate">
          <ShieldCheck className="h-3.5 w-3.5 text-orteva-green" aria-hidden="true" />
          Secure checkout · free shipping · 30-day guarantee
        </p>
      </DialogContent>
    </Dialog>
  );
}
