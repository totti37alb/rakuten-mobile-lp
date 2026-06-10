import Image from "next/image";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function CampaignBannerSection() {
  return (
    <section className="bg-[#0e0f0c]">
      {/* ナビバー */}
      <div className="px-6 py-4 flex items-center justify-between max-w-5xl mx-auto border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-rakuten-red rounded-md flex items-center justify-center">
            <span className="text-white font-black text-xs">R</span>
          </div>
          <span className="text-white/90 font-semibold text-sm tracking-tight">楽天モバイル 従業員紹介</span>
        </div>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 bg-rakuten-red hover:bg-rakuten-crimson text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-px"
        >
          今すぐ申し込む →
        </a>
      </div>

      {/* バナー画像 */}
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

      {/* スマホ向けCTAボタン */}
      <div className="bg-[#0e0f0c] px-5 pt-5 pb-7 flex justify-center md:hidden">
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-2 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-lg py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-rakuten-red/30"
        >
          紹介リンクから申し込む →
        </a>
      </div>
    </section>
  );
}
