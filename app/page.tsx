import type { Metadata } from "next";
import CampaignBannerSection from "@/components/CampaignBannerSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import PersonalIntroSection from "@/components/PersonalIntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import ArticlesSection from "@/components/ArticlesSection";
import CTASection from "@/components/CTASection";
import FloatingCTA from "@/components/FloatingCTA";
import JsonLd from "@/components/JsonLd";
import { getAllArticles } from "@/lib/articles";
import { faqs } from "@/lib/faq";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// 構造化データ（AEO/SEO）
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  inLanguage: "ja",
  author: { "@id": AUTHOR.url },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AUTHOR.url,
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: "楽天グループ",
  },
  image: AUTHOR.image,
  url: SITE_URL,
  sameAs: [AUTHOR.x],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a.join(" "),
    },
  })),
};

export default function Home() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen">
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />

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
      <ArticlesSection articl