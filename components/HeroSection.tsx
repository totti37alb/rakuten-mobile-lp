"use client";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ background: "linear-gradient(160deg, #111111 0%, #1a1a1a 60%, #2a0000 100%)" }}
    >
      {/* 背景の赤いグロー */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #CC0000 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* ナビバー */}
      <div className="relative z-10 border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-rakuten-red rounded-sm flex items-center justify-center">
            <span className="text-white font-black text-xs">R</span>
          </div>
          <span className="font-bold text-sm tracking-wide">楽天モバイル 従業員紹介</span>
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

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">

          {/* 差出人ラベル */}
          <div className="inline-flex items-center gap-2 mb-6 border border-white/20 rounded-full px-4 py-1.5 bg-white/5">
            <span className="w-4 h-4 rounded-full bg-rakuten-red flex items-center justify-center">
              <span className="text-white text-[8px] font-black">R</span>
            </span>
            <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
              From totti · 楽天グループ社員
            </span>
          </div>

          {/* ヘッドライン */}
          <h1 className="text-4xl md:text-5xl font-black leading-[1.15] mb-6 tracking-tight">
            楽天モバイル、
            <br />
            <span className="text-rakuten-red">試してみませんか。</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg mb-4 leading-relaxed">
            楽天グループ社員の私（totti）の紹介リンクから申し込むと、
            <br className="hidden md:block" />
            <strong className="text-white">あなたへ最大14,000P</strong>が還元されます。
            <br className="hidden md:block" />
            通常の友達紹介より最大1,000P多い、従業員限定の特典です。
          </p>

          {/* ポイント数字 */}
          <div className="flex items-start gap-6 mb-3">
            <div>
              <p className="text-white/50 text-xs font-medium mb-0.5">MNP乗り換えの方</p>
              <p className="text-3xl font-black text-white">
                <span className="text-rakuten-red">14,000</span>
                <span className="text-lg font-bold"> P</span>
              </p>
            </div>
            <div className="w-px h-10 bg-white/20 mt-1" />
            <div>
              <p className="text-white/50 text-xs font-medium mb-0.5">新規申し込みの方</p>
              <p className="text-3xl font-black text-white">
                <span className="text-rakuten-red">11,000</span>
                <span className="text-lg font-bold"> P</span>
              </p>
            </div>
          </div>
          <p className="text-white/40 text-xs mb-8">※ 楽天従業員紹介限定。このリンク経由での申し込みのみ対象です。</p>

          {/* CTA */}
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-lg px-8 py-4 rounded-lg shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full md:w-auto justify-center md:justify-start max-w-sm"
          >
            <span>紹介リンクから申し込む</span>
            <span className="text-xl">→</span>
          </a>
          <p className="mt-3 text-white/40 text-xs">
            ※ 通常の申し込みページでは特典は付与されません
          </p>
        </div>
      </div>
    </section>
  );
}
