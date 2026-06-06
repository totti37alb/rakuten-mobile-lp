const benefits = [
  {
    icon: "¥",
    label: "料金",
    title: "月額最安 1,078円〜",
    description: "3GBまで1,078円、無制限でも3,278円。データ使用量に応じた自動調整で無駄ゼロ。",
  },
  {
    icon: "∞",
    label: "データ",
    title: "データ無制限",
    description: "月3,278円でギガ上限なし。DAZN・競馬中継・SNSもストレスフリーで使い放題。",
  },
  {
    icon: "P",
    label: "ポイント",
    title: "楽天ポイント還元",
    description: "通信費が楽天市場のポイント倍率を底上げ。SPUで最大+4倍になりお買い物もお得に。",
  },
  {
    icon: "☎",
    label: "通話",
    title: "国内通話かけ放題",
    description: "Rakuten Linkアプリ経由で国内通話が無料。毎月の電話代を丸ごと節約できる。",
  },
  {
    icon: "🏟",
    label: "観戦",
    title: "競馬・サッカー観戦に最適",
    description: "スタジアム・競馬場でのライブ視聴、リアルタイム投稿もギガを気にせず楽しめる。",
  },
  {
    icon: "↩",
    label: "縛りなし",
    title: "いつでも解約・乗り換えOK",
    description: "違約金・契約期間の縛り一切なし。合わなければすぐ他社に戻せる安心設計。",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <p className="text-rakuten-red text-sm font-bold tracking-widest uppercase mb-3">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
            楽天モバイルを選ぶ理由
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-rakuten-red/30 hover:shadow-lg transition-all duration-200"
            >
              {/* アイコン */}
              <div className="w-11 h-11 rounded-xl bg-rakuten-red/8 flex items-center justify-center mb-4 group-hover:bg-rakuten-red/15 transition-colors">
                <span className="text-rakuten-red font-black text-lg">{b.icon}</span>
              </div>
              {/* ラベル */}
              <p className="text-xs font-bold text-rakuten-red tracking-wider uppercase mb-1.5">{b.label}</p>
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
