import { ObjectIs } from "./objectIs";

describe("ObjectIs", () => {
  it("Should Return true if both values are equal are exactly the same value (not just `===`)", () => {
    expect(ObjectIs(42, 42)).toBe(true);
  });
  it("Should return true if both values are NaN", () => {
    expect(ObjectIs(NaN, NaN)).toBe(true);
  });
  it("Should handle -0", () => {
    expect(ObjectIs(-0, -0)).toBe(true);
    expect(ObjectIs(-0, 0)).toBe(false);
  });
  it("Should return false if values are not the same", () => {
    expect(ObjectIs("hello", 12)).toBe(false);
  });
});
