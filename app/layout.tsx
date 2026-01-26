import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "365 Migration Hub - Your Trusted Australian Migration Experts",
  description:
    "Providing clear, honest, and reliable visa support for individuals, families, and professionals. MARA-registered migration agents with over 10 years of expertise.",
  keywords:
    "Australian visa, migration agent, student visa, skilled migration, partner visa, MARA registered",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
