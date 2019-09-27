export interface IPickPeaksReturn {
  peaks: number[];
  pos: number[];
}

export type priceItems = "A" | "B" | "C" | "D" | string;

export interface IPriceSystem {
  [key: string]: IPriceSystemItem;
  A: IPriceSystemItem;
  B: IPriceSystemItem;
  C: IPriceSystemItem;
  D: IPriceSystemItem;
}

export interface IPriceSystemItem {
  price: number;
  total: number;
  offerPrice: number;
  numForOffer: number;
}
