import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niro Empire Property | Premium Properties Across the United Kingdom",
  description: "Find your dream home with Niro Empire Property. Browse through our exclusive collection of premium properties across the United Kingdom.",
  keywords: "real estate, UK property, houses for sale, luxury homes, property listings, Niro Empire Property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
