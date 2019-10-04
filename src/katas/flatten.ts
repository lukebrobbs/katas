/**
 *
 * @param arr array to be flattened
 * @description Given a nested array, return a flattened array. Should be able to handle deeply nested items.
 */
export const flatten = (arr: any[]): any[] => {
  return arr.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      prev.push(...flatten(curr));
    } else prev.push(curr);
    return prev;
  }, []);
};
