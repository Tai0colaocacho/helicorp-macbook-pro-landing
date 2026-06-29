import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MacBook Pro Landing Page | Built for Pro Workflows",
    template: "%s | MacBook Pro",
  },
  description:
    "A premium MacBook Pro landing page concept featuring performance highlights, technical specifications, product configuration, newsletter signup, dark mode and chatbot support.",
  keywords: [
    "MacBook Pro",
    "Apple laptop",
    "Landing Page",
    "Next.js",
    "Frontend",
    "Product Website",
    "Tech Product",
    "Smart Device",
  ],
  authors: [
    {
      name: "Huynh Phat Tai",
    },
  ],
  creator: "Huynh Phat Tai",
  publisher: "Huynh Phat Tai",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MacBook Pro Landing Page | Built for Pro Workflows",
    description:
      "Explore a premium MacBook Pro product landing page with performance sections, technical specs, configuration, newsletter form, dark mode and chatbot support.",
    url: "/",
    siteName: "MacBook Pro Landing Page",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MacBook Pro Landing Page preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro Landing Page | Built for Pro Workflows",
    description:
      "A premium product landing page concept for MacBook Pro, built with Next.js, responsive UI, dark mode, chatbot and validated form.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f5f5f7",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}