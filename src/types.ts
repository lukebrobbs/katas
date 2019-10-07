export interface IPickPeaksReturn {
  peaks: number[];
  pos: number[];
}

interface IReflectResolvedReturn<T> {
  status: "fulfilled";
  value: T;
}
interface IReflectRejectedReturn {
  status: "rejected";
  reason: any;
}

export type IReflectReturnVals<T> =
  | IReflectResolvedReturn<T>
  | IReflectRejectedReturn;
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
