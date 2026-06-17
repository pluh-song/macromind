import { useState } from 'react';
import { Ruler } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { SIZES } from '../content';

/** Size guide modal: weight→size table + how-to-measure note. Reuses shadcn Dialog. */
export function SizeGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-orteva-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue rounded"
      >
        <Ruler className="h-4 w-4" aria-hidden="true" /> Size guide
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-orteva-ink">Find your size</DialogTitle>
          <DialogDescription className="text-orteva-slate">
            Orteva is sized by body weight for a genuine fit — no guesswork.
          </DialogDescription>
        </DialogHeader>

        <table className="w-full overflow-hidden rounded-xl border border-orteva-line text-sm">
          <thead>
            <tr className="bg-orteva-mist text-left text-orteva-ink">
              <th className="px-4 py-2.5 font-semibold">Size</th>
              <th className="px-4 py-2.5 font-semibold">Body weight</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((s, i) => (
              <tr key={s.code} className={i % 2 ? 'bg-white' : 'bg-orteva-mist/40'}>
                <td className="px-4 py-2.5 font-semibold text-orteva-ink">
                  {s.code} <span className="font-normal text-orteva-slate">· {s.label}</span>
                </td>
                <td className="px-4 py-2.5 text-orteva-slate">{s.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="rounded-xl bg-orteva-blue-soft px-4 py-3 text-sm text-orteva-ink">
          <p className="font-semibold">How to measure</p>
          <p className="mt-1 text-orteva-slate">
            If you’re between sizes, weight is the best guide. To double-check, measure around your
            leg about 4 in (10 cm) above the center of your kneecap. Between sizes? Size up for
            all-day comfort, down for a firmer fit — exchanges are always free.
          </p>
        </div>
      </DialogContent>
      </Dialog>
    </>
  );
}
