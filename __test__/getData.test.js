import { getData } from "../src/client/js/fetchingData";

describe("Testing the fetching function", () => {
  test("Testing the getData() function", async () => {
    const data = await getData("https://swapi.dev/api/people/1/");
    expect(data.name).toBe("Luke Skywalker");
  });
});
