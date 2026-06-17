import { useState, useCallback } from 'react';
import { useOrtevaStore, useSelectedPack } from './store';
import { checkoutAdapter, toLineItem } from './checkout';
import { track } from './analytics';

/** Shared add-to-cart action used by both the buy box and the sticky bar. */
export function useAddToCart() {
  const pack = useSelectedPack();
  const sleeves = useOrtevaStore((s) => s.sleeves);
  const openCart = useOrtevaStore((s) => s.openCart);
  const [adding, setAdding] = useState(false);

  const addToCart = useCallback(async () => {
    setAdding(true);
    const item = toLineItem(pack.id, pack.title, pack.price, sleeves);
    track('add_to_cart', { packId: pack.id, price: pack.price, sleeves });
    track('begin_checkout', { value: pack.price });
    try {
      const { url } = await checkoutAdapter.checkout([item]);
      if (url) {
        window.location.href = url;
      } else {
        openCart();
      }
    } finally {
      setAdding(false);
    }
  }, [pack, sleeves, openCart]);

  return { adding, addToCart, pack };
}
