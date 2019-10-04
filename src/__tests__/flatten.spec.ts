import { flatten } from "../katas/flatten";
import { expect } from "chai";

describe("flatten", () => {
  it("Should return an empty array when given an empty array", () => {
    expect(flatten([])).to.eql([]);
  });
  it("Should return the array as is, if no nesting occurs", () => {
    expect(flatten([1, 2, 3])).to.eql([1, 2, 3]);
  });
  it("Should flatten and array if there is nesting 1 deep", () => {
    expect(flatten([1, 2, [3]])).to.eql([1, 2, 3]);
  });
  it("Should handle deeply nested arrays", () => {
    expect(flatten([1, 2, [3, [4]]])).to.eql([1, 2, 3, 4]);
  });
  it("Should handle different types in the array", () => {
    expect(flatten([1, ["2", { val: 3 }]])).to.eql([1, "2", { val: 3 }]);
    expect(flatten([1, ["2", { val: 3 }, [false, [9]]]])).to.eql([
      1,
      "2",
      { val: 3 },
      false,
      9
    ]);
  });
});
