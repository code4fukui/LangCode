import * as t from "https://deno.land/std/testing/asserts.ts";
import { LangCode } from "./LangCode.js";

Deno.test("encode", async () => {
  t.assertEquals(await LangCode.encode("日本語"), "ja");
  t.assertEquals(await LangCode.encode("英語"), "en");
  t.assertEquals(await LangCode.encode("日本語、英語"), "ja;en");
});
Deno.test("decode", async () => {
  t.assertEquals(await LangCode.decode("ja"), "日本語");
  t.assertEquals(await LangCode.decode("en"), "英語");
  t.assertEquals(await LangCode.decode("en;ja"), "英語、日本語");
  t.assertEquals(await LangCode.decode("xx"), null);
});
Deno.test("find", async () => {
  const expected = [
    "アルメニア語",
    "クメール語",
    "トルクメン語",
  ];
  t.assertEquals(await LangCode.find("メ"), expected);
});
Deno.test("all", async () => {
  t.assertEquals((await LangCode.find("")).length, 185);
});
