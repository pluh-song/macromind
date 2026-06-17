import { cn } from '@/lib/utils';

const METHODS = ['VISA', 'MC', 'AMEX', 'PayPal', 'Apple Pay', 'Shop Pay'];

/** Lightweight, dependency-free payment badges (swap for real SVGs when available). */
export function PaymentBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)} aria-label="Accepted payment methods">
      {METHODS.map((m) => (
        <span
          key={m}
          className="rounded-md border border-orteva-line bg-white px-2 py-1 text-[10px] font-bold tracking-wide text-orteva-slate"
        >
          {m}
        </span>
      ))}
    </div>
  );
}
