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
      style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #2a0000 100%)" }}
    >
      {/* グロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(204,0,0,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-20">

        {/* ヘッダー */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 mb-6">
            <span className="w-4 h-4 rounded-full bg-rakuten-red flex items-center justify-center">
              <span className="text-white text-[8px] font-black">R</span>
            </span>
            <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
              楽天従業員紹介 限定特典
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            これ、普通の紹介リンクより<br />お得です。
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            楽天従業員からの紹介は通常の友達紹介とは別キャンペーン（コード：2162）。<br />
            2回線目・再契約の方も対象になるなど、条件がより広い。
          </p>
        </div>

        {/* ポイント比較カード */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          {pointBreakdown.map((p) => (
            <div
              key={p.label}
              className={`rounded-2xl p-5 border ${
                p.highlight
                  ? "bg-rakuten-red/15 border-rakuten-red/40"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <p className="text-white/50 text-xs mb-1">{p.label}</p>
              <p className={`text-3xl font-black mb-4 ${p.highlight ? "text-rakuten-red" : "text-white"}`}>
                {p.total}
                <span className="text-base font-bold text-white/60"> P</span>
              </p>
              <div className="space-y-1.5 border-t border-white/10 pt-3">
                {p.schedule.map((s) => (
                  <div key={s.month} className="flex justify-between items-center">
                    <span className="text-white/40 text-[11px]">{s.month}</span>
                    <span className={`text-xs font-bold ${p.highlight ? "text-rakuten-red" : "text-white/70"}`}>
                      {s.point}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-[10px] mt-3">※ 期間限定P、有効期限6ヶ月</p>
            </div>
          ))}
        </div>

        {/* キャンペーン参加方法 3ステップ */}
        <div className="mb-12">
          <p className="text-white/40 text-xs font-bold uppercase tracking-wider text-center mb-6">
            キャンペーン参加方法
          </p>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rakuten-red text-white text-sm font-black flex items-center justify-center">
                      {step.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm leading-snug mb-2">{step.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{step.detail}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rakuten-red flex-shrink-0" />
                        <span className="text-white/50 text-[11px] font-medium">{step.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span className="text-white/20 text-sm">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 従業員紹介ならではの差別化 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-10">
          <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4 text-center">
            通常の友達紹介にはない、従業員紹介だけのメリット
          </p>
          <div className="space-y-2.5">
            {diffs.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-rakuten-red text-sm mt-0.5">✓</span>
                <p className="text-white/70 text-sm leading-relaxed">{d}</p>
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
            className="inline-flex items-center gap-3 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl transition-all duration-200 hover:-translate-y-0.5 w-full max-w-sm justify-center"
          >
            紹介リンクから申し込む →
          </a>
          <p className="mt-3 text-white/30 text-xs">
            ※ 通常ページからの申し込みは特典対象外です
          </p>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs leading-relaxed">
              少しでも固定費を抑えて、好きなことにお金を使ってほしい。<br />
              そのきっかけになれたら嬉しいです。
            </p>
            <p className="text-white/20 text-xs mt-2 font-bold">— totti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
