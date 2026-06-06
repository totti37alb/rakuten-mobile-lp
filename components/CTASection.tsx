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

        {/* 差出人スタンプ */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 mb-6">
          <span className="w-4 h-4 rounded-full bg-rakuten-red flex items-center justify-center">
            <span className="text-white text-[8px] font-black">R</span>
          </span>
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
            楽天従業員紹介 限定特典
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          これ、普通の紹介リンクより<br />お得です。
        </h2>
        <p className="text-white/60 text-base mb-8 leading-relaxed">
          楽天従業員から紹介されたあなた限定の特別キャンペーン。<br />
          通常の紹介より最大1,000P多い特典が受け取れます。
        </p>

        {/* ポイント比較 */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="text-center bg-white/5 rounded-xl px-5 py-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">MNP乗り換え</p>
            <p className="text-4xl font-black text-rakuten-red">14,000</p>
            <p className="text-white/60 text-sm font-bold">ポイント</p>
          </div>
          <div className="text-center bg-white/5 rounded-xl px-5 py-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">新規申し込み</p>
            <p className="text-4xl font-black text-white">11,000</p>
            <p className="text-white/60 text-sm font-bold">ポイント</p>
          </div>
        </div>

        {/* 3条件 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left">
          <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3 text-center">特典を受け取る3つの条件</p>
          <div className="space-y-2.5">
            {[
              "このリンクから楽天IDでログインして申し込む",
              "Rakuten最強プランの利用を開始する",
              "Rakuten Linkアプリで10秒以上電話をかける",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rakuten-red text-white text-xs font-black flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-white/80 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
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

        {/* tottiのサインオフ */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs leading-relaxed">
            このページはtottiが個人で作成した紹介ページです。<br />
            少しでも固定費を抑えて、好きなことにお金を使ってほしい。<br />
            そのきっかけになれたら嬉しいです。
          </p>
          <p className="text-white/30 text-xs mt-2 font-bold">— totti</p>
        </div>
      </div>
    </section>
  );
}
