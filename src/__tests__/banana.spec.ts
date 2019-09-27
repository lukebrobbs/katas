import { banana } from "../katas/banana";
import { expect } from "chai";

describe("banana", () => {
  it('Should return an empty array if no match to the word "banana" is possible', () => {
    expect(banana("banan")).to.eql([]);
  });
  it('A single possible way to make "banana" should return a single item', () => {
    expect(banana("banana")).to.eql(["banana"]);
  });
});
