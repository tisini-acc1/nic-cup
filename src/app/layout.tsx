import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { AppWrapper } from "@/context";

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
  title: "Nairobi International Cup",
  description: "Kenya's Premier Grassroot Sports Festival",
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
        <AppWrapper>{children}</AppWrapper>
        <GoogleAnalytics gaId={"G-QX6SNPN0QY"} />
      </body>
    </html>
  );
}
