"use client";

import { useEffect, useState } from "react";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクション（400px）を過ぎたら表示
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
        <div className="max-w-sm mx-auto">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-rakuten-red text-white font-extrabold py-4 rounded-full text-center text-lg shadow-lg hover:bg-rakuten-lightred transition-all duration-200 hover:scale-105 active:scale-95"
          >
            🎁 紹介リンクから申し込む →
          </a>
          <p className="text-center text-xs text-gray-400 mt-1">
            このリンク経由で特典ポイントGET
          </p>
        </div>
      </div>
    </div>
  );
}
