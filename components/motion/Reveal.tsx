"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 遅延（秒） */
  delay?: number;
  /** 移動距離（px） */
  y?: number;
  /** 表示時間（秒） */
  duration?: number;
  className?: string;
};

/**
 * スクロールで画面に入ったときにフェードイン+スライドアップするラッパー。
 * prefers-reduced-motion 設定時はアニメーションを無効化。
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
