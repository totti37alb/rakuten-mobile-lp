import Image from "next/image";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function CampaignBannerSection() {
  return (
    <section className="px-4 py-8" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-[#C0A890] text-xs font-bold tracking-widest uppercase mb-4">
          Official Campaign
        </p>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
        >
          <Image
            src="/campaign-banner.jpg"
            alt="楽天モバイル 従業員紹介キャンペーン｜14,000P / 11,000P プレゼント"
            width={900}
            height={1200}
            className="w-full h-auto"
            priority
          />
        </a>
        <p className="text-center text-[#C0A890] text-xs mt-3">
          ↑ バナーをタップして申し込みページへ
        </p>
      </div>
    </section>
  );
}
