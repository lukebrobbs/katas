import { snailSort } from "../katas/snailSort";
import { expect } from "chai";

describe("snailSort", () => {
  it("Should return an empty array if given an empty array", () => {
    expect(snailSort([[]])).to.eql([]);
  });
  it("Returned array should always start with the items in the first array arg", () => {
    const array = [[1, 2, 3]];
    expect(snailSort(array)).to.eql([1, 2, 3]);
  });
  it("Should correctly return an arranged array", () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(snailSort(array)).to.eql([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it("Should handle different arrays", () => {
    const array = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
    expect(snailSort(array)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("Should handle longer arrays", () => {
    const array = [[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];
    expect(snailSort(array)).to.eql([
      1,
      2,
      3,
      1,
      4,
      7,
      7,
      9,
      8,
      7,
      7,
      4,
      5,
      6,
      9,
      8
    ]);
  });
});
