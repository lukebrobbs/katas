
export const snailSort = (array: number[][]): number[] => {
  var vector: number[] = [];
  while (array.length) {
    //@ts-ignore
    vector.push(...array.shift());
    //@ts-ignore
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
};
