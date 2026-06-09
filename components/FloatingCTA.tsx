"use client";

import { useEffect, useState } from "react";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div
        className="px-5 py-3 border-t border-white/[0.07]"
        style={{ background: "rgba(14,15,12,0.92)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-sm mx-auto flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white/35 text-[10px] truncate font-medium">楽天従業員紹介 限定キャンペーン</p>
            <p className="text-white text-xs font-bold">MNP乗り換えで<span className="text-rakuten-red"> 14,000P </span>還元</p>
          </div>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-rakuten-red hover:bg-rakuten-crimson text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            申し込む →
          </a>
        </div>
      </div>
    </div>
  );
}
