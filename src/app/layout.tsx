import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "NIC Cup",
  description: "Nairobi International Cup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body
        className={`${roboto.variable} ${oswald.variable} w-full max-w-[1920px] mx-auto bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
