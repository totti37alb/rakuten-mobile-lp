import Image from "next/image";

const X_URL = "https://x.com/totti37alb";

export default function PersonalIntroSection() {
  return (
    <section className="py-24 px-5 bg-[#e8ebe6]">
      <div className="max-w-2xl mx-auto">

        {/* セクションラベル */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#d0d4cf]" />
          <span className="text-[#868685] text-[11px] font-semibold tracking-[0.15em] uppercase">
            Who is totti?
          </span>
          <div className="flex-1 h-px bg-[#d0d4cf]" />
        </div>

        {/* カード */}
        <div className="bg-white rounded-3xl p-8 md:p-10 relative shadow-sm border border-[#d0d4cf]/60">

          {/* バッジ */}
          <div className="absolute -top-3.5 right-7 bg-[#0e0f0c] text-white text-[10px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full">
            楽天グループ社員
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* アバター */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2.5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#d0d4cf]">
                <Image
                  src="/totti.png"
                  alt="totti"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
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
            </div>

            {/* テキスト */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-black text-[#0e0f0c] text-2xl mb-0.5 tracking-tight">totti</p>
              <p className="text-[#868685] text-xs font-medium tracking-wide mb-5">楽天グループ · 30歳</p>

              <p className="text-[#454745] text-sm leading-relaxed mb-5">
                アルビレックス新潟を25年応援している楽天グループの社員です。
                週末は競馬AIを作って遊んでいます。
              </p>

              {/* 吹き出し */}
              <div className="relative rounded-2xl rounded-tl-sm p-5 bg-[#e8ebe6] border border-[#d0d4cf]">
                <div
                  className="absolute -top-[9px] left-6 w-4 h-4 rotate-45 bg-[#e8ebe6] border-l border-t border-[#d0d4cf]"
                />
                <p className="text-[#454745] text-sm leading-relaxed">
                  アルビを応援し続けるために、まず固定費を見直しました。
                  スマホ代を月3,168円に抑えて、好きなクラブを長く応援する。
                  自分にとってはその選択が楽天モバイルでした。
                </p>
                <p className="text-[#0e0f0c] text-sm font-bold mt-3 leading-relaxed">
                  自分で使って納得したことだけを、このページに書いています。
                  合う人・合わない人、どちらも正直に書きます。
                </p>
              </div>

              {/* タグ */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5">
                {["アルビレックス新潟サポ25年", "週末は競馬AI開発", "固定費から始めた節約"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 rounded-full border border-[#d0d4cf] text-[#868685] bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
