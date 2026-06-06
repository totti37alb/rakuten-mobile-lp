"use client";

import { useState } from "react";

const faqs = [
  {
    q: "特典を受け取るために必要なことは？",
    a: "3つの条件があります。①このページの紹介リンクから楽天IDでログインして申し込む（申し込み後7日以内のログインでもOK）②Rakuten最強プランの利用を開始する③Rakuten Linkアプリを使って10秒以上電話をかける——この3つだけです。条件を達成した月の4ヶ月後から分割でポイントが付与されます。",
  },
  {
    q: "14,000Pは一度にもらえる？",
    a: "分割での付与になります。MNP乗り換えの場合、条件達成月の4ヶ月後・5ヶ月後・6ヶ月後の3回に分けて合計14,000P（4,000P→5,000P→5,000P）が付与されます。ポイントの有効期限は付与日から6ヶ月です。",
  },
  {
    q: "紹介リンクを踏まずに申し込んでしまった場合は？",
    a: "申し込み日から7日以内であれば、あとからこのページの紹介リンクを踏んでログインすることで対象になります。8日以上経過した場合は残念ながら対象外となります。申し込み前にリンクを踏んでおくのが確実です。",
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
    q: "なぜtottiはこのページを作ったの？",
    a: "正直に言います。私（totti）が紹介するとポイントが貰えるのは事実です。ただ、それと同時に月3,168円で無制限使えるのは本当にコスパ最強だと思っていて、周りにも知ってほしくてこのページを作りました。強制・勧誘するつもりは一切ありません。「合いそうだな」と思った方にだけ申し込んでもらえれば嬉しいです。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`transition-colors duration-200 ${open ? "bg-[#FAF7F2]" : "bg-white"}`}
    >
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
        <div className="px-6 pb-5 pl-14 text-gray-600 text-sm leading-relaxed border-t border-[#E5DDD0]">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-[#E5DDD0]" />
            <span className="text-[#C0A890] text-xs font-bold tracking-widest uppercase">FAQ</span>
            <div className="flex-1 h-px bg-[#E5DDD0]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 text-center">
            よくある質問
          </h2>
        </div>
        <div
          className="rounded-2xl overflow-hidden border-2 divide-y shadow-sm"
          style={{ borderColor: "#E5DDD0", divideColor: "#E5DDD0" }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
