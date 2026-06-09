import CampaignBannerSection from "@/components/CampaignBannerSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import PersonalIntroSection from "@/components/PersonalIntroSection";
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
      {/* ① ファーストビュー：公式バナー */}
      <CampaignBannerSection />

      {/* マーキー */}
      <MarqueeTicker />

      {/* ② totti自己紹介（信頼の核） */}
      <PersonalIntroSection />

      {/* ③ メリット一覧 */}
      <BenefitsSection />

      {/* マーキー（暗め） */}
      <MarqueeTicker dark />

      {/* ④ FAQ */}
      <FAQSection />

      {/* ⑤ 自動更新コンテンツ一覧 */}
      <ArticlesSection articles={articles} />

      {/* ⑥ 最終CTA */}
      <CTASection />

      {/* フッター */}
      <footer
        className="text-center py-8 text-xs px-4 pb-24 md:pb-8 border-t"
        style={{ backgroundColor: "#e8ebe6", color: "#868685", borderColor: "#d0d4cf" }}
      >
        <p>※ 本ページはtottiが楽天グループ社員として作成した個人の紹介ページです。</p>
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

      {/* スクロール追従CTA（スマホ向け） */}
      <FloatingCTA />
    </main>
  );
}
