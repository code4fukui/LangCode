# LangCode

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[LangCode](https://code4fukui.github.io/LangCode/) is a JavaScript library for encoding and decoding language names using ISO 639-1 and ISO 639-2 codes.

## Features
- Encode and decode language names to/from ISO 639-1 and ISO 639-2 codes
- Find language names matching a search string
- Supports multi-language encoding/decoding

## Usage

```js
import { LangCode } from "https://code4fukui.github.io/LangCode/LangCode.js";

console.log(await LangCode.encode("日本語"));
console.log(await LangCode.decode("ja"));
console.log(await LangCode.find("メ"));
```

```js
import { ISO639 } from "https://code4fukui.github.io/LangCode/ISO639.js";

console.log(await ISO639.encode("日本語"));
console.log(await ISO639.decode("jpn"));
console.log(await ISO639.find("メ"));
```

## Reference
- [ISO639-1](https://ja.wikipedia.org/wiki/ISO_639-1%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)
- [ISO 639 Language Codes - CyberLibrarian](https://www.asahi-net.or.jp/~ax2s-kmtn/ref/iso639.html)

## License
MIT License — see [LICENSE](LICENSE).