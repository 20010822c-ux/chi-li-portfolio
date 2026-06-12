import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李持 Chi Li｜个人作品集",
  description:
    "李持 Chi Li 的中文个人作品集，面向内容运营、项目执行、活动策划助理与电竞内容运营岗位。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
