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
  // CSSアニメーションが translateX(-50%) でループするため、前半・後半が同一になるよう2の倍数で複製する
  const all = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      className={`overflow-hidden py-2.5 border-y ${
        dark
          ? "bg-rakuten-red border-rakuten-crimson"
          : "bg-[#0e0f0c] border-white/[0.07]"
      }`}
    >
      <div className="flex items-center animate-marquee">
        {all.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap text-[11px] font-semibold tracking-[0.12em] uppercase px-6 flex items-center gap-6 ${
              dark ? "text-white/90" : "text-white/50"
            }`}
          >
            {item}
            <span className={`text-[8px] ${dark ? "text-white/40" : "text-white/20"}`}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
