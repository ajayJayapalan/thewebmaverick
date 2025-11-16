import ToolHeader from "@/components/layout/ToolHeader";

import type { Metadata } from "next";
import Script from "next/script";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "CSS Gradient Generator — Free Online Gradient Tool",
  description:
    "Generate modern CSS gradients instantly. Choose colors, adjust direction, and copy CSS code for your website. The Web Maverick’s free gradient generator for designers and developers.",
  alternates: {
    canonical: "https://thewebmaverick.com/css-tools/gradient-generator",
  },
  keywords: [
    "css gradient generator",
    "linear gradient tool",
    "radial gradient generator",
    "color blend tool",
    "gradient background css",
    "gradient maker online",
    "web design tools",
    "css color gradients",
    "frontend design utilities",
    "free css generator",
    "ui background tools",
    "the web maverick",
    "color transition generator",
    "gradient preview tool",
  ],
  openGraph: {
    type: "website",
    url: "https://thewebmaverick.com/css-tools/gradient-generator",
    siteName: "The Web Maverick",
    title:
      "CSS Gradient Generator — Free Online Gradient Tool | The Web Maverick",
    description:
      "Create linear or radial CSS gradients easily. Pick colors, preview instantly, and copy clean CSS code for your next project.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CSS Gradient Generator — Free Online Gradient Tool | The Web Maverick",
    description:
      "Free CSS gradient generator for developers and designers. Create, preview, and copy gradient backgrounds instantly.",
    creator: "@thewebmaverick",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Gradient Generator",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  url: "https://thewebmaverick.com/css-tools/gradient-generator",
  description:
    "Free online CSS gradient generator for web designers and developers. Create linear and radial gradients with live preview and copy-paste CSS output.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  keywords:
    "css gradient generator, linear gradient, radial gradient, gradient maker, background tool",
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

export default function GradientGenerator() {
  return (
    <div className="min-h-screen">
      {/* Header with breadcrumb */}
      <ToolHeader
        routeLabel="Gradient Generator"
        title="Gradient Generator"
        description="Create beautiful CSS gradients with live preview"
      />
      <Script
        id="schema-gradient"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Main content */}
      <PageContent />
    </div>
  );
}
