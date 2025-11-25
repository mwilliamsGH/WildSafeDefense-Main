import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WildSafe Defense - Wildfire Protection for California Homes | 8-14 Week Installation",
  description: "The WildSafe Tank delivers 3,000 gallons of diesel-powered wildfire defense. Off-grid operation, no permits required, installed in 8-14 weeks. Protect your California home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
