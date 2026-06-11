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
        <div className="flex items-baseline gap-3">
          <span className="font-black text-lg tracking-[-0.02em] text-white">totti<span className="text-rakuten-red">.</span></span>
          <span className="hidden sm:inline text-white/40 text-[11px] tracking-[0.08em]">スマホ代、まじめに下げる係</span>
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
            <span className="w-1.5 h-1.5 rounded-full bg-rakuten-red" />
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
            通常の友達紹介とは別の、従業員紹介キャンペーンです。
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
          <p className="text-white/40 text-xs mb-8 leading-relaxed">
            ※お申し込み前の紹介キャンペーンURLへのログインやサービス利用開始等条件あり。
            <br />
            ※ポイントは、紹介ログイン月の4カ月後から分割付与。
            <br />
            ※楽天従業員紹介キャンペーン（コード：2162）。詳細条件は公式キャンペーンページをご確認ください。
          </p>

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
