import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderNavigator from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Builder",
  description: "Project builder prototype for business purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen ${inter.className}`}>
        <HeaderNavigator />
        {children}
      </body>
    </html>
  );
}
