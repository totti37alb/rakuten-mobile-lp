import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import ArticlesSection from "@/components/ArticlesSection";
import CTASection from "@/components/CTASection";
import FloatingCTA from "@/components/FloatingCTA";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen">
      {/* ① ヒーロー */}
      <HeroSection />

      {/* ② メリット一覧 */}
      <BenefitsSection />

      {/* ③ FAQ */}
      <FAQSection />

      {/* ④ 自動更新コンテンツ一覧 */}
      <ArticlesSection articles={articles} />

      {/* ⑤ 最終CTA */}
      <CTASection />

      {/* フッター */}
      <footer className="text-gray-500 text-center py-8 text-xs px-4 pb-24 md:pb-8 border-t border-gray-100 bg-white">
        <p>※ 本ページは楽天モバイルの従業員による個人的な紹介ページです。</p>
        <p className="mt-1">
          ※ ポイント数・キャンペーン内容は変更される場合があります。最新情報は{" "}
          <a
            href="https://network.mobile.rakuten.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-rakuten-red hover:text-rakuten-crimson"
          >
            楽天モバイル公式サイト
          </a>{" "}
          でご確認ください。
        </p>
      </footer>

      {/* ⑥ スクロール追従CTA（スマホ向け） */}
      <FloatingCTA />
    </main>
  );
}
