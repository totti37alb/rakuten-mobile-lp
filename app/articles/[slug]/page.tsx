import { getAllSlugs, getArticle } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* ヘッダー */}
      <header className="bg-rakuten-red text-white py-3 px-4 sticky top-0 z-40 shadow-md">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-sm hover:opacity-80">
            ← 楽天モバイル紹介LP
          </Link>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-gray-900 font-bold text-xs py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors"
          >
            🎁 紹介リンクで申し込む
          </a>
        </div>
      </header>

      {/* 記事本文 */}
      <article className="max-w-2xl mx-auto bg-white shadow-sm rounded-2xl mt-6 mx-4 p-6 md:p-10">
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-2">{article.date}</p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">
            {article.emoji} {article.title}
          </h1>
        </div>

        <div
          className="prose prose-sm md:prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* 記事内CTA */}
        <div className="mt-12 bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
          <p className="font-bold text-gray-800 mb-2">
            楽天モバイルに乗り換えるなら紹介リンクがお得！
          </p>
          <p className="text-sm text-gray-600 mb-4">
            紹介リンク経由で申し込むと最大7,000ポイント還元
          </p>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rakuten-red text-white font-bold py-4 px-8 rounded-full hover:bg-rakuten-lightred transition-all hover:scale-105"
          >
            紹介リンクから申し込む →
          </a>
        </div>
      </article>

      <div className="text-center mt-6">
        <Link href="/" className="text-rakuten-red text-sm underline hover:opacity-70">
          ← トップページに戻る
        </Link>
      </div>

      <FloatingCTA />
    </main>
  );
}
