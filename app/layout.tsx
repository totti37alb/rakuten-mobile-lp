import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "楽天モバイル従業員紹介キャンペーン";
const SITE_TITLE =
  "楽天モバイル従業員紹介キャンペーン｜MNP乗り換えで14,000ポイント還元";
const SITE_DESCRIPTION =
  "楽天グループ社員tottiの従業員紹介リンクから楽天モバイルに申し込むと、MNPで最大14,000P・新規で最大11,000P還元（お申し込み前の紹介URLログインやサービス利用開始等条件あり。ポイントは紹介ログイン月の4カ月後から分割付与）。";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  metadataBase: new URL("https://totti37alb.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
