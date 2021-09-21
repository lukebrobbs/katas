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
  dividedBy,
} from "./calculateWithFunctions";

describe("Calculate With Functions", () => {
  let shouldBeNum: CallableFunction;
  beforeAll(() => {
    shouldBeNum = (x: number) => {
      return (y: number) => {
        expect(y).toEqual(x);
      };
    };
  });
  describe("zero()", () => {
    it("Should call given callBack function with 0 if passed", () => {
      zero(shouldBeNum(0));
    });
    it("Should return zero", () => {
      expect(zero()).toBe(0);
    });
  });
  describe("one()", () => {
    it("Should call given callBack function with 0 if passed", () => {
      one(shouldBeNum(1));
    });
    it("Should return one", () => {
      expect(one()).toBe(1);
    });
  });
  describe("two()", () => {
    it("Should return two", () => {
      expect(two()).toBe(2);
    });
  });
  describe("three()", () => {
    it("Should return three", () => {
      expect(three()).toBe(3);
    });
  });
  describe("four()", () => {
    it("Should return four", () => {
      expect(four()).toBe(4);
    });
  });
  describe("five()", () => {
    it("Should return five", () => {
      expect(five()).toBe(5);
    });
  });
  describe("six()", () => {
    it("Should return six", () => {
      expect(six()).toBe(6);
    });
  });
  describe("seven()", () => {
    it("Should return seven", () => {
      expect(seven()).toBe(7);
    });
  });
  describe("eight()", () => {
    it("Should return eight", () => {
      expect(eight()).toBe(8);
    });
  });
  describe("nine()", () => {
    it("Should return nine", () => {
      expect(nine()).toBe(9);
    });
  });
  describe("plus()", () => {
    it("Should return the number passed in plus the number called with", () => {
      expect(two(plus(nine()))).toBe(11);
      expect(four(plus(four()))).toBe(8);
    });
  });
  describe("minus()", () => {
    it("Should return the number passed in minus the number called with", () => {
      expect(two(minus(nine()))).toBe(-7);
      expect(four(minus(four()))).toBe(0);
    });
  });
  describe("times()", () => {
    it("Should return the number passed in times the number called with", () => {
      expect(two(times(nine()))).toBe(18);
      expect(four(times(four()))).toBe(16);
    });
  });
  describe("dividedBy()", () => {
    it("Should return the number passed in dividedBy the number called with", () => {
      expect(four(dividedBy(two()))).toBe(2);
      expect(four(dividedBy(four()))).toBe(1);
    });
  });
});
