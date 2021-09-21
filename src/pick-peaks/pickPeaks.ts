import { IPickPeaksReturn } from "../types";

export const pickPeaks = (arr: number[]): IPickPeaksReturn => {
  let peakIndex = 0;
  return arr.reduce(
    (acc: IPickPeaksReturn, curr: number, index: number) => {
      const prev = arr[index - 1];
      const next = arr[index + 1];
      const isNotStartOrEnd = index !== 0 || index !== arr.length - 1;
      const isPeak = isNotStartOrEnd && curr > prev;

      if (isPeak) {
        peakIndex = index;
      }

      if (peakIndex && next < curr) {
        acc.pos.push(peakIndex);
        acc.peaks.push(curr);
        peakIndex = 0;
      }

      return acc;
    },
    { pos: [], peaks: [] }
  );
};
