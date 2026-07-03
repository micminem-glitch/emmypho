import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmy Photography — Portrait & Editorial Photography",
  description: "Quiet, honest portraits — for people, couples and brands who'd rather be seen than staged.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
 }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable} bg-paper text-ink font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}