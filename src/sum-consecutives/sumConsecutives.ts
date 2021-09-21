export const sumConsecutives = (s: number[]): number[] =>
  s.reduce((acc: number[], num: number, index: number, arr: number[]) => {
    if (num !== arr[index - 1]) acc.push(num);
    else acc[acc.length - 1] += num;
    return acc;
  }, []);
