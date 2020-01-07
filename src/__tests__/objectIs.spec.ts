import { expect } from "chai";
import { ObjectIs } from "../katas/objectIs";

describe("ObjectIs", () => {
  it("Should Return true if both values are equal are exactly the same value (not just `===`)", () => {
    expect(ObjectIs(42, 42)).to.be.true;
  });
  it("Should return true if both values are NaN", () => {
    expect(ObjectIs(NaN, NaN)).to.be.true;
  });
  it("Should handle -0", () => {
    expect(ObjectIs(-0, -0)).to.be.true;
    expect(ObjectIs(-0, 0)).to.be.false;
  });
  it("Should return false if values are not the same", () => {
    expect(ObjectIs("hello", 12)).to.be.false;
  });
});
