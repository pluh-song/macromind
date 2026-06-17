// Shared buy-box / sticky-bar state. Using zustand (already a dependency) so the
// buy box, sticky add-to-cart bar, and future cart drawer stay perfectly in sync.

import { create } from 'zustand';
import { PACKS } from './content';
import type { Pack, PackId, SleeveConfig, Side, SizeCode } from './types';

const DEFAULT_SIZE: SizeCode = 'M';

/** Build the default sleeve list for a pack: alternating Right/Left, default size M. */
function defaultSleeves(count: number): SleeveConfig[] {
  return Array.from({ length: count }, (_, i) => ({
    size: DEFAULT_SIZE,
    side: (i % 2 === 0 ? 'right' : 'left') as Side,
  }));
}

function packById(id: PackId): Pack {
  return PACKS.find((p) => p.id === id) ?? PACKS[1];
}

interface OrtevaState {
  packId: PackId;
  sleeves: SleeveConfig[];
  cartOpen: boolean;
  setPack: (id: PackId) => void;
  setSleeveSize: (index: number, size: SizeCode) => void;
  setSleeveSide: (index: number, side: Side) => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useOrtevaStore = create<OrtevaState>((set) => ({
  // 2-pack pre-selected per the brief.
  packId: 'double',
  sleeves: defaultSleeves(2),
  cartOpen: false,

  setPack: (id) =>
    set(() => {
      const pack = packById(id);
      return { packId: id, sleeves: defaultSleeves(pack.count) };
    }),

  setSleeveSize: (index, size) =>
    set((state) => ({
      sleeves: state.sleeves.map((s, i) => (i === index ? { ...s, size } : s)),
    })),

  setSleeveSide: (index, side) =>
    set((state) => ({
      sleeves: state.sleeves.map((s, i) => (i === index ? { ...s, side } : s)),
    })),

  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),
}));

/** Derived selectors kept here so price math lives in one place. */
export function useSelectedPack(): Pack {
  return useOrtevaStore((s) => packById(s.packId));
}

export function savingsPercent(pack: Pack): number {
  return Math.round((1 - pack.price / pack.compareAt) * 100);
}
