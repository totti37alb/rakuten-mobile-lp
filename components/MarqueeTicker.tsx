const DEFAULT_ITEMS = [
  "楽天従業員紹介 限定キャンペーン",
  "MNP乗り換えで 14,000P 還元",
  "楽天グループ社員 totti より",
  "新規申し込みで 11,000P 還元",
  "違約金・縛り一切なし",
  "Rakuten最強プラン 月3,278円で無制限",
];

export default function MarqueeTicker({
  items,
  dark = false,
}: {
  items?: string[];
  dark?: boolean;
}) {
  const tickerItems = items ?? DEFAULT_ITEMS;
  // Triple for seamless loop
  const all = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      className={`overflow-hidden py-3 border-y ${
        dark
          ? "bg-rakuten-red border-rakuten-crimson"
          : "bg-[#1a1a1a] border-[#333]"
      }`}
    >
      <div className="flex items-center animate-marquee">
        {all.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap font-bold text-xs tracking-widest uppercase px-5 flex items-center gap-5 ${
              dark ? "text-white" : "text-white/80"
            }`}
          >
            {item}
            <span className="opacity-30 text-[10px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
