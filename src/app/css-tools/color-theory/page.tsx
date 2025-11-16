import ToolHeader from "@/components/layout/ToolHeader";

import type { Metadata } from "next";
import Script from "next/script";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Color Theory Tool — Harmonies, Schemes & Palettes Generator",
  description:
    "Explore color harmonies and generate perfect palettes using The Web Maverick’s Color Theory Tool. Create complementary, analogous, triadic and tetradic color schemes with instant CSS-ready output.",
  alternates: {
    canonical: "https://thewebmaverick.com/css-tools/color-theory",
  },
  keywords: [
    "color theory tool",
    "color scheme generator",
    "color harmony generator",
    "complementary colors",
    "analogous colors",
    "triadic color palette",
    "tetradic color scheme",
    "color wheel tool",
    "css color generator",
    "web design color tools",
    "ui color palette generator",
    "color combinations",
    "frontend design tools",
    "the web maverick",
    "hsl color tool",
    "hex color palettes",
    "color psychology tool",
  ],
  openGraph: {
    type: "website",
    url: "https://thewebmaverick.com/css-tools/color-theory",
    siteName: "The Web Maverick",
    title:
      "Color Theory Tool — Harmonies, Schemes & Palettes Generator | The Web Maverick",
    description:
      "Generate color harmonies like complementary, triadic, tetradic, and analogous palettes with instant CSS output. Perfect for designers and developers.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Color Theory Tool — Create Harmonies & Color Schemes | The Web Maverick",
    description:
      "Free color theory tool to explore harmonies and generate professional UX/UI color palettes. Get CSS-ready HEX, RGB, and HSL values instantly.",
    creator: "@thewebmaverick",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Color Theory Tool",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  url: "https://thewebmaverick.com/css-tools/color-theory",
  description:
    "Interactive color theory generator for web designers and developers. Explore color harmonies and generate CSS-ready color schemes instantly.",
  keywords:
    "color theory, color harmony generator, color palette tool, complementary colors, css color generator",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Organization",
    name: "The Web Maverick",
    url: "https://thewebmaverick.com",
  },
  publisher: {
    "@type": "Organization",
    name: "The Web Maverick",
    url: "https://thewebmaverick.com",
  },
};

export default function ColorTheoryGenerator() {
  return (
    <div className="min-h-screen">
      {/* Header with breadcrumb */}
      <ToolHeader
        routeLabel="Color Theory"
        title="Color Theory Palette Generator"
        description="Generate harmonious color palettes based on color theory"
      />

      {/* JSON-LD Structured Data */}
      <Script
        id="schema-color-theory"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Main content */}
      <PageContent />
    </div>
  );
}
