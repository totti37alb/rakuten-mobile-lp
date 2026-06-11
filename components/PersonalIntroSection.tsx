import Image from "next/image";

const X_URL = "https://x.com/totti37alb";

export default function PersonalIntroSection() {
  return (
    <section className="bg-white">

      {/* ── 上部：名前 + プロフィール ── */}
      <div className="max-w-4xl mx-auto px-5 pt-20 pb-0">

        {/* ラベル */}
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#868685] mb-6">
          Who is totti?
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-14">

          {/* 左：名前 + 肩書き */}
          <div className="flex-1">
            <h2
              className="font-black text-[#0e0f0c] leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(64px, 14vw, 112px)" }}
            >
              totti
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#0e0f0c] text-white text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
                楽天グループ社員
              </span>
              <span className="text-[#868685] text-sm">30歳</span>
            </div>
          </div>

          {/* 右：アバター */}
          <div className="flex items-end gap-4 md:pb-2">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-[#e0e3de] flex-shrink-0">
              <Image
                src="/totti.png"
                alt="totti"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pb-1">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-[#868685] hover:text-[#0e0f0c] transition-colors font-medium"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.865L2 2.25h6.952l4.258 5.634L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
                @totti37alb
              </a>
              <p className="text-[#868685] text-[11px] mt-1">サッカークラブのサポーター歴25年</p>
              <p className="text-[#868685] text-[11px]">週末は競馬AI開発</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 区切り線 ── */}
      <div className="max-w-4xl mx-auto px-5 mt-10">
        <div className="h-px bg-[#e8ebe6]" />
      </div>

      {/* ── 下部：本文 + プルクォート ── */}
      <div className="max-w-4xl mx-auto px-5 pt-10 pb-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          {/* 左：本文 */}
          <div>
            <p className="text-[#454745] text-sm leading-[1.9] mb-4">
              サッカークラブを25年応援している楽天グループの社員です。週末は競馬AIを作って遊んでいます。
            </p>
            <p className="text-[#454745] text-sm leading-[1.9]">
              好きなクラブを応援し続けるために、まず固定費を見直しました。スマホ代を月3,278円（税込）に抑えて、好きなことを長く続ける——自分にとってはその選択が楽天モバイルでした。
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["固定費から始めた節約", "週末は競馬AI開発", "サッカー観戦25年"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-3 py-1 rounded-full border border-[#e0e3de] text-[#868685] bg-[#e8ebe6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 右：プルクォート */}
          <div className="flex items-start">
            <div className="border-l-2 border-[#CC0000] pl-6">
              <p className="text-[#0e0f0c] text-lg md:text-xl font-bold leading-[1.65] tracking-tight">
                自分で使って納得したことだけを、このページに書いています。
              </p>
              <p className="text-[#868685] text-sm leading-relaxed mt-4">
                合う人・合わない人、どちらも正直に書きます。強制・勧誘するつもりは一切ありません。
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
