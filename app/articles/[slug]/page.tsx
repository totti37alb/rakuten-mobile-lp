import { getAllSlugs, getArticle } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FloatingCTA from "@/components/FloatingCTA";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return {};

  const images = article.thumbnail
    ? [{ url: article.thumbnail, width: 1200, height: 630, alt: article.title }]
    : undefined;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "ja_JP",
      publishedTime: article.date,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.thumbnail ? [article.thumbnail] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen pb-32 bg-[#e8ebe6]">

      {/* ヘッダー */}
      <header className="sticky top-0 z-40 border-b bg-[#e8ebe6]/90 border-[#d0d4cf]" style={{ backdropFilter: "blur(12px)" }}>
        <div className="max-w-3xl mx-auto px-5 h-14 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#868685] hover:text-[#0e0f0c] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            トップへ戻る
          </Link>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-rakuten-red hover:bg-rakuten-crimson text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
          >
            紹介リンクから申し込む →
          </a>
        </div>
      </header>

      {/* 記事本文エリア */}
      <div className="max-w-2xl mx-auto px-5 pt-10 md:pt-14">

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
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full border border-[#d0d4cf] text-[#868685] bg-white">
              楽天モバイル
            </span>
            <time className="text-[11px] text-[#868685] font-medium">{article.date}</time>
          </div>
          <h1 className="text-2xl md:text-[28px] font-black leading-[1.5] tracking-tight text-[#0e0f0c]">
            {article.title}
          </h1>
        </div>

        {/* 著者 */}
        <div className="flex items-center gap-3 pb-8 mb-10 border-b border-[#d0d4cf]">
          <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden border border-[#d0d4cf]">
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
            <p className="text-sm font-bold text-[#0e0f0c]">totti</p>
            <p className="text-[11px] text-[#868685]">楽天グループ社員 · 30歳</p>
          </div>
        </div>

        {/* 本文 */}
        <div
          className="prose prose-note"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* 記事内CTA */}
        <div className="mt-16 rounded-2xl p-8 text-center border border-[#d0d4cf]/60 bg-white shadow-sm">
          <div className="inline-flex items-center gap-2 border border-[#d0d4cf] rounded-full px-4 py-1.5 mb-5">
            <div className="w-4 h-4 rounded-full bg-rakuten-red flex items-center justify-center">
              <span className="text-white text-[8px] font-black">R</span>
            </div>
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#868685]">
              楽天従業員紹介 限定特典
            </span>
          </div>
          <p className="text-xl font-black text-[#0e0f0c] mb-2 leading-snug">
            紹介リンクから申し込むと<br />
            <span className="text-rakuten-red">最大 14,000P 還元</span>
          </p>
          <p className="text-sm mb-3 text-[#868685]">
            通常の友達紹介とは別の、従業員紹介キャンペーンです。
          </p>
          <p className="text-[11px] mb-6 text-[#868685]/80 leading-relaxed">
            ※お申し込み前の紹介キャンペーンURLへのログインやサービス利用開始等条件あり。
            <br />
            ※ポイントは、紹介ログイン月の4カ月後から分割付与。
          </p>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-rakuten-red/20 w-full justify-center max-w-xs"
          >
            紹介リンクから申し込む →
          </a>
          <p className="text-xs mt-3 text-[#868685]">
            ※ 通常ページからの申し込みは特典対象外です
          </p>
          <p className="text-[11px] mt-2 text-[#868685]/80">
            ※ 本ページは楽天グループ社員tottiによる従業員紹介ページです（#PR）
          </p>
        </div>

        {/* フッターリンク */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm text-[#868685] underline underline-offset-2 hover:text-[#0e0f0c] transition-colors"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>

      <FloatingCTA />
    </main>
  );
}
