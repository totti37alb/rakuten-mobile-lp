import { getAllSlugs, getArticle } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FloatingCTA from "@/components/FloatingCTA";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen pb-32" style={{ backgroundColor: "#FAF7F2" }}>

      {/* ヘッダー */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "#FAF7F2", borderColor: "#E5DDD0" }}
      >
        <div className="max-w-3xl mx-auto px-4 h-14 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity"
            style={{ color: "#C0A890" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            トップへ戻る
          </Link>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-rakuten-red hover:bg-rakuten-crimson text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            紹介リンクから申し込む →
          </a>
        </div>
      </header>

      {/* 記事本文エリア */}
      <div className="max-w-2xl mx-auto px-4 pt-10 md:pt-14">

        {/* サムネイル */}
        {article.thumbnail && (
          <div className="relative w-full rounded-2xl overflow-hidden mb-10 shadow-sm" style={{ aspectRatio: "1200/630" }}>
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        )}

        {/* メタ情報 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full border"
              style={{ color: "#C0A890", borderColor: "#E5DDD0", backgroundColor: "white" }}
            >
              楽天モバイル
            </span>
            <time className="text-xs" style={{ color: "#C0A890" }}>{article.date}</time>
          </div>
          <h1 className="text-2xl md:text-[28px] font-black leading-[1.5] tracking-tight text-gray-900">
            {article.title}
          </h1>
        </div>

        {/* 著者 */}
        <div
          className="flex items-center gap-3 pb-8 mb-10 border-b"
          style={{ borderColor: "#E5DDD0" }}
        >
          <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
            <Image
              src="/totti.png"
              alt="totti"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">totti</p>
            <p className="text-xs" style={{ color: "#C0A890" }}>楽天グループ社員 · 30歳</p>
          </div>
        </div>

        {/* 本文 */}
        <div
          className="prose prose-note"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* 記事内CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center border-2"
          style={{ backgroundColor: "white", borderColor: "#E5DDD0" }}
        >
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5" style={{ borderColor: "#E5DDD0" }}>
            <div className="w-4 h-4 rounded-full bg-rakuten-red flex items-center justify-center">
              <span className="text-white text-[8px] font-black">R</span>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C0A890" }}>
              楽天従業員紹介 限定特典
            </span>
          </div>
          <p className="text-xl font-black text-gray-900 mb-2 leading-snug">
            紹介リンクから申し込むと<br />
            <span className="text-rakuten-red">最大 14,000P 還元</span>
          </p>
          <p className="text-sm mb-6" style={{ color: "#C0A890" }}>
            通常の友達紹介より最大1,000P多い、従業員限定特典です。
          </p>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg w-full justify-center max-w-xs"
          >
            紹介リンクから申し込む →
          </a>
          <p className="text-xs mt-3" style={{ color: "#C0A890" }}>
            ※ 通常ページからの申し込みは特典対象外です
          </p>
        </div>

        {/* フッターリンク */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm underline hover:opacity-70 transition-opacity"
            style={{ color: "#C0A890" }}
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>

      <FloatingCTA />
    </main>
  );
}
