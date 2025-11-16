import ToolHeader from "@/components/layout/ToolHeader";
import type { Metadata } from "next";
import Script from "next/script";
import PageContent from "./PageContent";

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Box-Shadow Generator",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  url: "https://thewebmaverick.com/css-tools/box-shadow",
  description:
    "Free CSS box-shadow generator for designers and developers. Create realistic UI shadows with adjustable blur, spread, offsets, and inset mode.",
  keywords:
    "css box shadow generator, box shadow css, ui shadows, inset shadow tool, blur generator",
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

export const metadata: Metadata = {
  title: "CSS Box-Shadow Generator — Free Online Shadow Tool",
  description:
    "Generate clean CSS box-shadows instantly. Customize blur, spread, offset, inset and color with live preview. Copy the exact CSS box-shadow code for your UI designs.",
  alternates: {
    canonical: "https://thewebmaverick.com/css-tools/box-shadow",
  },
  keywords: [
    "css box shadow generator",
    "box shadow tool",
    "css shadow generator",
    "ui shadow generator",
    "material shadow tool",
    "elevation shadow css",
    "inset shadow css",
    "web design tools",
    "frontend utilities",
    "free css tools",
    "css effects generator",
    "the web maverick",
    "css blur generator",
    "shadow presets css",
    "ui design shadows",
  ],
  openGraph: {
    type: "website",
    url: "https://thewebmaverick.com/css-tools/box-shadow",
    siteName: "The Web Maverick",
    title:
      "CSS Box-Shadow Generator — Free Online Shadow Tool | The Web Maverick",
    description:
      "Create custom CSS box-shadows with a live preview. Adjust blur, spread, opacity, and color — then copy clean CSS code instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Box-Shadow Generator — Free Online Tool | The Web Maverick",
    description:
      "Free CSS box-shadow generator for UI/UX designers and developers. Adjust offsets, blur, spread, and color with instant CSS output.",
    creator: "@thewebmaverick",
  },
};

export default function BoxShadowGenerator() {
  return (
    <div className="min-h-screen">
      {/* Header with breadcrumb */}
      <ToolHeader
        routeLabel="Box Shadow"
        title="Box Shadow Generator"
        description="Create beautiful CSS box shadows with live preview"
      />

      {/* Structured Data */}
      <Script
        id="schema-box-shadow"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Main content */}
      <PageContent />
    </div>
  );
}
