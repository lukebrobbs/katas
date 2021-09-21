import { reflect } from "./reflect";

describe("reflect", () => {
  it("Should return a success object if the promise resolves", async () => {
    const mockResolvedPromise = () => Promise.resolve("Tague");
    const expected = await reflect<string>(mockResolvedPromise());
    expect(expected).toEqual({
      status: "fulfilled",
      value: "Tague",
    });
  });
  it("Should return a failed object if the prmose rejects", async () => {
    const mockRejectedPromise = () => Promise.reject("Some Error");
    const expected = await reflect<string>(mockRejectedPromise());
    expect(expected).toEqual({
      status: "rejected",
      reason: "Some Error",
    });
  });
});
