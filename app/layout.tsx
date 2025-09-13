import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://migraition.app' : 'http://localhost:3000'),
  title: "migrAItion - AI-Powered Django to React Migration | 10x Faster",
  description: "Migrate your Django templates to React in days, not months. AI-powered automation reduces migration time by 90% and costs by 75%. Join 50+ companies on the waitlist.",
  keywords: "django migration, django to react, frontend modernization, ai code migration",
  authors: [{ name: "migrAItion" }],
  openGraph: {
    title: "migrAItion - AI-Powered Django to React Migration",
    description: "Migrate your Django templates to React in days, not months. AI-powered automation reduces migration time by 90% and costs by 75%.",
    url: "https://migraition.app",
    siteName: "migrAItion",
    images: [
      {
        url: "/migrAItion-social-og-1200x630-dark.png",
        width: 1200,
        height: 630,
        alt: "migrAItion - AI-Powered Django Migration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "migrAItion - AI-Powered Django to React Migration",
    description: "Migrate your Django templates to React in days, not months.",
    images: ["/migrAItion-social-x-1500x500-dark.png"],
  },
  icons: {
    icon: "/migrAItion-favicon.ico",
    shortcut: "/migrAItion-favicon.ico",
    apple: "/migrAItion-icon-blocks-512.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
