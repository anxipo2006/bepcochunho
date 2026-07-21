import type { Metadata } from "next";
import { Be_Vietnam_Pro, Roboto_Mono } from "next/font/google";
import "./globals.css";

export const preferredRegion = "sin1";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: "Bếp Cô Chủ Nhỏ — Suất Ăn Doanh Nghiệp TP.HCM",
    template: "%s | Bếp Cô Chủ Nhỏ",
  },
  description:
    "Cung cấp suất ăn doanh nghiệp chuyên nghiệp tại TP.HCM. Giá từ 35.000đ/phần, freeship, menu đa dạng, hỗ trợ hóa đơn VAT và công nợ.",
  keywords: [
    "suất ăn doanh nghiệp",
    "cơm văn phòng",
    "bếp cô chủ nhỏ",
    "cơm văn phòng TP.HCM",
    "catering doanh nghiệp",
    "suất ăn khu công nghiệp",
  ],
  openGraph: {
    title: "Bếp Cô Chủ Nhỏ — Suất Ăn Doanh Nghiệp TP.HCM",
    description:
      "Cung cấp suất ăn doanh nghiệp chuyên nghiệp tại TP.HCM. Giá từ 35.000đ/phần, freeship, menu đa dạng, hỗ trợ hóa đơn VAT và công nợ.",
    locale: "vi_VN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
