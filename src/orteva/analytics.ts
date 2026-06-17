// Analytics event layer. IDs are NOT hardcoded — they are read from Vite env vars
// so Meta Pixel / TikTok Pixel / GA4 can be wired without touching component code.
// With no IDs configured this is a no-op (plus a dev console trace).

type EventName =
  | 'view_content'
  | 'select_bundle'
  | 'select_size'
  | 'select_side'
  | 'add_to_cart'
  | 'begin_checkout';

interface PixelWindow extends Window {
  fbq?: (...args: unknown[]) => void;
  ttq?: { track: (event: string, payload?: Record<string, unknown>) => void };
  dataLayer?: Record<string, unknown>[];
}

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const TIKTOK_PIXEL_ID = import.meta.env.VITE_TIKTOK_PIXEL_ID as string | undefined;
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

const META_EVENT_MAP: Partial<Record<EventName, string>> = {
  view_content: 'ViewContent',
  add_to_cart: 'AddToCart',
  begin_checkout: 'InitiateCheckout',
};

export function track(event: EventName, payload: Record<string, unknown> = {}): void {
  const w = window as PixelWindow;

  if (META_PIXEL_ID && w.fbq) {
    w.fbq('track', META_EVENT_MAP[event] ?? event, payload);
  }
  if (TIKTOK_PIXEL_ID && w.ttq) {
    w.ttq.track(event, payload);
  }
  if (GA4_ID && w.dataLayer) {
    w.dataLayer.push({ event, ...payload });
  }

  if (import.meta.env.DEV) {
    // Visible in dev so the funnel can be verified before pixels are wired.
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event, payload);
  }
}
