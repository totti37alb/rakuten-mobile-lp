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
    <section className="py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-4xl mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-[#E5DDD0]" />
            <span className="text-[#C0A890] text-xs font-bold tracking-widest uppercase">
              Why Rakuten Mobile
            </span>
            <div className="flex-1 h-px bg-[#E5DDD0]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 text-center">
            私が選んだ6つの理由
          </h2>
          <p className="text-center text-[#C0A890] text-sm mt-2 font-medium">by totti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative bg-white border-2 rounded-2xl p-6 hover:border-rakuten-red/40 hover:shadow-lg transition-all duration-200"
              style={{ borderColor: "#E5DDD0" }}
            >
              {/* 番号バッジ */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-[#E5DDD0] font-black text-3xl leading-none group-hover:text-rakuten-red/20 transition-colors">
                  {b.num}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#FAF7F2] border border-[#E5DDD0] text-[#C0A890] px-2 py-0.5 rounded-full">
                  {b.label}
                </span>
              </div>
              {/* タイトル */}
              <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">{b.title}</h3>
              {/* 説明 */}
              <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
