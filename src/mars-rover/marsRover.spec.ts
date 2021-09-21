import { Rover } from "./marsRover";

describe("mars-rover", () => {
  describe("Turning", () => {
    test("Initial position", () => {
      const rover = new Rover(1, 1, "N");
      expect(rover.translateCommand("L")).toEqual("1:1:W");
      expect(rover.translateCommand("R")).toEqual("1:1:E");
    });
    test("Should take initial direction into account", () => {
      const rover = new Rover(1, 1, "S");
      expect(rover.translateCommand("L")).toEqual("1:1:E");
      expect(rover.translateCommand("R")).toEqual("1:1:W");
    });
    test("Should handle initial position", () => {
      const rover = new Rover(2, 3, "S");
      expect(rover.translateCommand("L")).toEqual("2:3:E");
      expect(rover.translateCommand("R")).toEqual("2:3:W");
    });
  });
  describe("Movement", () => {
    test("Should move thr rover when facing north", () => {
      const rover = new Rover(1, 1, "N");
      expect(rover.translateCommand("M")).toEqual("2:1:N");
    });
    test("Should move the rover when facing south", () => {
      const rover = new Rover(2, 1, "S");
      expect(rover.translateCommand("M")).toEqual("1:1:S");
    });
    test("Should move the rover when facing east", () => {
      const rover = new Rover(1, 1, "E");
      expect(rover.translateCommand("M")).toEqual("1:2:E");
    });
    test("Should move the rover when facing south", () => {
      const rover = new Rover(1, 2, "W");
      expect(rover.translateCommand("M")).toEqual("1:1:W");
    });
  });
  describe("multiple commands", () => {
    test("Should handle multiple commands", () => {
      const rover = new Rover(1, 1, "N");
      expect(rover.translateCommand("RM")).toEqual("1:2:E");
      expect(rover.translateCommand("RMM")).toEqual("1:3:E");
      expect(rover.translateCommand("MM")).toEqual("3:1:N");
      expect(rover.translateCommand("MRM")).toEqual("2:2:E");
    });
  });
});
