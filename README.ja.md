# LangCode

[LangCode](https://code4fukui.github.io/LangCode/) は、ISO 639-1 および ISO 639-2 コードを用いて言語名のエンコードおよびデコードを行うJavaScriptライブラリです。

## 機能
- 言語名とISO 639-1およびISO 639-2コード間のエンコード・デコード
- 検索文字列に一致する言語名の検索
- 複数言語のエンコード・デコードに対応

## 使い方

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

## 参考
- [ISO639-1](https://ja.wikipedia.org/wiki/ISO_639-1%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)
- [ISO 639 Language Codes - CyberLibrarian](https://www.asahi-net.or.jp/~ax2s-kmtn/ref/iso639.html)

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
