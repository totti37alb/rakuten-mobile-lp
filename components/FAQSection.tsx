"use client";

import { useState } from "react";

const faqs = [
  {
    q: "紹介リンクを踏まないと特典はもらえない？",
    a: "はい、このページの紹介リンク経由で申し込んだ場合のみ特典ポイントが付与されます。楽天モバイルの公式サイトから直接申し込んだ場合は対象外です。必ずこのページのリンクから手続きしてください。",
  },
  {
    q: "電波・速度は実際どう？",
    a: "楽天自社回線のカバー率は2025年以降98%を超えています。東京・大阪などの都市部や主要スタジアム・競馬場周辺では問題なく使えます。エリア外ではau回線（パートナー回線）に自動切り替えされるので繋がらない場面はほぼありません。",
  },
  {
    q: "今のスマホをそのまま使える？",
    a: "SIMロック解除済みの端末であれば基本的に使えます。iPhoneはiPhone 6s以降に対応。Androidも主要機種はほぼ対応済みです。公式サイトの「動作確認済み製品」で事前確認することをおすすめします。",
  },
  {
    q: "電話番号は変わる？",
    a: "MNP（番号ポータビリティ）を使えば今の番号のまま乗り換えできます。申し込み時に「他社から乗り換え（MNP）」を選択し、現在の携帯会社でMNP予約番号を取得しておきましょう。",
  },
  {
    q: "違約金・縛りはある？",
    a: "一切ありません。契約期間の縛りも違約金もなく、翌月解約することも可能です。「とりあえず試してみる」という使い方もできます。",
  },
  {
    q: "紹介した自分にもメリットはある？",
    a: "あります。紹介した方にも最大7,000ポイント（キャンペーン時期によって変動）が付与されます。何人紹介しても累積でポイントが貰えるので、友人・家族への紹介はとてもお得です。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? "bg-gray-50" : "bg-white"} transition-colors duration-200`}>
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-start gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-4">
          <span className="text-rakuten-red font-black text-sm mt-0.5 flex-shrink-0">
            Q{String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-bold text-gray-900 text-sm md:text-base leading-relaxed">{q}</span>
        </div>
        <span
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 mt-0.5 ${open ? "rotate-45" : ""}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pl-14 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rakuten-red text-sm font-bold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
            よくある質問
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-200 divide-y divide-gray-100 shadow-sm">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
