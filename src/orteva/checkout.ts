// Checkout adapter. The UI talks to this interface only — the processor is
// swappable (Stripe Checkout is the default quick path). Per-sleeve Size/Side
// metadata flows through as line-item properties so it reaches the order.

import type { CheckoutLineItem } from './types';

export interface CheckoutAdapter {
  /** Begin checkout for the given line items. Resolves to a redirect URL when applicable. */
  checkout(items: CheckoutLineItem[]): Promise<{ url?: string }>;
}

/**
 * Default Stripe-flavored adapter. It POSTs to a backend endpoint that creates a
 * Stripe Checkout Session and returns its URL. The endpoint is read from env
 * (no hardcoded processor keys or URLs in the UI). When unset, it falls back to
 * a no-op so the page is fully demoable without a backend.
 */
export function createStripeCheckoutAdapter(): CheckoutAdapter {
  const endpoint = import.meta.env.VITE_CHECKOUT_ENDPOINT as string | undefined;

  return {
    async checkout(items) {
      if (!endpoint) {
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.debug('[checkout] no VITE_CHECKOUT_ENDPOINT set — payload:', items);
        }
        return {};
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      if (!res.ok) {
        throw new Error(`Checkout failed: ${res.status}`);
      }

      const data = (await res.json()) as { url?: string };
      return { url: data.url };
    },
  };
}

export const checkoutAdapter = createStripeCheckoutAdapter();

/** Build a checkout line item from the current selection. */
export function toLineItem(
  packId: CheckoutLineItem['packId'],
  packTitle: string,
  unitPrice: number,
  sleeves: CheckoutLineItem['sleeves'],
): CheckoutLineItem {
  return { packId, packTitle, unitPrice, quantity: 1, sleeves };
}
