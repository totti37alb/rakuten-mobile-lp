import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

const CAMPAIGN_URL =
  "https://network.mobile.rakuten.co.jp/campaign/referral-application-employee/";

const steps = [
  {
    num: "01",
    title: "紹介リンクから楽天IDでログインして申し込む",
    detail: "このページの紹介リンクから楽天IDでログインし、Rakuten最強プランに申し込みます。お申し込み前のログインが条件です。",
  },
  {
    num: "02",
    title: "Rakuten最強プランの利用を開始する",
    detail: "SIM/eSIMの開通を完了させ、利用を開始します。",
  },
  {
    num: "03",
    title: "Rakuten Linkアプリを利用する",
    detail: "アプリをダウンロードして発信通話します。達成期限など詳細条件は公式キャンペーンページをご確認ください。",
  },
];

const pointBreakdown = [
  {
    label: "MNP乗り換え",
    total: 14000,
    highlight: true,
  },
  {
    label: "新規申し込み",
    total: 11000,
    highlight: false,
  },
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
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-white/[0.12] rounded-full px-4 py-1.5 bg-white/[0.04] mb-6">
            <span className="text-white font-black text-xs">totti<span className="text-rakuten-red">.</span></span>
            <span className="text-white/50 text-[10px] font-semibold tracking-[0.12em] uppercase">
              楽天従業員紹介 限定特典
            </span>
          </div>
          <h2
            className="font-black leading-[0.95] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(36px, 8vw, 64px)" }}
          >
            楽天社員からの、<br />従業員紹介です。
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
            楽天従業員からの紹介は通常の友達紹介とは別キャンペーン（コード：2162）です。
          </p>
        </div>
        </Reveal>

        {/* ポイント比較カード */}
        <div className="grid grid-cols-2 gap-3 mb-14">
          {pointBreakdown.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.1}
              className={`rounded-2xl p-5 border ${
                p.highlight
                  ? "bg-rakuten-red/[0.12] border-rakuten-red/30"
                  : "bg-white/[0.04] border-white/[0.08]"
              }`}
            >
              <p className="text-white/40 text-[11px] mb-1 font-medium">{p.label}</p>
              <p className={`text-3xl font-black ${p.highlight ? "text-rakuten-red" : "text-white"}`}>
                <CountUp value={p.total} />
                <span className="text-sm font-semibold text-white/40"> P</span>
              </p>
            </Reveal>
          ))}
        </div>

        {/* 必須注釈 */}
        <p className="text-white/30 text-[11px] leading-relaxed text-center -mt-10 mb-14">
          ※お申し込み前の紹介キャンペーンURLへのログインやサービス利用開始等条件あり。
          <br />
          ※ポイントは、紹介ログイン月の4カ月後から分割付与。
        </p>

        {/* 3ステップ */}
        <Reveal>
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
        </Reveal>

        {/* 詳細条件への誘導 */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mb-12 text-center">
          <p className="text-white/60 text-sm leading-relaxed">
            対象条件・達成期限・ポイント付与などの詳細は、
            <br className="hidden md:block" />
            <a
              href={CAMPAIGN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-white/80 hover:text-rakuten-red transition-colors"
            >
              楽天モバイル公式キャンペーンページ（コード：2162）
            </a>
            でご確認ください。
          </p>
        </div>

        {/* CTA */}
        <Reveal>
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
              少しでも固定費を抑えて、好きなことにお金を使ってほし�