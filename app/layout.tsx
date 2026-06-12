import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import AgentationClient from "./components/AgentationClient";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContentsCollector",
  description: "YouTube · 뉴스 · 커뮤니티 AI 핫 콘텐츠 매일 자동 수집",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#1f2228] text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <AgentationClient />
      </body>
    </html>
  );
}
