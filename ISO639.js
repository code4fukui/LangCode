import { CSV } from "https://js.sabae.cc/CSV.js";

class ISO639 {
  static url = "https://code4fukui.github.io/LangCode/"; // default
  static setDataPath(url) {
    this.url = url;
  }

  static fn = "ISO639.csv";
  static csv = null;
  static nname = null;
  static nval = null;
  static async init() {
    if (this.csv) {
      return this.csv;
    }
    const csv = await CSV.fetch(this.url + this.fn);
    this.csv = csv;
    const header = csv[0];
    this.nname = header.indexOf("lang_ja");
    this.nval = header.indexOf("ISO639-2B");
    return csv;
  }
  static async find(s) {
    const csv = await this.init();
    const match = [];
    for (let i = 1; i < csv.length; i++) {
      const line = csv[i];
      for (const l of line) {
        if (!s || l.indexOf(s) >= 0) {
          match.push(line[this.nname]);
          break;
        }
      }
    }
    return match;
  }
  static async _encode1(s) {
    const csv = await this.init();
    const value = csv.find(line => {
      const name = line[this.nname];
      if (name == s) {
        return true;
      }
      if (name.indexOf("；")) {
        if (name.split("；").indexOf(s) >= 0) {
          return true;
        }
      }
      return false;
    });
    if (!value) {
      return null;
    }
    return value[this.nval];
  }
  static async encode(code) {
    const res = [];
    const cs = code.split("、");
    for (const c of cs) {
      const r = await this._encode1(c);
      if (!r) {
        return null;
      }
      res.push(r);
    }
    return res.join(";");
  }
  static async _decode1(code) {
    const csv = await this.init();
    const value = csv.find(line => line[this.nval] == code);
    if (!value) {
      return null;
    }
    return value[this.nname];
  }
  static async decode(code) {
    const res = [];
    const cs = code.split(";");
    for (const c of cs) {
      const r = await this._decode1(c);
      if (!r) {
        return null;
      }
      res.push(r);
    }
    return res.join("、");
  }
  static async list() {
    return CSV.toJSON(this.csv);
  }
}

export { ISO639 };
