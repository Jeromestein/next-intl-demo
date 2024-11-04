// app/layout.tsx

import Header from "@/app/_components/Header";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next.js Weather",
  description:
    "A weather app built with Next.js and next-intl",
};

export default function LocaleLayout({
  children,
  params: {
    locale
  },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale}>
      <body className="...">
        <Header />
        {children}
      </body>
    </html>
  );
}