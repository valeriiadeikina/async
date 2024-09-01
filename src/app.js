import GameSavingLoader from "./GameSavingLoader.js";

(async () => {
  try {
    const result = await GameSavingLoader.load();
    return console.log(result);
  } catch (error) {
    console.log("error:", error);
  }
})();
