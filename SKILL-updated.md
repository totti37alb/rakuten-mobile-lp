---
name: rakuten-article-generator
description: 楽天モバイルの最新ニュースを検索してLP用記事を自動生成・push
---

あなたは楽天モバイル紹介LP（rakuten-mobile-lp）の記事自動生成タスクです。

## 目的
楽天モバイルに関する最新・有益な情報を検索し、LPのお役立ち記事セクション用にMarkdown記事を1本作成してGitHubにpushする。Vercelが自動でデプロイする。

## ワークスペースパス
C:\Users\uyaal\OneDrive\Desktop\rakuten-mobile-lp

## 手順

### Step 1: ネタ収集
WebSearchで以下のようなキーワードで検索し、本日付近の新しい情報を探す:
- "楽天モバイル 2026 最新"
- "楽天モバイル エリア 改善"
- "楽天モバイル キャンペーン"
- "楽天ポイント 活用"
- "格安スマホ 乗り換え"

既存記事（content/articles/）をgit show等で確認し、同じテーマが被らないようにする。

### Step 2: 記事を作成
以下のfrontmatterフォーマットでMarkdown記事を作成する。

ファイル名: YYYY-MM-DD-[英語スラッグ].md（例: 2026-06-08-rakuten-link-tips.md）

```
---
title: "記事タイトル（日本語、40文字以内）"
date: "YYYY-MM-DD"
excerpt: "記事の要約（80文字以内）"
emoji: "絵文字1つ"
thumbnail: "/articles/[スラッグ]-thumb.png"
---

# タイトル

本文（600〜1000文字）
```

ターゲット読者：スマホ代を節約したい20〜40代。楽天モバイルへの乗り換えを検討している人。
トーン：フレンドリーで分かりやすく、具体的。

### Step 3: ファイル保存
Writeツールで以下に保存:
C:\Users\uyaal\OneDrive\Desktop\rakuten-mobile-lp\content\articles\[ファイル名]

### Step 4: サムネイル用ChatGPTプロンプトを生成・報告
記事のテーマに合わせて以下のテンプレートを埋め、ChatGPT（DALL-E 3）用プロンプトを生成する。
このプロンプトは完了報告に含める（画像生成はユーザーが手動で行う）。

```
A cinematic, editorial-style thumbnail image for a Japanese mobile carrier article about [記事テーマを一言で].
Mood: [cheerful / exciting / trustworthy / clever / satisfying から最適なもの]
Main subject: [具体的なシーン・人物・場所。日本の日常生活や競馬場・スタジアムなど読者に刺さる情景]
Key visual element: [印象に残る視覚的要素。数字・モノ・人の表情・行動など]
Color palette: warm cream or white background, bold red accent, clean and modern
Style: modern Japanese lifestyle photography, magazine editorial, candid and real, NOT stock photo, NOT generic illustration
No text overlay needed.
Aspect ratio: 16:9, high resolution
```

**テーマ別の参考例：**
- 節約・料金系 → 満足げな表情でスマホを見ている若い日本人、カフェや自宅
- エリア・電波系 → スタジアムや競馬場でスマホを掲げている人、満員の観客席
- 乗り換え・キャンペーン系 → 新しいスマホを手に満足げな30代、清潔感のある部屋
- ポイント・お得系 → コンビニやショッピングでスマホ決済する日本人、日常の得した瞬間

画像生成後は `public/articles/[スラッグ]-thumb.png` に保存し、frontmatterの `thumbnail:` を更新すること。

### Step 5: Git push
git-push.batをダブルクリック、またはbashで以下を実行してGitHubにpush:
```
REPO=$(find /sessions -maxdepth 5 -name "rakuten-mobile-lp" -type d 2>/dev/null | grep -v '.git' | head -1)
cd "$REPO" && git add -A && git commit -m "auto: 記事追加 $(date +%Y-%m-%d)" && git push
```
※ bashからpushできない場合は git-push.bat をダブルクリックで実行する。

### Step 6: 完了報告
以下を報告する:
- 追加した記事のタイトルと要約
- git pushの結果
- サムネイル生成用ChatGPTプロンプト（Step 4で作成したもの）
