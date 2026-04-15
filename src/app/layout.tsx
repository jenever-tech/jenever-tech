import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import theme from "@/theme";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JeneverTech 晴玖科技 — AI 驅動的技術解決方案",
  description:
    "晴玖科技提供系統整合、行動應用、AI 基礎設施、雲端服務等專業軟體開發服務。從金融科技到教育科技，以工程師的深度思維打造高品質數位產品。",
  keywords: [
    "軟體開發",
    "系統整合",
    "AI",
    "機器學習",
    "Kubernetes",
    "AWS",
    "GCP",
    "行動應用",
    "雲端服務",
    "晴玖科技",
    "JeneverTech",
  ],
  openGraph: {
    title: "JeneverTech 晴玖科技",
    description: "AI 驅動的技術解決方案",
    url: "https://jenever-tech.com",
    siteName: "JeneverTech",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={inter.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="dark" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
