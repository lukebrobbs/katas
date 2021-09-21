import { sumConsecutives } from "./sumConsecutives";

describe("sumConsecutives", () => {
  it("Should return an empty array if given an empty array", () => {
    expect(sumConsecutives([])).toEqual([]);
  });
  it("Should sum the numbers that are consecutive", () => {
    expect(sumConsecutives([2, 2, 2, 2])).toEqual([8]);
  });
  it("Should add the number to the array if it is not consecutive", () => {
    expect(sumConsecutives([1, 2, 2])).toEqual([1, 4]);
  });
  it("Should handle numberous consecutives", () => {
    expect(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])).toEqual([
      1, 12, 0, 4, 6, 1,
    ]);
  });
  it("Should handle negative numbers", () => {
    expect(sumConsecutives([-5, -5, 7, 7, 12, 0])).toEqual([-10, 14, 12, 0]);
  });
});
