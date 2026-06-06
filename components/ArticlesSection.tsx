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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">
          📰 最新お役立ち情報
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">定期更新中</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="card hover:shadow-lg transition-shadow duration-200 hover:border-rakuten-red group"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{article.emoji ?? "📄"}</span>
                <div>
                  <p className="text-xs text-gray-400 mb-1">{article.date}</p>
                  <h3 className="font-bold text-gray-800 group-hover:text-rakuten-red transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
