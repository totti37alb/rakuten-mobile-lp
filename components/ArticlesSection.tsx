import Link from "next/link";
import Image from "next/image";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  emoji?: string;
  thumbnail?: string;
};

export default function ArticlesSection({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="mb-14">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#868685] mb-4">Articles</p>
          <div className="flex items-end justify-between gap-4">
            <h2
              className="font-black text-[#0e0f0c] leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 9vw, 72px)" }}
            >
              お役立ち情報
            </h2>
            <p className="text-[#868685] text-xs font-medium pb-1 flex-shrink-0">定期更新中</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-[#d0d4cf]/60 bg-white hover:border-rakuten-red/30 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* サムネイル */}
              {article.thumbnail ? (
                <div className="relative w-full aspect-[1200/630] overflow-hidden bg-[#0e0f0c]">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-full aspect-[1200/630] flex items-center justify-center text-5xl bg-[#e8ebe6] border-b border-[#d0d4cf]">
                  {article.emoji ?? "📄"}
                </div>
              )}

              {/* テキスト */}
              <div className="p-5">
                <p className="text-[11px] text-[#868685] mb-1.5 font-medium">{article.date}</p>
                <h3 className="font-bold text-[#0e0f0c] text-sm leading-snug group-hover:text-rakuten-red transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-[#868685] leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
