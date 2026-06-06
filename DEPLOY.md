# デプロイ手順書

## ローカル確認

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000 で確認
```

## Vercelへのデプロイ（5分でできます）

### 方法A：GitHub連携（推奨）

1. GitHubに新しいリポジトリを作成
2. このフォルダを push

```bash
cd rakuten-mobile-lp
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/あなたのユーザー名/rakuten-mobile-lp.git
git push -u origin main
```

3. [Vercel](https://vercel.com) にアクセスしてログイン（GitHubアカウントでOK）
4. 「New Project」→ 先ほどのリポジトリを選択
5. 設定はすべてデフォルトのままで「Deploy」をクリック
6. 数十秒でURLが発行されます

→ 以降は `git push` するだけで自動デプロイされます

### 方法B：Vercel CLIを使う

```bash
npm install -g vercel
vercel login
vercel
# → 質問に答えるだけでデプロイ完了
```

## デプロイ後にやること

1. `app/layout.tsx` の `metadataBase` を実際のURLに変更

```ts
metadataBase: new URL("https://あなたのドメイン.vercel.app"),
```

2. `git push` で再デプロイ

## 記事の自動更新（Phase 3）

`content/articles/` フォルダに `.md` ファイルを追加して push するだけで
新しい記事がサイトに反映されます。

フロントマター形式：
```markdown
---
title: "記事タイトル"
date: "2026-06-01"
excerpt: "一覧ページに表示される要約文"
emoji: "📡"
---

本文をここに書く
```

GitHub Actions + Claude API/OpenAI APIで自動生成する場合は
Phase 3のロードマップを参照してください。
