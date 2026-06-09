const REFERRAL_URL = "https://r10.to/hkhSbQ";

const steps = [
  {
    num: "01",
    title: "紹介リンクからログインして申し込む",
    detail: "このページのリンクから楽天IDでログイン後、Rakuten最強プランに申し込む。申し込み前のログインが確実。申し込み後でも7日以内なら対象。",
    note: "翌々月末日 23:59 までに完了",
  },
  {
    num: "02",
    title: "Rakuten最強プランの利用を開始する",
    detail: "SIM/eSIMの開通を完了させる。MNP乗り換えは番号移行完了日、新規は配送完了日または開通日（早い方）。",
    note: "翌々月末日 23:59 までに完了",
  },
  {
    num: "03",
    title: "Rakuten Linkアプリで10秒以上通話する",
    detail: "アプリをダウンロードし、発信で10秒以上通話。0570などの他社接続サービスへの発信は対象外。「my楽天モバイル」の通話履歴で達成確認できる。",
    note: "翌々月末日 23:59 までに完了",
  },
];

const pointBreakdown = [
  {
    label: "MNP乗り換え",
    total: "14,000",
    schedule: [
      { month: "条件達成月+4", point: "4,000P" },
      { month: "条件達成月+5", point: "5,000P" },
      { month: "条件達成月+6", point: "5,000P" },
    ],
    highlight: true,
  },
  {
    label: "新規申し込み",
    total: "11,000",
    schedule: [
      { month: "条件達成月+4", point: "3,000P" },
      { month: "条件達成月+5", point: "4,000P" },
      { month: "条件達成月+6", point: "4,000P" },
    ],
    highlight: false,
  },
];

const diffs = [
  "2回線目・再契約の方も対象（通常の友人紹介と異なる従業員紹介のメリット）",
  "過去に楽天モバイルを使ったことがある方も対象",
  "おひとり様最大5回線まで適用可能",
];

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(160deg, #0e0f0c 0%, #1a0a0a 60%, #220000 100%)" }}
    >
      {/* グロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(204,0,0,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 py-24">

        {/* ヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-white/[0.12] rounded-full px-4 py-1.5 bg-white/[0.04] mb-6">
            <span className="w-3.5 h-3.5 rounded-full bg-rakuten-red flex items-center justify-center">
              <span className="text-white text-[7px] font-black">R</span>
            </span>
            <span className="text-white/50 text-[10px] font-semibold tracking-[0.12em] uppercase">
              楽天従業員紹介 限定特典
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-snug mb-4">
            これ、普通の紹介リンクより<br />お得です。
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
            楽天従業員からの紹介は通常の友達紹介とは別キャンペーン（コード：2162）。
            2回線目・再契約の方も対象になるなど、条件がより広い。
          </p>
        </div>

        {/* ポイント比較カード */}
        <div className="grid grid-cols-2 gap-3 mb-14">
          {pointBreakdown.map((p) => (
            <div
              key={p.label}
              className={`rounded-2xl p-5 border ${
                p.highlight
                  ? "bg-rakuten-red/[0.12] border-rakuten-red/30"
                  : "bg-white/[0.04] border-white/[0.08]"
              }`}
            >
              <p className="text-white/40 text-[11px] mb-1 font-medium">{p.label}</p>
              <p className={`text-3xl font-black mb-4 ${p.highlight ? "text-rakuten-red" : "text-white"}`}>
                {p.total}
                <span className="text-sm font-semibold text-white/40"> P</span>
              </p>
              <div className="space-y-1.5 border-t border-white/[0.08] pt-3">
                {p.schedule.map((s) => (
                  <div key={s.month} className="flex justify-between items-center">
                    <span className="text-white/30 text-[11px]">{s.month}</span>
                    <span className={`text-xs font-bold ${p.highlight ? "text-rakuten-red" : "text-white/60"}`}>
                      {s.point}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/20 text-[10px] mt-3">※ 期間限定P・有効期限6ヶ月</p>
            </div>
          ))}
        </div>

        {/* 3ステップ */}
        <div className="mb-14">
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.15em] text-center mb-6">
            キャンペーン参加方法
          </p>
          <div className="space-y-2.5">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rakuten-red text-white text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm leading-snug mb-2">{step.title}</p>
                      <p className="text-white/40 text-xs leading-relaxed">{step.detail}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rakuten-red/70 flex-shrink-0" />
                        <span className="text-white/40 text-[10px] font-medium">{step.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span className="text-white/15 text-sm">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 従業員紹介の差別化 */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mb-12">
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.15em] mb-5 text-center">
            通常の友達紹介にはない、従業員紹介だけのメリット
          </p>
          <div className="space-y-3">
            {diffs.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-rakuten-red text-sm mt-0.5">✓</span>
                <p className="text-white/60 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-rakuten-red/20 transition-all duration-200 hover:-translate-y-0.5 w-full max-w-sm justify-center"
          >
            紹介リンクから申し込む →
          </a>
          <p className="mt-3 text-white/25 text-xs">
            ※ 通常ページからの申し込みは特典対象外です
          </p>
          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <p className="text-white/25 text-xs leading-relaxed">
              少しでも固定費を抑えて、好きなことにお金を使ってほしい。<br />
              そのきっかけになれたら嬉しいです。
            </p>
            <p className="text-white/15 text-xs mt-2 font-bold">— totti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
