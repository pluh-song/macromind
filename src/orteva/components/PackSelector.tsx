import { Check } from 'lucide-react';
import { PACKS } from '../content';
import { useOrtevaStore, savingsPercent } from '../store';
import { track } from '../analytics';
import { BorderBeam } from '@/components/ui/border-beam';
import { cn } from '@/lib/utils';

/** Step 1 — radio-style bundle cards. The selected card gets a BorderBeam accent. */
export function PackSelector() {
  const packId = useOrtevaStore((s) => s.packId);
  const setPack = useOrtevaStore((s) => s.setPack);

  return (
    <div role="radiogroup" aria-label="Choose your pack" className="space-y-2.5">
      {PACKS.map((pack) => {
        const selected = pack.id === packId;
        return (
          <button
            key={pack.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => {
              setPack(pack.id);
              track('select_bundle', { packId: pack.id, price: pack.price });
            }}
            className={cn(
              'relative flex w-full items-center gap-3 overflow-hidden rounded-xl border-2 p-3.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2',
              selected
                ? 'border-orteva-blue bg-orteva-blue-soft/60 shadow-soft'
                : 'border-orteva-line bg-white hover:border-orteva-blue/40',
            )}
          >
            {selected && <BorderBeam size={70} duration={6} colorFrom="#1d6fe0" colorTo="#7cb0f3" />}

            {/* radio dot */}
            <span
              className={cn(
                'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                selected ? 'border-orteva-blue bg-orteva-blue text-white' : 'border-orteva-line',
              )}
            >
              {selected && <Check className="h-3 w-3" aria-hidden="true" />}
            </span>

            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-display font-bold text-orteva-ink">{pack.title}</span>
                {pack.tag && (
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                      pack.badge === 'popular'
                        ? 'bg-orteva-blue text-white'
                        : 'bg-orteva-green text-white',
                    )}
                  >
                    {pack.tag}
                  </span>
                )}
              </span>
              <span className="mt-0.5 block text-sm text-orteva-slate">{pack.sub}</span>
              {pack.perUnitNote && (
                <span className="mt-0.5 block text-xs font-medium text-orteva-green">{pack.perUnitNote}</span>
              )}
            </span>

            <span className="shrink-0 text-right">
              <span className="block font-display text-lg font-extrabold text-orteva-ink">
                ${pack.price.toFixed(2)}
              </span>
              <span className="block text-xs text-orteva-slate line-through">
                ${pack.compareAt.toFixed(2)}
              </span>
              <span className="mt-0.5 block text-[11px] font-bold text-orteva-green">
                Save {savingsPercent(pack)}%
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
