"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/faq";
import Reveal from "@/components/motion/Reveal";

function FAQItem({ q, a, index }: { q: string; a: string[]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`transition-colors duration-200 ${open ? "bg-[#e8ebe6]" : "bg-white"}`}>
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-start gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="text-rakuten-red font-black text-xs tracking-wider mt-0.5 flex-shrink-0">
            Q{String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-[#0e0f0c] text-sm md:text-base leading-relaxed">{q}</span>
        </div>
        <motion.span
          className="text-[#868685] flex-shrink-0 mt-0.5"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-14 border-t border-[#d0d4cf]">
              <div className="pt-4 space-y-3">
                {a.map((para, i) => (
                  <p
                    key={i}
                    className="text-[#454745] text-sm leading-[1.85] whitespace-pre-line"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 px-5 bg-[#e8ebe6]">
      <div className="max-w-2xl mx-auto">

        <Reveal>
          <div className="mb-14">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#868685] mb-4">FAQ</p>
            <h2
              className="font-black text-[#0e0f0c] leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(44px, 10vw, 80px)" }}
            >
              よくある質問
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-[#d0d4cf]/60 divide-y divide-[#d0d4cf] shadow-sm">
            {faqs.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </Reveal>

        <p className="text-center text-[#868685] text-xs mt-6 leading-relaxed">
          ※ 詳細な条件は{" "}
          <a
            href="https://network.mobile.rakuten.co.jp/campaign/referral-application-employee/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-rakuten-red transition-colors"
          >
            楽天モバイル公式キャンペーンページ（コード：2162）
          </a>{" "}
          でご確認ください。
        </p>
      </div>
    </section>
  );
}
