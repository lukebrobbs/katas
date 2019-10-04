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
