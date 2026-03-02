import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hammad Amer | AI/ML & Full-Stack Developer",
  description:
    "Personal website of Hammad Amer — AI/ML and Full-Stack Software Engineer.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "PyTorch",
    "Portfolio",
    "Hammad Amer",
  ],
  authors: [{ name: "Hammad Amer" }],
  openGraph: {
    title: "Hammad Amer | AI/ML & Full-Stack Developer",
    description:
      "Welcome to the personal website of Hammad Amer, an AI/ML & Full-Stack Developer.",
    siteName: "Hammad Amer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad Amer | AI/ML & Full-Stack Developer",
    description: "Personal website of Hammad Amer, AI/ML & Full-Stack Developer.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
