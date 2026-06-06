import type { Metadata } from "next";
import "./globals.css";

const REFERRAL_URL = "https://r10.to/hkhSbQ";

export const metadata: Metadata = {
  title: "楽天モバイル紹介キャンペーン｜友達紹介で最大14,000ポイント還元",
  description:
    "楽天モバイルを友達紹介リンクから申し込むと、紹介された方・紹介した方どちらもポイントがもらえます。月額最安0円〜、データ無制限プランの詳細と特典をまとめました。",
  openGraph: {
    title: "楽天モバイル紹介キャンペーン｜友達紹介で最大14,000ポイント還元",
    description:
      "紹介リンク経由で申し込むだけで特典ポイントをGET。競馬・サッカー観戦のお供に最適なデータ無制限プランをお得に始めよう。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "楽天モバイル紹介キャンペーン｜友達紹介で最大14,000ポイント還元",
    description:
      "紹介リンク経由で申し込むだけで特典ポイントをGET。競馬・サッカー観戦にも最適なデータ無制限プランをお得に始めよう。",
  },
  metadataBase: new URL("https://your-domain.vercel.app"), // ← デプロイ後に実際のURLに変更
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
