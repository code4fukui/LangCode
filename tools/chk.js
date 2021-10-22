import { CSV } from "https://js.sabae.cc/CSV.js";

const fn = "ISO639-1-x.csv";
const data = CSV.toJSON(await CSV.fetch(fn));

data.sort((a, b) => a["ISO639-1"].localeCompare(b["ISO639-1"]));
//console.log(res2, "ISO639", res2.length, iso639_1.length); // 486, 185
await Deno.writeTextFile("ISO639-x2.csv", CSV.stringify(data));
