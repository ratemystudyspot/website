import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ratemystudyspot",
  description: "TLDR: RateMyProfs for Study Spots.",
  openGraph: {
    title: "ratemystudyspot",
    description: "TLDR: RateMyProfs for Study Spots.",
    url: "www.ratemystudyspot.ca/",
    siteName: "ratemystudyspot",
    images: [
      {
        url: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yNl9hX3JlYWxfcGhvdG9fb2ZfY2FzaW5vX2NoaXBzX2IxNmZmODMzLWJjZjgtNGIxYS05MjFlLWMzMDI0MTQ2MjFlMV8yLmpwZw.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
