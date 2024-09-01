import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const result = await json(data);
      const parsedData = JSON.parse(result);
      return parsedData;
    } catch (error) {
      throw new Error("error");
    }
  }
}
