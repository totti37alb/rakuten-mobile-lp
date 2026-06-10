import Image from "next/image";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function CampaignBannerSection() {
  return (
    <section className="bg-[#0a0a0a]">
      {/* ナビバー */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-rakuten-red rounded-sm flex items-center justify-center">
            <span className="text-white font-black text-xs">R</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">楽天モバイル 従業員紹介</span>
        </div>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 bg-rakuten-red hover:bg-rakuten-crimson text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          今すぐ申し込む →
        </a>
      </div>

      {/* バナー画像（クリックで申し込みへ） */}
      <a
        href={REFERRAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/campaign-banner.jpg"
          alt="楽天モバイル 従業員紹介キャンペーン｜MNP乗り換えで14,000P / 新規11,000Pプレゼント"
          width={900}
          height={1200}
          className="w-full h-auto"
          priority
        />
      </a>

      {/* スマホ向けCTAボタン（バナー直下） */}
      <div className="bg-[#0a0a0a] px-4 pt-4 pb-6 flex justify-center md:hidden">
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-2 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-lg py-4 rounded-xl transition-colors duration-200"
        >
          紹介リンクから申し込む →
        </a>
      </div>
    </section>
  );
}
