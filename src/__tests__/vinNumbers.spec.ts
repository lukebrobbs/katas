import { expect } from "chai";
import { vinNumbers } from "../katas/vinNumbers";

describe("vinNumbers", () => {
  it("Should return true if the vin is 10 digits long", () => {
    const vin = "047195869-2";
    expect(vinNumbers(vin)).to.be.true;
  });
  it("Should return false if the vin is not 10 digits long", () => {
    const vin = "0471958692-3";
    expect(vinNumbers(vin)).to.be.false;
  });
  it("Should return false if the check digit is not correct", () => {
    const vin = "047195869-5";
    expect(vinNumbers(vin)).to.be.false;
  });
  it("Should return false if the check digit is not correct", () => {
    const vin = "047195869-2";
    expect(vinNumbers(vin)).to.be.true;
  });
  it("Vin should contain hyphen before check digit", () => {
    const vin = "047195869-2";
    expect(vinNumbers(vin)).to.be.true;
  });
});
