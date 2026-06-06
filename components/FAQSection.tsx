"use client";

import { useState } from "react";

const faqs = [
  {
    q: "紹介リンクから申し込まないと特典はもらえないの？",
    a: "はい、紹介リンクを経由して申し込んだ場合のみ、紹介特典ポイントが付与されます。通常の申し込みページから手続きした場合は対象外となりますのでご注意ください。",
  },
  {
    q: "楽天モバイルって電波は大丈夫？遅くない？",
    a: "2024年以降、楽天の自社回線エリアが大幅に拡大しています。都市部や主要競馬場・サッカースタジアム周辺では十分な速度が出ています。パートナー回線（au回線）も使えるエリアではさらに安定しています。",
  },
  {
    q: "今使っているスマホはそのまま使える？",
    a: "SIMロック解除済みのスマートフォンであれば、楽天モバイルのSIMを挿すだけで使えます。iPhoneも対応しています（一部古い機種は除く）。",
  },
  {
    q: "乗り換えると電話番号は変わる？",
    a: "MNP（番号ポータビリティ）を利用すれば、今使っている電話番号のまま乗り換えられます。申し込み時に「MNP転入」を選択してください。",
  },
  {
    q: "縛りや違約金はある？",
    a: "契約期間の縛りはなく、違約金もかかりません。月単位での契約なので、合わなければいつでも解約・乗り換えができます。",
  },
  {
    q: "紹介した側にもメリットはある？",
    a: "はい、紹介した方にも5,000〜7,000ポイント（キャンペーンによって変動）が付与されます。友人や家族への紹介でお互いにお得になります。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full text-left py-4 px-2 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-800">{q}</span>
        <span className="text-rakuten-red text-xl flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-2 pb-4 text-gray-600 text-sm leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">よくある質問</h2>
        <div className="card p-0 overflow-hidden divide-y divide-gray-200">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
