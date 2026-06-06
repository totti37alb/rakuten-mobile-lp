const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24 px-4 text-white"
      style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #2a0000 100%)" }}
    >
      {/* グロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(204,0,0,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <p className="text-rakuten-red text-sm font-bold tracking-widest uppercase mb-4">Apply Now</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          紹介リンクから申し込もう
        </h2>
        <p className="text-white/60 text-base mb-10 leading-relaxed">
          このリンク経由で申し込むだけで、<br />
          <span className="text-white font-bold">最大7,000ポイント還元</span>を受け取れます。
        </p>

        {/* ポイント表示 */}
        <div className="flex justify-center gap-8 mb-10">
          <div className="text-center">
            <p className="text-white/40 text-xs mb-1">あなたが受け取れる</p>
            <p className="text-4xl font-black">7,000<span className="text-lg">P</span></p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-white/40 text-xs mb-1">紹介した人ももらえる</p>
            <p className="text-4xl font-black">7,000<span className="text-lg">P</span></p>
          </div>
        </div>

        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl transition-all duration-200 hover:-translate-y-0.5 w-full max-w-sm justify-center"
        >
          紹介リンクから申し込む →
        </a>
        <p className="mt-4 text-white/30 text-xs">
          ※ 通常ページからの申し込みは特典対象外です
        </p>
      </div>
    </section>
  );
}
