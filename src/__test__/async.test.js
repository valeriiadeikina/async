import GameSavingLoader from "../GameSavingLoader";

test("test async", async () => {
  expect.assertions(1);
  try {
    const data = await GameSavingLoader.load();
    expect(data).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
    });
  } catch (error) {
    expect(error.message).toEqual("error");
  }
});
