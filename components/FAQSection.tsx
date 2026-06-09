"use client";

import { useState } from "react";

const faqs = [
  {
    q: "特典を受け取るために必要な条件は？",
    a: "3つの条件があります。①このページの紹介リンクから楽天IDでログインして申し込む（申し込み後7日以内のログインでもOK）②Rakuten最強プランの利用を開始する③Rakuten Linkアプリを使って発信で10秒以上電話をかける——この3つをすべて「ログインした月の翌々月末日23:59まで」に達成する必要があります。",
  },
  {
    q: "ポイントはいつ、いくら付与される？",
    a: "条件を達成した月（ログイン月）の4・5・6ヶ月後に3回に分けて付与されます。MNP乗り換えの場合：4,000P→5,000P→5,000Pの合計14,000P。新規申し込みの場合：3,000P→4,000P→4,000Pの合計11,000P。ポイントはすべて期間限定ポイントで、付与日から6ヶ月が有効期限です。",
  },
  {
    q: "紹介リンクを踏まずに申し込んでしまった場合は？",
    a: "申し込み日から7日以内であれば、あとからこのページの紹介リンクを踏んでログインすることで対象になります。8日以上経過した場合は残念ながら対象外です。申し込み前にリンクを踏んでおくのが確実です。",
  },
  {
    q: "過去に楽天モバイルを使ったことがあっても対象になる？",
    a: "なります。これが通常の友達紹介キャンペーンとの大きな違いのひとつです。楽天従業員紹介（キャンペーンコード：2162）は、過去に契約歴がある方の再契約、2回線目以降の契約も特典対象です。",
  },
  {
    q: "何回まで申し込みに使える？",
    a: "おひとり様最大5回線まで適用可能です（2024年6月1日以降の申し込み分）。家族の回線をまとめて乗り換える際にも使えます。",
  },
  {
    q: "Rakuten Linkの10秒通話達成を確認する方法は？",
    a: "「my楽天モバイル」にログインし、[利用状況]画面から[通話]タブ→[Rakuten Link（国内）]の通話時間を確認できます。なお0570などの他社接続サービスへの発信は対象外です。",
  },
  {
    q: "電波・速度は実際どう？",
    a: "楽天自社回線のカバー率は2025年以降98%超。東京・大阪などの都市部や主要スタジアム・競馬場周辺では問題なく使えます。エリア外ではau回線（パートナー回線）に自動切り替えされます。",
  },
  {
    q: "違約金・縛りはある？",
    a: "一切ありません。契約期間の縛りも違約金もなく、翌月解約も可能です。「とりあえず試してみる」という使い方もできます。",
  },
  {
    q: "なぜtottiはこのページを作ったの？",
    a: "正直に言います。私が紹介するとポイントが貰えるのは事実です。それと同時に、月3,168円で無制限使えるのは本当にコスパ最強だと思っていて、純粋に知ってほしくてこのページを作りました。強制・勧誘するつもりは一切ありません。「合いそうだな」と思った方にだけ申し込んでもらえれば嬉しいです。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
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
        <div className="px-6 pb-5 pl-14 text-[#454745] text-sm leading-relaxed border-t border-[#d0d4cf]">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 px-5 bg-[#e8ebe6]">
      <div className="max-w-2xl mx-auto">

        <div className="mb-14 text-center">
          <span className="text-[#868685] text-[11px] font-semibold tracking-[0.15em] uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0e0f0c] mt-3">
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
