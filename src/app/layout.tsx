import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doogly",
  description: "Christmas gifting page powered by Doogly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={itim.className}>{children}</body>
    </html>
  );
}
