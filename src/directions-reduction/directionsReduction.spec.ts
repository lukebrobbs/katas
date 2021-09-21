import { dirReduc } from "./directionsReduction";

describe("directionsReduction", () => {
  it("Should return an empty array if only called with NORTH and SOUTH", () => {
    expect(dirReduc(["NORTH", "SOUTH"])).toEqual([]);
  });
  it("Should return an empty array if only called with EAST and WEST", () => {
    expect(dirReduc(["EAST", "WEST"])).toEqual([]);
  });
  it("Should handle mutiple directions that cancel each other out", () => {
    expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST"])).toEqual([]);
  });
  it("Should return strings if they are not opposite", () => {
    expect(dirReduc(["NORTH", "EAST"])).toEqual(["NORTH", "EAST"]);
    expect(dirReduc(["SOUTH", "WEST"])).toEqual(["SOUTH", "WEST"]);
  });
  it("Should not remove directions that should not be cancelled out", () => {
    expect(dirReduc(["NORTH", "NORTH", "SOUTH", "WEST"])).toEqual([
      "NORTH",
      "WEST",
    ]);
  });
  it("Should work with directions that are not intial opposite, but become so after ", () => {
    expect(
      dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"])
    ).toEqual(["WEST", "WEST"]);
  });
});
