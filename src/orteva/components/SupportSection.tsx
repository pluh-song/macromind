import { MessageCircle, Clock, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from './Section';
import { Reveal } from './Reveal';

const POINTS = [
  { icon: MessageCircle, title: 'Talk to a real person', body: 'No bots, no scripts — a human who knows knees and sizing.' },
  { icon: Clock, title: 'Fast replies', body: 'We answer most messages within one business day.' },
  { icon: Mail, title: 'Sizing help', body: 'Not sure on size or side? Tell us your details and we’ll guide you.' },
];

/** Trust-builder before the footer: a real, reachable company. Reuses ContactForm. */
export function SupportSection() {
  return (
    <section aria-labelledby="support-heading" className="bg-orteva-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="We’re here to help"
            title={<span id="support-heading">Questions before you order?</span>}
            subtitle="Buying for an achy knee shouldn’t feel like a gamble. Ask us anything — sizing, fit, shipping — before you commit."
          />
          <ul className="space-y-4">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orteva-blue shadow-soft">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-orteva-ink">{p.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-orteva-slate">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
