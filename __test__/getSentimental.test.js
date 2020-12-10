import { getSentimental } from "../src/client/js/fetchingData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Data test" }),
  })
);

describe("Testing get Sentimental", () => {
  it("Testing getSentimental() function", async () => {
    const data = await getSentimental(
      "http://localhost:test-data",
      "test-key",
      "test-text"
    );
    expect(data.name).toEqual("Data test");
  });
});
