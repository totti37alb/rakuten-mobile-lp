import Image from "next/image";

const REFERRAL_URL = "https://r10.to/hkhSbQ";
const X_URL = "https://x.com/totti37alb";

export default function PersonalIntroSection() {
  return (
    <section className="py-16 px-4 bg-white border-y border-gray-100">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <p className="text-rakuten-red text-xs font-bold tracking-widest uppercase text-center mb-8">
          About
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* アバター */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm">
              <Image
                src="/totti.png"
                alt="totti アバター"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.865L2 2.25h6.952l4.258 5.634L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
              @totti37alb
            </a>
          </div>

          {/* テキスト */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
              <span className="font-black text-gray-900 text-lg">totti</span>
              <span className="text-xs bg-rakuten-red/10 text-rakuten-red font-bold px-2 py-0.5 rounded-md">
                楽天グループ社員
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              アルビレックス新潟を25年応援している楽天グループの社員（30歳）です。
              週末は競馬AIを作って遊んでいます。
            </p>

            {/* 吹き出し */}
            <div className="relative bg-gray-50 rounded-2xl rounded-tl-sm p-4 border border-gray-100">
              <p className="text-gray-700 text-sm leading-relaxed">
                アルビを応援し続けるために、まず固定費を見直しました。
                スマホ代を月3,168円に抑えて、好きなクラブを長く応援する。
                自分にとってはその選択が楽天モバイルでした。
                <br /><br />
                <span className="font-bold text-gray-900">
                  自分で使って納得したことだけを、このページに書いています。
                </span>
                合う人・合わない人、どちらも正直に書きます。
              </p>
            </div>

            {/* タグ */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {["アルビレックス新潟サポ25年", "週末は競馬AI開発", "固定費から始めた節約"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
