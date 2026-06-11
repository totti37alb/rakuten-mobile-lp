"use client";

import { useState } from "react";

const faqs: { q: string; a: string[] }[] = [
  {
    q: "特典を受け取るために必要な条件は？",
    a: [
      "お申し込み前の紹介キャンペーンURLへのログインや、サービス利用開始等の条件があります。",
      "達成期限を含む詳細な条件は、楽天モバイル公式キャンペーンページ（コード：2162）でご確認ください。",
    ],
  },
  {
    q: "ポイントはいつ付与される？",
    a: [
      "ポイントは、紹介ログイン月の4カ月後から分割で付与されます。",
      "付与スケジュールなどの詳細は、公式キャンペーンページでご確認ください。",
    ],
  },
  {
    q: "過去に楽天モバイルを使ったことがあっても対象になる？",
    a: [
      "従業員紹介（キャンペーンコード：2162）は、通常の友達紹介とは対象範囲が異なるキャンペーンです。",
      "ご自身が対象かどうかは、公式キャンペーンページの条件をご確認ください。",
    ],
  },
  {
    q: "電波・エリアは実際どう？",
    a: [
      "楽天モバイルはプラチナバンドの商用サービスを開始しており、プラチナバンドは主要都市部から順次拡大予定です。",
      "お住まいの地域や生活圏の対応状況は、公式サイトのサービスエリアマップで確認できます。契約前に一度チェックしておくのがおすすめです。",
    ],
  },
  {
    q: "違約金・縛りはある？",
    a: [
      "契約期間の縛りや違約金はありません。",
      "「まずは試してみる」という感覚で始められるのは、楽天モバイルの大きな魅力だと思っています。",
    ],
  },
  {
    q: "なぜtottiはこのページを作ったの？",
    a: [
      "このページは、楽天グループの従業員紹介プログラムの一環として、私tottiが個人で作成したものです。",
      "月3,278円（税込）でデータ無制限・国内通話かけ放題（Rakuten Linkアプリ使用時）というのは本当にコスパが高いと思っていて、純粋に知ってほしくて作りました。強制・勧誘するつもりは一切ありません。",
      "「合いそうだな」と思った方だけ申し込んでもらえれば嬉しいです。",
    ],
  },
];

function FAQItem({ q, a, index }: { q: string; a: string[]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`transition-colors duration-200 ${open ? "bg-[#e8ebe6]" : "bg-white"}`}>
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-start gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-4">
          <span className="text-rakuten-red font-black text-xs tracking-wider mt-0.5 flex-shrink-0">
            Q{String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-[#0e0f0c] text-sm md:text-base leading-relaxed">{q}</span>
        </div>
        <span
          className={`text-[#868685] flex-shrink-0 transition-transform duration-200 mt-0.5 ${open ? "rotate-45" : ""}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pl-14 border-t border-[#d0d4cf]">
          <div className="pt-4 space-y-3">
            {a.map((para, i) => (
              <p
                key={i}
                className="text-[#454745] text-sm leading-[1.85] whitespace-pre-line"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 px-5 bg-[#e8ebe6]">
      <div className="max-w-2xl mx-auto">

        <div className="mb-14">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#868685] mb-4">FAQ</p>
          <h2
            className="font-black text-[#0e0f0c] leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: "clamp(44px, 10vw, 80px)" }}
          >
            よくある質問
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#d0d4cf]/60 divide-y divide-[#d0d4cf] shadow-sm">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        <p className="text-center text-[#868685] text-xs mt-6 leading-relaxed">
          ※ 詳細な条件は{" "}
          <a
            href="https://network.mobile.rakuten.co.jp/campaign/referral-application-employee/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-rakuten-red transition-colors"
          >
            楽天モバイル公式キャンペーンページ（コード：2162）
          </a>{" "}
          でご確認ください。
        </p>
      </div>
    </section>
  );
}
