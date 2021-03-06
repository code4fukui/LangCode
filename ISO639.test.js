import * as t from "https://deno.land/std/testing/asserts.ts";
import { ISO639 } from "./ISO639.js";

Deno.test("encode", async () => {
  t.assertEquals(await ISO639.encode("日本語"), "jpn");
  t.assertEquals(await ISO639.encode("英語"), "eng");
  t.assertEquals(await ISO639.encode("日本語、英語"), "jpn;eng");
  t.assertEquals(await ISO639.encode("韓国語"), "kor");
  t.assertEquals(await ISO639.encode("朝鮮語"), "kor");
});
Deno.test("decode", async () => {
  t.assertEquals(await ISO639.decode("jpn"), "日本語");
  t.assertEquals(await ISO639.decode("eng"), "英語");
  t.assertEquals(await ISO639.decode("eng;jpn"), "英語、日本語");
  t.assertEquals(await ISO639.decode("xx"), null);
  t.assertEquals(await ISO639.decode("zbl"), "ブリスシンポル");
  t.assertEquals(await ISO639.decode("kor"), "韓国語；朝鮮語");
});
Deno.test("find", async () => {
  const expected = [
    "アダグメ語",
    "アルメニア語",
    "カンボジア語；クメール語",
    "メンデ語",
    "モン・クメール語派(その他)",
    "パピアメント語",
    "シュメール語",
    "トルクメン語",
  ];
  t.assertEquals(await ISO639.find("メ"), expected);
  t.assertEquals((await ISO639.find(""))[0], "アファル語");
});
Deno.test("all", async () => {
  t.assertEquals((await ISO639.find("")).length, 486);
  t.assertEquals((await ISO639.list()).length, 486);
});
