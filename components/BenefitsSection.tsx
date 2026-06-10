const benefits = [
  {
    num: "01",
    label: "料金",
    title: "月額最安 1,068円〜",
    description: "3GBまで1,068円、無制限でも3,278円。データ使用量に応じた自動調整で無駄ゼロ。",
  },
  {
    num: "02",
    label: "データ",
    title: "データ無制限",
    description: "月3,278円でギガ上限なし。DAZN・競馬中継・SNSもストレスフリーで使い放題。",
  },
  {
    num: "03",
    label: "ポイント",
    title: "楽天ポイント還元",
    description: "通信費が楽天市場のポイント倍率を底上げ。SPUで最大+4倍になりお買い物もお得に。",
  },
  {
    num: "04",
    label: "通話",
    title: "国内通話かけ放題",
    description: "Rakuten Linkアプリ経由で国内通話が無料。毎月の電話代を丸ごと節約できる。",
  },
  {
    num: "05",
    label: "観戦",
    title: "競馬・サッカー観戦に最適",
    description: "スタジアム・競馬場でのライブ視聴、リアルタイム投稿もギガを気にせず楽しめる。",
  },
  {
    num: "06",
    label: "縛りなし",
    title: "いつでも解約・乗り換えOK",
    description: "違約金・契約期間の縛り一切なし。合わなければすぐ他社に戻せる安心設計。",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#e8ebe6] py-24 px-5">
      <div className="max-w-4xl mx-auto">

        {/* ヘッダー */}
        <div className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#868685] mb-4">
            Why Rakuten Mobile
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2
              className="font-black text-[#0e0f0c] leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(44px, 10vw, 80px)" }}
            >
              私が選んだ<br />6つの理由
            </h2>
            <p className="text-[#868685] text-sm font-medium md:pb-2">by totti</p>
          </div>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d0d4cf] border border-[#d0d4cf] rounded-2xl overflow-hidden">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="group bg-white p-7 hover:bg-[#fafafa] transition-colors duration-150 relative overflow-hidden"
            >
              {/* 大きい背景数字 */}
              <span
                className="absolute -right-2 -top-3 font-black text-[#e8ebe6] select-none pointer-events-none leading-none group-hover:text-[#e0e3de] transition-colors"
                style={{ fontSize: "88px" }}
                aria-hidden
              >
                {b.num}
              </span>

              {/* コンテンツ */}
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase text-[#868685] bg-[#e8ebe6] px-2.5 py-1 rounded-full mb-4">
                  {b.label}
                </span>
                <h3 className="font-bold text-[#0e0f0c] text-base leading-snug mb-2">
                  {b.title}
                </h3>
                <p className="text-[#868685] text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
