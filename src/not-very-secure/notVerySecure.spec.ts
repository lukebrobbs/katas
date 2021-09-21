import { notVerySecure } from "./notVerySecure";

describe("notVerySecure", () => {
  it("Should return false if given an empty string", () => {
    expect(notVerySecure("")).toBe(false);
  });
  it("Should return true if given a string which contains only numbers or letters and no whitespace or underscore", () => {
    expect(notVerySecure("perfectString")).toBe(true);
  });
  it("Should return false if the string contains whitespace", () => {
    expect(notVerySecure("string with space")).toBe(false);
  });
  it("Should return false if any underscors are in the string", () => {
    expect(notVerySecure("come_string")).toBe(false);
  });
  it("Should only allow uppercase and lowercase letters as well as digits", () => {
    expect(notVerySecure("?few^")).toBe(false);
  });
});
