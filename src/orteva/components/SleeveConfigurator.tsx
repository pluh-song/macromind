import { useOrtevaStore } from '../store';
import { SIZES } from '../content';
import { track } from '../analytics';
import { cn } from '@/lib/utils';
import type { Side, SizeCode } from '../types';

interface SleeveConfiguratorProps {
  index: number;
  total: number;
}

/** One configurator per sleeve in the chosen pack: size-by-weight + L/R side. */
export function SleeveConfigurator({ index, total }: SleeveConfiguratorProps) {
  const sleeve = useOrtevaStore((s) => s.sleeves[index]);
  const setSleeveSize = useOrtevaStore((s) => s.setSleeveSize);
  const setSleeveSide = useOrtevaStore((s) => s.setSleeveSide);

  if (!sleeve) return null;

  const onSize = (size: SizeCode) => {
    setSleeveSize(index, size);
    track('select_size', { index, size });
  };
  const onSide = (side: Side) => {
    setSleeveSide(index, side);
    track('select_side', { index, side });
  };

  return (
    <div className="rounded-xl border border-orteva-line bg-white p-4">
      {total > 1 && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-orteva-slate">
          Knee sleeve {index + 1} of {total}
        </p>
      )}

      {/* Size — by body weight */}
      <p className="mb-2 text-sm font-semibold text-orteva-ink">Size (by body weight)</p>
      <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label={`Size for sleeve ${index + 1}`}>
        {SIZES.map((s) => {
          const selected = sleeve.size === s.code;
          return (
            <button
              key={s.code}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSize(s.code)}
              className={cn(
                'flex flex-col items-center rounded-lg border px-1 py-2 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue',
                selected
                  ? 'border-orteva-blue bg-orteva-blue-soft text-orteva-blue'
                  : 'border-orteva-line bg-white text-orteva-ink hover:border-orteva-blue/40',
              )}
            >
              <span className="text-sm font-bold">{s.code}</span>
              <span className="mt-0.5 text-[10px] leading-tight text-orteva-slate">{s.weight}</span>
            </button>
          );
        })}
      </div>

      {/* Side — Left / Right segmented control */}
      <p className="mb-2 mt-4 text-sm font-semibold text-orteva-ink">Side</p>
      <div
        className="grid grid-cols-2 gap-1 rounded-lg bg-orteva-mist p-1"
        role="radiogroup"
        aria-label={`Side for sleeve ${index + 1}`}
      >
        {(['left', 'right'] as Side[]).map((side) => {
          const selected = sleeve.side === side;
          return (
            <button
              key={side}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSide(side)}
              className={cn(
                'rounded-md py-2 text-sm font-semibold capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue',
                selected ? 'bg-white text-orteva-blue shadow-sm' : 'text-orteva-slate hover:text-orteva-ink',
              )}
            >
              {side}
            </button>
          );
        })}
      </div>
    </div>
  );
}
