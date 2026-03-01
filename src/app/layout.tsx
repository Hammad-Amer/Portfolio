import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hammad Amer | AI/ML & Full-Stack Software Engineer",
  description:
    "Portfolio of Hammad Amer — AI/ML and Full-Stack Software Engineer specializing in deep learning, computer vision, NLP, React, and Node.js. FAST NUCES '26.",
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
    title: "Hammad Amer | AI/ML & Full-Stack Software Engineer",
    description:
      "Portfolio of Hammad Amer — AI/ML and Full-Stack Engineer specializing in deep learning, NLP, and modern web development.",
    siteName: "Hammad Amer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad Amer | AI/ML & Full-Stack Software Engineer",
    description: "Portfolio of Hammad Amer — AI/ML and Full-Stack Engineer.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
