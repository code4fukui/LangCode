import { CSV } from "https://js.sabae.cc/CSV.js";

class LangCode {
  static fn = "ISO639-1.csv";
  static csv = null;
  static async init() {
    if (LangCode.csv) {
      return LangCode.csv;
    }
    //const url = "https://code4fukui.github.io/LangCode/";
    const url = "";
    const csv = await CSV.fetch(url + LangCode.fn);
    LangCode.csv = csv;
    return csv;
  }
  static async find(s) {
    const csv = await LangCode.init();
    const match = csv.filter(line => line[1].indexOf(s) >= 0);
    return match.map(m => m[1]);
  }
  static async encode(s) {
    const csv = await LangCode.init();
    const value = csv.find(line => line[1] == s);
    if (!value) {
      return null;
    }
    return value[0];
  }
  static async decode(code) {
    const csv = await LangCode.init();
    const value = csv.find(line => line[0] == code);
    if (!value) {
      return null;
    }
    return value[1];
  }
}

export { LangCode };
