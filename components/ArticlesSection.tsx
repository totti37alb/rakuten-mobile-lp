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
    <section className="py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-[#E5DDD0]" />
            <span className="text-[#C0A890] text-xs font-bold tracking-widest uppercase">Articles</span>
            <div className="flex-1 h-px bg-[#E5DDD0]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 text-center">
            お役立ち情報
          </h2>
          <p className="text-[#C0A890] text-sm mt-2 text-center font-medium">定期更新中</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col rounded-2xl border-2 bg-white hover:border-rakuten-red/40 hover:shadow-md transition-all duration-200 overflow-hidden"
              style={{ borderColor: "#E5DDD0" }}
            >
              {/* サムネイル */}
              {article.thumbnail ? (
                <div className="relative w-full aspect-[1200/630] overflow-hidden bg-[#111]">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ) : (
                <div
                  className="w-full aspect-[1200/630] flex items-center justify-center text-5xl border-b-2"
                  style={{ backgroundColor: "#FAF7F2", borderColor: "#E5DDD0" }}
                >
                  {article.emoji ?? "📄"}
                </div>
              )}

              {/* テキスト */}
              <div className="p-5">
                <p className="text-xs text-[#C0A890] mb-1.5 font-medium">{article.date}</p>
                <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-rakuten-red transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
