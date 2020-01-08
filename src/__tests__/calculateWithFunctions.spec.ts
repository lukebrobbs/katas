import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
} from "../katas/calculateWithFunctions";
import { expect } from "chai";

describe("Calculate With Functions", () => {
  let shouldBeNum: CallableFunction;
  before(() => {
    shouldBeNum = (x: number) => {
      return (y: number) => {
        expect(y).to.eql(x);
      };
    };
  });
  describe("zero()", () => {
    it("Should call given callBack function with 0 if passed", () => {
      zero(shouldBeNum(0));
    });
    it("Should return zero", () => {
      expect(zero()).to.equal(0);
    });
  });
  describe("one()", () => {
    it("Should call given callBack function with 0 if passed", () => {
      one(shouldBeNum(1));
    });
    it("Should return one", () => {
      expect(one()).to.equal(1);
    });
  });
  describe("two()", () => {
    it("Should return two", () => {
      expect(two()).to.equal(2);
    });
  });
  describe("three()", () => {
    it("Should return three", () => {
      expect(three()).to.equal(3);
    });
  });
  describe("four()", () => {
    it("Should return four", () => {
      expect(four()).to.equal(4);
    });
  });
  describe("five()", () => {
    it("Should return five", () => {
      expect(five()).to.equal(5);
    });
  });
  describe("six()", () => {
    it("Should return six", () => {
      expect(six()).to.equal(6);
    });
  });
  describe("seven()", () => {
    it("Should return seven", () => {
      expect(seven()).to.equal(7);
    });
  });
  describe("eight()", () => {
    it("Should return eight", () => {
      expect(eight()).to.equal(8);
    });
  });
  describe("nine()", () => {
    it("Should return nine", () => {
      expect(nine()).to.equal(9);
    });
  });
  describe("plus()", () => {
    it("Should return the number passed in plus the number called with", () => {
      expect(two(plus(nine()))).to.equal(11);
      expect(four(plus(four()))).to.equal(8);
    });
  });
  describe("minus()", () => {
    it("Should return the number passed in minus the number called with", () => {
      expect(two(minus(nine()))).to.equal(-7);
      expect(four(minus(four()))).to.equal(0);
    });
  });
  describe("times()", () => {
    it("Should return the number passed in times the number called with", () => {
      expect(two(times(nine()))).to.equal(18);
      expect(four(times(four()))).to.equal(16);
    });
  });
  describe("dividedBy()", () => {
    it("Should return the number passed in dividedBy the number called with", () => {
      expect(four(dividedBy(two()))).to.equal(2);
      expect(four(dividedBy(four()))).to.equal(1);
    });
  });
});
