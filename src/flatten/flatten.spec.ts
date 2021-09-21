import { flatten } from "./flatten";

describe("flatten", () => {
  it("Should return an empty array when given an empty array", () => {
    expect(flatten([])).toEqual([]);
  });
  it("Should return the array as is, if no nesting occurs", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("Should flatten and array if there is nesting 1 deep", () => {
    expect(flatten([1, 2, [3]])).toEqual([1, 2, 3]);
  });
  it("Should handle deeply nested arrays", () => {
    expect(flatten([1, 2, [3, [4]]])).toEqual([1, 2, 3, 4]);
  });
  it("Should handle different types in the array", () => {
    expect(flatten([1, ["2", { val: 3 }]])).toEqual([1, "2", { val: 3 }]);
    expect(flatten([1, ["2", { val: 3 }, [false, [9]]]])).toEqual([
      1,
      "2",
      { val: 3 },
      false,
      9,
    ]);
  });
});
