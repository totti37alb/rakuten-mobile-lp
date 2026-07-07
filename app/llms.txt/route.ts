import { getAllArticles } from "@/lib/articles";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/site";
import { faqs } from "@/lib/faq";

// AEO: AI検索エンジン・LLM向けのサイト概要（llms.txt 規約）
export const dynamic = "force-static";

export function GET() {
  const articles = getAllArticles();

  const body = `# 楽天モバイル従業員紹介キャンペーン（totti）

> ${SITE_DESCRIPTION}

## このサイトについて

- 楽天グループ社員tottiによる楽天モバイル従業員紹介キャンペーン（コード：2162）の個人紹介ページです。
- MNP乗り換えで最大14,000ポイント、新規申し込みで最大11,000ポイント還元（条件・分割付与あり）。
- 通常の友達紹介（7,000P）とは別のキャンペーンで、従業員経由の方が還元が大きいのが特徴です。
- Rakuten最強プランは3GBまで1,078円、20GBまで2,178円、無制限で3,278円（税込）。違約金・契約縛りなし。

## よくある質問

${faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a.join(" ")}`).join("\n")}

## 記事一覧

${articles.map((a) => `- [${a.title}](${SITE_URL}/articles/${a.slug}): ${a.excerpt}`).join("\n")}

## 公式情報

- [楽天モバイル公式キャンペーンページ（コード：2162）](https://network.mobile.rakuten.co.jp/campaign/referral-application-employee/)
- [楽天モバイル公式サイト](https://network.mobile.rakuten.co.jp/)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
