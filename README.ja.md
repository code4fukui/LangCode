# LangCode

ISO639-1言語コードの簡単な検索・変換ライブラリです。

## 機能

- ISO639-1言語コードの検索・変換
- ISO639-2言語コードの検索・変換

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

## ライセンス

MIT