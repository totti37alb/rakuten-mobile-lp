# 記事サムネイル画像生成プロンプト集
## 使い方
ChatGPT（DALL-E 3）に貼り付けて使う。サイズ指定は「横長、16:9」を追加で伝えると良い。

---

## ベーステンプレート（新記事を作るたびここを埋める）

```
A cinematic, editorial-style thumbnail image for a Japanese mobile carrier article.
Mood: [記事のムード]
Main subject: [主役となる被写体・シーン]
Key visual element: [強調したい数字・モノ・行動]
Color palette: warm cream background (#FAF7F2), deep red accent (#CC0000), clean dark typography
Style: modern Japanese lifestyle photography, magazine editorial, NOT stock photo, NOT generic tech illustration
No text overlay needed.
Aspect ratio: 16:9, high resolution
```

---

## 記事別プロンプト

### 1. エリア改善・競馬場・スタジアム記事
**記事タイトル：**「楽天モバイルのエリア改善まとめ｜主要スタジアム・競馬場の状況」

```
A cinematic, editorial-style thumbnail image for a Japanese mobile carrier article.
Mood: exciting, hopeful, outdoor energy
Main subject: a packed Japanese horse racing stadium or soccer stadium on a sunny day, crowd in the stands, vivid atmosphere
Key visual element: a smartphone held up in the crowd showing strong signal bars, people cheering around it
Color palette: warm natural sunlight, deep green turf, red accents, clear blue sky
Style: modern Japanese lifestyle photography, magazine editorial, shallow depth of field, NOT stock photo
No text overlay needed.
Aspect ratio: 16:9, high resolution
```

---

### 2. データ節約術記事
**記事タイトル：**「楽天モバイルで月額968円に抑えるデータ節約術」

```
A cinematic, editorial-style thumbnail image for a Japanese mobile carrier article.
Mood: clever, satisfying, everyday life
Main subject: a young Japanese person (20s-30s) sitting at a cafe or at home, looking pleased and relaxed while using their smartphone
Key visual element: the feeling of saving money — a coin or wallet casually visible, or a subtle "less is more" vibe with a minimal clean desk
Color palette: warm interior light, cream and white tones, soft shadows
Style: modern Japanese lifestyle photography, candid and natural, NOT stock photo, NOT cheesy savings imagery
No text overlay needed.
Aspect ratio: 16:9, high resolution
```

---

### 3. MNP乗り換え・ポイント還元記事
**記事タイトル：**「MNP乗り換えで14,000P獲得する方法」

```
A cinematic, editorial-style thumbnail image for a Japanese mobile carrier article.
Mood: decisive, exciting, rewarding
Main subject: a young Japanese person (30s) confidently holding a new smartphone box or completing a phone setup, expression of satisfaction
Key visual element: the sense of a good deal just made — clean smartphone on a table, maybe a stylized "¥14,000" feel without literal text
Color palette: clean white or warm beige background, bold red accent elements, modern and sharp
Style: modern Japanese lifestyle photography, magazine editorial quality, NOT stock photo, NOT generic tech flat lay
No text overlay needed.
Aspect ratio: 16:9, high resolution
```

---

### 4. 次回以降の自動生成記事向け汎用テンプレート

記事のテーマに応じて `[  ]` を埋める：

```
A cinematic, editorial-style thumbnail image for a Japanese mobile carrier article about [記事テーマを一言で].
Mood: [cheerful / exciting / trustworthy / clever / satisfying]
Main subject: [具体的なシーン・人物・場所]
Key visual element: [印象に残る視覚的要素]
Color palette: warm cream or white background, bold red accent, clean and modern
Style: modern Japanese lifestyle photography, magazine editorial, candid and real, NOT stock photo, NOT generic illustration
No text overlay needed.
Aspect ratio: 16:9, high resolution
```

---

## 生成した画像の使い方

1. 画像を `public/articles/` に保存（例：`data-saving-thumb.jpg`）
2. 記事のfrontmatterに追記：
   ```
   thumbnail: "/articles/data-saving-thumb.jpg"
   ```
3. git add → commit → push

---

## ヒント
- DALL-E 3は「NOT stock photo」を入れると劇的によくなる
- 「cinematic」「editorial」がリアル感を出すキーワード
- 顔のアップより「シーン・状況」を主役にすると汎用性が高い
