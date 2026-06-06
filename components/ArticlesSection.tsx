import Link from "next/link";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  emoji?: string;
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
              className="group flex gap-4 p-6 rounded-2xl border-2 bg-white hover:border-rakuten-red/40 hover:shadow-md transition-all duration-200"
              style={{ borderColor: "#E5DDD0" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl border-2 group-hover:border-rakuten-red/20 transition-colors"
                style={{ backgroundColor: "#FAF7F2", borderColor: "#E5DDD0" }}
              >
                {article.emoji ?? "📄"}
              </div>
              <div className="min-w-0">
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
