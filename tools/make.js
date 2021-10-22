import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://www.asahi-net.or.jp/~ax2s-kmtn/ref/iso639.html";
const txt = await (await fetch(url)).text();
//const fn = "https___www.asahi-net.or.jp__ax2s-kmtn_ref_iso639.html";
//const txt = await Deno.readTextFile(fn);
const dom = HTMLParser.parse(txt);
const title = dom.querySelector("title").text;
console.log(title);

const table2csv = (tbl) => {
  const res = [];
  const trs = tbl.querySelectorAll("tr");
  trs.forEach(tr => {
    const tds = tr.querySelectorAll("td");
    const line = [];
    tds.forEach(td => {
      line.push(td.text);
    });
    res.push(line);
  });
  return res;
};

const tbl = dom.querySelector("table .basic");
const res = table2csv(tbl);
//console.log(res);
res.unshift(["ISO639-2", "ISO639-1", "lang_ja", "lang"]);
await Deno.writeTextFile("org.csv", CSV.encode(res));


const json = CSV.toJSON(res);
console.log(json);
const res2 = json.filter(l => l["ISO639-2"]).map(l => {
  const chg = (s) => {
    if (s.indexOf("[") >= 0) {
      console.log("remove", s);
      s = s.replace(/\[|\]/g, "");
    }
    if (s.indexOf("*") >= 0) {
      console.log("add", s);
      s = s.replace("*", "");
    }
    return s;
  };
  const s2 = chg(l["ISO639-2"]);
  const s1 = chg(l["ISO639-1"]);
  const [b, t] = s2.split("/");

  if (!l.lang_ja) {
    console.log("no lang_ja", l);
    if (s2 == "zbl") {
      l.lang_ja = "ブリスシンポル";
    }
  }
  if (!l.lang) {
    console.log("no lang", l);
  }

  const nlang = l.lang.indexOf("→")
  if (nlang) {
    l.lang = l.lang.substring(nlang + 1);
  }
  return {
    "ISO639-2B": b,
    "ISO639-2T": t,
    "ISO639-1": s1,
    lang_ja: l.lang_ja,
    lang: l.lang,
  };
});

res2.sort((a, b) => a["ISO639-2B"].localeCompare(b["ISO639-2B"]));
await Deno.writeTextFile("ISO639.csv", CSV.stringify(res2));

const iso639_1 = res2.filter(l => l["ISO639-1"]);
iso639_1.forEach(l => {
  delete l["ISO639-2B"];
  delete l["ISO639-2T"];
});
iso639_1.sort((a, b) => a["ISO639-1"].localeCompare(b["ISO639-1"]));
//console.log(res2, "ISO639", res2.length, iso639_1.length); // 486, 185
await Deno.writeTextFile("ISO639-1.csv", CSV.stringify(iso639_1));

/*
scc 
scr
mol
*/

