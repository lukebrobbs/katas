import { checkout } from "../katas/checkout";
import { expect } from "chai";

describe("checkout", () => {
  it("Should return the price of a single item if only a single item is placed in the checkout", () => {
    expect(checkout(["A"])).to.equal("£5.00");
  });
  it("Should total up items not on specal offer", () => {
    expect(checkout(["A", "B", "C", "D"])).to.equal("£11.50");
  });
  it("Should add totals and incorporate special offers", () => {
    expect(checkout(["A", "A", "A"])).to.equal("£13.00");
  });
  it("Should be able to handle multiple offers", () => {
    expect(
      checkout([
        "A",
        "A",
        "A",
        "A",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D"
      ])
    ).to.equal("£44.00");
  });
});
