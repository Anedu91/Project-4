import { getData } from "../src/client/js/fetchingData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Data test" }),
  })
);

it("Testing getData", async () => {
  const data = await getData("http://localhost:test-data");
  expect(data.name).toEqual("Data test");
});
