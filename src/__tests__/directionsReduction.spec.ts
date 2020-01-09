import { dirReduc } from "../katas/directionsReduction";
import { expect } from "chai";

describe("directionsReduction", () => {
  it("Should return an empty array if only called with NORTH and SOUTH", () => {
    expect(dirReduc(["NORTH", "SOUTH"])).to.eql([]);
  });
  it("Should return an empty array if only called with EAST and WEST", () => {
    expect(dirReduc(["EAST", "WEST"])).to.eql([]);
  });
  it("Should return strings if they are not opposite", () => {
    expect(dirReduc(["NORTH", "EAST"])).to.eql(["NORTH", "EAST"]);
    expect(dirReduc(["SOUTH", "WEST"])).to.eql(["SOUTH", "WEST"]);
  });
  it("Should not remove directions that should not be cancelled out", () => {
    expect(dirReduc(["NORTH", "NORTH", "SOUTH", "WEST"])).to.eql([
      "NORTH",
      "WEST"
    ]);
  });
});
