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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rakuten-red text-sm font-bold tracking-widest uppercase mb-3">Articles</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
            お役立ち情報
          </h2>
          <p className="text-gray-400 text-sm mt-2">定期更新中</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-rakuten-red/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rakuten-red/5 transition-colors text-2xl">
                {article.emoji ?? "📄"}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-1.5 font-medium">{article.date}</p>
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
