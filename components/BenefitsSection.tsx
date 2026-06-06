const benefits = [
  {
    emoji: "💰",
    title: "月額最安0円〜",
    description:
      "使ったデータ量に応じた3段階料金。3GBまでなら月1,078円、無制限でも3,278円。他社と比べてみてください。",
  },
  {
    emoji: "📡",
    title: "データ無制限",
    description:
      "月3,278円でデータ使い放題。競馬中継・サッカーのDAZN視聴もギガ気にせず楽しめます。",
  },
  {
    emoji: "🎁",
    title: "楽天ポイント還元",
    description:
      "申し込みでポイント還元。楽天市場でのお買い物にも使えるポイントがザクザク貯まります。",
  },
  {
    emoji: "📞",
    title: "国内通話無料",
    description:
      "Rakuten Linkアプリを使えば国内通話かけ放題（無料）。電話代の節約にもなります。",
  },
  {
    emoji: "🏟️",
    title: "競馬・サッカー観戦にも",
    description:
      "スタジアムや競馬場でもデータ無制限なら安心。SNS投稿・ライブ配信視聴もストレスなし。",
  },
  {
    emoji: "🔄",
    title: "いつでも解約OK",
    description:
      "契約期間の縛りなし、違約金なし。試してみて合わなければすぐ解約できる安心設計。",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">
          <span className="text-rakuten-red">楽天モバイルのメリット</span>まとめ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="card flex gap-4 items-start">
              <span className="text-3xl flex-shrink-0">{b.emoji}</span>
              <div>
                <h3 className="font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
