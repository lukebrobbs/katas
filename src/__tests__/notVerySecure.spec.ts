import { notVerySecure } from "../katas/notVerySecure";
import { expect } from "chai";

describe("notVerySecure", () => {
  it("Should return false if given an empty string", () => {
    expect(notVerySecure("")).to.be.false;
  });
  it("Should return true if given a string which contains only numbers or letters and no whitespace or underscore", () => {
    expect(notVerySecure("perfectString")).to.be.true;
  });
  it("Should return false if the string contains whitespace", () => {
    expect(notVerySecure("string with space")).to.be.false;
  });
  it("Should return false if any underscors are in the string", () => {
    expect(notVerySecure("come_string")).to.be.false;
  });
  it("Should only allow uppercase and lowercase letters as well as digits", () => {
    expect(notVerySecure("?few^")).to.be.false;
  });
});
