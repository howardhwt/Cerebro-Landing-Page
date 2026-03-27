import type { Metadata } from "next";
import { Geist, Outfit, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salency.ai"),
  title: "Salency — AI that remembers every customer pain your sales reps forget",
  description: "Sales intelligence that turns call transcripts into structured context. Extract pains, map them to your products, and generate follow-ups — so reps stop losing deals to forgotten context.",
  openGraph: {
    title: "Salency — AI that remembers every customer pain your sales reps forget",
    description: "Sales intelligence that turns call transcripts into structured context. Extract pains, map them to your products, and generate follow-ups.",
    url: "https://salency.ai",
    siteName: "Salency",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Salency — Sales Intelligence" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salency — AI that remembers every customer pain your sales reps forget",
    description: "Sales intelligence that turns call transcripts into structured context.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${outfit.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
