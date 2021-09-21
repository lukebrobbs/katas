export const flatten = (arr: any[]): any[] => {
  return arr.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      prev.push(...flatten(curr));
    } else prev.push(curr);
    return prev;
  }, []);
};
