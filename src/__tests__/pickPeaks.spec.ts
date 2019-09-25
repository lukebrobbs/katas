import { expect } from "chai";
import { pickPeaks } from "../katas/pickPeaks";

describe("pickPeaks", () => {
  it("Returned object should have the correct keys", () => {
    expect(pickPeaks([1, 1, 1])).to.have.keys(["pos", "peaks"]);
  });
  it("Should return correct peak and pos for a peak", () => {
    expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).to.eql({
      pos: [3, 7],
      peaks: [6, 3]
    });
  });
  it("Should return a peak if there are multiple peak numbers in a row", () => {
    expect(pickPeaks([1, 2, 2, 2, 1])).to.eql({
      pos: [1],
      peaks: [2]
    });
  });
  it("Should return empty arrays if there are no peaks", () => {
    expect(pickPeaks([1, 2, 2, 2, 3])).to.eql({
      pos: [],
      peaks: []
    });
  });
  it("Should handle edge cases", () => {
    expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])).to.eql({
      pos: [2],
      peaks: [3]
    });
    expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])).to.eql({
      pos: [2],
      peaks: [3]
    });
    expect(
      pickPeaks([
        1,
        2,
        5,
        4,
        3,
        2,
        3,
        6,
        4,
        1,
        2,
        3,
        3,
        4,
        5,
        3,
        2,
        1,
        2,
        3,
        5,
        5,
        4,
        3
      ])
    ).to.eql({ pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
    expect(pickPeaks([])).to.eql({ pos: [], peaks: [] });
    expect(pickPeaks([1, 1, 1, 1])).to.eql({ pos: [], peaks: [] });
  });
});
