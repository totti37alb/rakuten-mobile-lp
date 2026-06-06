"use client";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-rakuten-red to-rose-700 text-white py-16 px-4 text-center overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* バッジ */}
        <span className="inline-block bg-rakuten-gold text-gray-900 text-sm font-bold px-4 py-1 rounded-full mb-4">
          🎁 友達紹介キャンペーン実施中
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          楽天モバイルを
          <br />
          <span className="text-yellow-300">紹介リンク</span>から申し込もう
        </h1>

        <p className="text-lg md:text-xl mb-2 opacity-90">
          紹介された方に <span className="font-bold text-yellow-300">最大7,000ポイント</span> 還元
        </p>
        <p className="text-base mb-8 opacity-80">
          紹介した方にも <span className="font-bold">5,000〜7,000ポイント</span> プレゼント
        </p>

        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-extrabold py-5 px-10 rounded-full text-xl shadow-2xl hover:bg-yellow-300 transition-all duration-200 hover:scale-105 active:scale-95 w-full max-w-sm"
        >
          この紹介リンクから申し込む →
        </a>

        <p className="mt-4 text-sm opacity-70">
          ※ リンクを踏まずに申し込むと特典が受け取れません
        </p>
      </div>
    </section>
  );
}
