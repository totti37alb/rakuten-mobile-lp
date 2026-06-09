"use client";

import { useState } from "react";

const faqs: { q: string; a: string[] }[] = [
  {
    q: "特典を受け取るために必要な条件は？",
    a: [
      "条件は3つあります。",
      "① このページの紹介リンクから楽天IDでログインして申し込む\n② Rakuten最強プランの利用を開始する\n③ Rakuten Linkアプリから発信で10秒以上通話する",
      "この3つすべてを「ログインした月の翌々月末日23:59」までに達成する必要があります。申し込み後7日以内のログインでも対象になります。",
    ],
  },
  {
    q: "ポイントはいつ、いくら付与される？",
    a: [
      "条件を達成した月（ログイン月）の4・5・6ヶ月後に、3回に分けて付与されます。",
      "MNP乗り換えの場合：4,000P → 5,000P → 5,000P（合計14,000P）\n新規申し込みの場合：3,000P → 4,000P → 4,000P（合計11,000P）",
      "すべて期間限定ポイントで、付与日から6ヶ月が有効期限です。",
    ],
  },
  {
    q: "紹介リンクを踏まずに申し込んでしまった場合は？",
    a: [
      "申し込み日から7日以内であれば、あとからこのページのリンクを踏んでログインすることで対象になります。",
      "8日以上経過すると残念ながら対象外。申し込み前にリンクを踏んでおくのが確実です。",
    ],
  },
  {
    q: "過去に楽天モバイルを使ったことがあっても対象になる？",
    a: [
      "なります。これが通常の友達紹介との大きな違いです。",
      "楽天従業員紹介（キャンペーンコード：2162）は、過去に契約歴がある方の再契約や2回線目以降の契約も対象。「前に使っていたから無理かな」と思っていた方も、ぜひ確認してみてください。",
    ],
  },
  {
    q: "何回まで申し込みに使える？",
    a: [
      "おひとり様最大5回線まで適用可能です（2024年6月1日以降の申し込み分）。",
      "家族の回線をまとめて乗り換える際にもそのまま使えます。",
    ],
  },
  {
    q: "Rakuten Linkの10秒通話達成を確認する方法は？",
    a: [
      "「my楽天モバイル」にログインし、[利用状況]→[通話]タブ→[Rakuten Link（国内）]の通話時間で確認できます。",
      "0570などの他社接続サービスへの発信は対象外です。友人・知人への10秒以上の発信で達成してください。",
    ],
  },
  {
    q: "電波・速度は実際どう？",
    a: [
      "人口カバー率は99.9%、プラチナバンド（700MHz帯）の展開も進んでいます。東京・大阪の都市部や主要スタジアム・競馬場周辺では問題なく使えます。",
      "速度は大手3キャリアより見劣りする部分もありますが、動画視聴・SNSの日常使いには十分なレベルです。不安な方はデュアルSIMでサブ回線として試すのもひとつの手です。",
    ],
  },
  {
    q: "違約金・縛りはある？",
    a: [
      "一切ありません。契約期間の縛りも違約金もなく、翌月解約も可能です。",
      "「とりあえず試してみる」という感覚で始められるのは、楽天モバイルの大きなメリットだと思っています。",
    ],
  },
  {
    q: "なぜtottiはこのページを作ったの？",
    a: [
      "正直に言います。私が紹介するとポイントが貰えるのは事実です。",
      "それと同時に、月3,278円でデータ無制限・通話無料というのは本当にコスパが高いと思っていて、純粋に知ってほしくて作りました。強制・勧誘するつもりは一切ありません。",
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
