// https://www.codewars.com/kata/55eeddff3f64c954c2000059

/**
 *
 * @description You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
 */
export const sumConsecutives = (s: number[]): number[] =>
  s.reduce((acc: number[], num: number, index: number, arr: number[]) => {
    if (num !== arr[index - 1]) acc.push(num);
    else acc[acc.length - 1] += num;
    return acc;
  }, []);
