import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  AUTHOR,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "楽天モバイル",
    "従業員紹介",
    "従業員紹介キャンペーン",
    "MNP",
    "乗り換え",
    "14000ポイント",
    "紹介コード",
    "Rakuten最強プラン",
    "キャンペーンコード2162",
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.x }],
  creator: AUTHOR.name,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    images: [
      {
        url: "/campaign-banner.jpg",
        width: 900,
        height: 1200,
        alt: "楽天モバイル 従業員紹介キャンペーン｜MNP乗り換えで14,000P / 新規11,000Pプレゼント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@totti37alb",
    images: ["/campaign-banner.jpg"],
  },
  robots: {
    inde