import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "PGD Task",
  description: "Frontend Task for PGD",
};

// global font
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-sans-arabic",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
