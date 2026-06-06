const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-rakuten-red to-rose-700 text-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          今すぐお得に申し込もう🎉
        </h2>
        <p className="mb-2 opacity-90">
          紹介リンク経由で申し込むだけで
        </p>
        <p className="text-yellow-300 font-bold text-xl mb-8">
          最大7,000ポイント還元！
        </p>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-extrabold py-5 px-10 rounded-full text-xl shadow-2xl hover:bg-yellow-300 transition-all duration-200 hover:scale-105 active:scale-95 w-full max-w-sm"
        >
          この紹介リンクから申し込む →
        </a>
        <p className="mt-4 text-sm opacity-70">
          ※ 通常ページからの申し込みでは特典対象外です
        </p>
      </div>
    </section>
  );
}
