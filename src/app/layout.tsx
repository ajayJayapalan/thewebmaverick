import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "./google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebmaverick.com"),
  title: { default: "The Web Maverick", template: "%s | The Web Maverick" },
  description:
    "Discover The Web Maverick — your all-in-one hub of free online tools for web designers, developers, and creators. Explore CSS generators, 3D utilities, color palettes, gradients, shadows, and more to build beautiful, responsive websites effortlessly.",
  keywords: [
    "web tools",
    "css generator",
    "gradient generator",
    "box shadow generator",
    "color palette generator",
    "border radius generator",
    "3D web tools",
    "web design tools",
    "frontend tools",
    "developer tools",
    "UI design tools",
    "free online CSS tools",
    "responsive design utilities",
    "the web maverick",
    "frontend playground",
    "html css js tools",
  ],
  openGraph: {
    type: "website",
    url: "https://thewebmaverick.com",
    siteName: "The Web Maverick",
    title:
      "The Web Maverick — Free CSS & Web Tools for Designers and Developers",
    description:
      "A curated collection of free micro-SaaS tools for web designers and developers — CSS generators, color palettes, 3D utilities, and more to enhance your workflow.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Web Maverick — Free CSS & Web Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Web Maverick — Free CSS & Web Tools",
    description:
      "Free web design and developer tools — gradients, shadows, color palettes, and 3D utilities all in one place.",
    images: ["/og.png"],
    creator: "@thewebmaverick",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  alternates: { canonical: "https://thewebmaverick.com" },
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
        <GoogleAnalytics />
        <Header />
        <div className="min-h-screen mx-auto w-full ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
