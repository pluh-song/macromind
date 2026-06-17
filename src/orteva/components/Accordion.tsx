import { useId, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

/** Single accessible disclosure: keyboard-operable, animated, reduced-motion safe. */
export function AccordionItem({ question, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-orteva-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-orteva-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orteva-blue focus-visible:ring-offset-2 rounded-md"
        >
          <span className="font-display text-base font-semibold text-orteva-ink md:text-lg">
            {question}
          </span>
          <ChevronDown
            className={cn(
              'h-5 w-5 shrink-0 text-orteva-slate transition-transform duration-300 motion-reduce:transition-none',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
        className="overflow-hidden pb-5 pr-8 text-[0.95rem] leading-relaxed text-orteva-slate"
      >
        {children}
      </div>
    </div>
  );
}
