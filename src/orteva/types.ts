// Shared domain types for the Orteva PDP.

export type PackId = 'single' | 'double' | 'quad';
export type Side = 'left' | 'right';
export type SizeCode = 'S' | 'M' | 'L' | 'XL';

export interface SleeveConfig {
  size: SizeCode;
  side: Side;
}

export interface SizeOption {
  code: SizeCode;
  weight: string;
  label: string;
}

export interface Pack {
  id: PackId;
  count: number;
  title: string;
  sub: string;
  price: number;
  compareAt: number;
  tag?: string;
  badge?: 'popular' | 'value';
  perUnitNote?: string;
}

/** A single line item handed to the checkout adapter. */
export interface CheckoutLineItem {
  packId: PackId;
  packTitle: string;
  unitPrice: number;
  quantity: number;
  sleeves: SleeveConfig[];
}
