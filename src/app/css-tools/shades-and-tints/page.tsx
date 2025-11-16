import ToolHeader from "@/components/layout/ToolHeader";
import TintAndShadeGenerator from "./pageComponets/TintAndShadeGenerator";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CSS Shades & Tints Generator — Free Color Palette Tool",
  description:
    "Generate perfect CSS color shades, tints, and palettes instantly. The Web Maverick’s free color generator helps designers and developers create accessible, visually balanced color systems for web projects.",
  alternates: {
    canonical: "https://thewebmaverick.com/css-tools/shades-and-tints",
  },
  keywords: [
    "css color generator",
    "css shades generator",
    "css tints generator",
    "color palette generator",
    "color shades tool",
    "color tint tool",
    "generate css colors",
    "color contrast tool",
    "accessible color palettes",
    "web color generator",
    "ui design colors",
    "frontend color tools",
    "the web maverick",
    "color theory tools",
    "free online color generator",
    "hex to rgb shades",
    "material design colors",
  ],
  openGraph: {
    type: "website",
    url: "https://thewebmaverick.com/css-tools/shades-and-tints",
    siteName: "The Web Maverick",
    title:
      "CSS Shades & Tints Generator — Free Color Palette Tool | The Web Maverick",
    description:
      "Instantly generate CSS color shades, tints, and palettes for your web design. Free tool for developers and designers to create consistent, beautiful color systems.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CSS Shades & Tints Generator — Free Color Palette Tool | The Web Maverick",
    description:
      "Free online tool to create CSS color shades, tints, and palettes. Instantly copy hex, RGB, or HSL values for your next design project.",
    creator: "@thewebmaverick",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Shades & Tints Generator",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  url: "https://thewebmaverick.com/css-tools/shades-and-tints",
  description:
    "Free CSS shades and tints generator for web designers and frontend developers. Instantly create accessible color palettes with CSS-ready values (HEX, RGB, HSL).",
  keywords:
    "css shades generator, css tints generator, color palette generator, web color tools, free css utilities",
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

export default function ShadesAndTintsGenerator() {
  return (
    <div className="min-h-screen">
      {/* Header with breadcrumb */}
      <ToolHeader
        routeLabel={"Shades & Tints"}
        title={"Shades & Tints Generator"}
        description={"Generate lighter and darker variations of any color"}
      />
      <Script
        id="schema-shades"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <TintAndShadeGenerator />
    </div>
  );
}
