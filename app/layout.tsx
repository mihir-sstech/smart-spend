import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";

// Define font configuration
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "SmartSpend: Expense Manage Your Money Effortlessly",
  description: "SmartSpend is a powerful expense manager app that helps you track your spending, budget effectively, and reach your financial goals. Sign up for free today and simplify your money management!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon.ico" />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
