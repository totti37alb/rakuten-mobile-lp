const benefits = [
  {
    num: "01",
    label: "料金",
    title: "月額最安 1,078円〜",
    description: "3GBまで1,078円、無制限でも3,278円。データ使用量に応じた自動調整で無駄ゼロ。",
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
    <section className="py-24 px-5 bg-[#e8ebe6]">
      <div className="max-w-4xl mx-auto">

        {/* セクションヘッダー */}
        <div className="mb-14 text-center">
          <span className="text-[#868685] text-[11px] font-semibold tracking-[0.15em] uppercase">
            Why Rakuten Mobile
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0e0f0c] mt-3 leading-tight">
            私が選んだ<br className="md:hidden" />6つの理由
          </h2>
          <p className="text-[#868685] text-sm mt-2 font-medium">by totti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative bg-white rounded-2xl p-6 border border-[#d0d4cf]/60 hover:border-rakuten-red/30 hover:shadow-md transition-all duration-200"
            >
              {/* 番号 */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-[#e8ebe6] font-black text-4xl leading-none select-none group-hover:text-rakuten-red/10 transition-colors">
                  {b.num}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase bg-[#e8ebe6] text-[#868685] px-2.5 py-1 rounded-full">
                  {b.label}
                </span>
              </div>
              <h3 className="font-bold text-[#0e0f0c] text-base mb-2 leading-snug">{b.title}</h3>
              <p className="text-[#868685] text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
