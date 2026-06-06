import Image from "next/image";

const X_URL = "https://x.com/totti37alb";

export default function PersonalIntroSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-2xl mx-auto">

        {/* セクションラベル */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-[#E5DDD0]" />
          <span className="text-[#C0A890] text-xs font-bold tracking-widest uppercase">
            Who is totti?
          </span>
          <div className="flex-1 h-px bg-[#E5DDD0]" />
        </div>

        {/* カード */}
        <div className="border-2 border-[#E5DDD0] rounded-3xl p-8 bg-white relative">

          {/* STAMPバッジ */}
          <div className="absolute -top-4 right-6 bg-[#1a1a1a] text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full">
            楽天グループ社員
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* アバター */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div
                className="w-24 h-24 rounded-2xl overflow-hidden border-2"
                style={{ borderColor: "#E5DDD0" }}
              >
                <Image
                  src="/totti.png"
                  alt="totti"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[#C0A890] hover:text-[#1a1a1a] transition-colors font-medium"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.865L2 2.25h6.952l4.258 5.634L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
                @totti37alb
              </a>
            </div>

            {/* テキスト */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-black text-gray-900 text-xl mb-1">totti</p>
              <p className="text-[#C0A890] text-xs font-bold tracking-wider mb-4">楽天グループ · 30歳</p>

              {/* 本文 */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                アルビレックス新潟を25年応援している楽天グループの社員です。
                週末は競馬AIを作って遊んでいます。
              </p>

              {/* 吹き出し */}
              <div
                className="relative rounded-2xl rounded-tl-sm p-5 border-2"
                style={{ backgroundColor: "#FAF7F2", borderColor: "#E5DDD0" }}
              >
                {/* 吹き出しの三角 */}
                <div
                  className="absolute -top-2 left-6 w-3 h-3 rotate-45 border-l-2 border-t-2"
                  style={{ backgroundColor: "#FAF7F2", borderColor: "#E5DDD0" }}
                />
                <p className="text-gray-700 text-sm leading-relaxed">
                  アルビを応援し続けるために、まず固定費を見直しました。
                  スマホ代を月3,168円に抑えて、好きなクラブを長く応援する。
                  自分にとってはその選択が楽天モバイルでした。
                </p>
                <p className="text-gray-900 text-sm font-bold mt-3 leading-relaxed">
                  自分で使って納得したことだけを、このページに書いています。
                  合う人・合わない人、どちらも正直に書きます。
                </p>
              </div>

              {/* タグ */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {["アルビレックス新潟サポ25年", "週末は競馬AI開発", "固定費から始めた節約"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{ color: "#C0A890", backgroundColor: "#FAF7F2", borderColor: "#E5DDD0" }}
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
