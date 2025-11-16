"use client";

import ToolHeader from "@/components/layout/ToolHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Check, Copy, RotateCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import type { Metadata } from "next";
import Script from "next/script";

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

const PageContent = () => {
  const [gradientType, setGradientType] = useState<"linear" | "radial">(
    "linear"
  );
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState("#667eea");
  const [color2, setColor2] = useState("#764ba2");
  const [copied, setCopied] = useState(false);

  const gradientCSS =
    gradientType === "linear"
      ? `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`
      : `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background: ${gradientCSS};`);
    setCopied(true);
    toast.success("CSS copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const presetGradients = [
    {
      name: "Purple Dream",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Ocean Breeze",
      gradient: "linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)",
    },
    {
      name: "Sunset Glow",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
    },
    {
      name: "Mint Fresh",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      name: "Rose Pink",
      gradient: "linear-gradient(135deg, #F857A6 0%, #FF5858 100%)",
    },
    {
      name: "Cool Blue",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  const applyPreset = (gradient: string) => {
    const match = gradient.match(
      /linear-gradient\((\d+)deg, (#[0-9a-fA-F]+) 0%, (#[0-9a-fA-F]+) 100%\)/
    );
    if (match) {
      setAngle(parseInt(match[1]));
      setColor1(match[2]);
      setColor2(match[3]);
    }
  };

  const randomize = () => {
    const randomColor = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setColor1(randomColor());
    setColor2(randomColor());
    setAngle(Math.floor(Math.random() * 360));
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Preview section - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Live preview */}
          <Card className="glass-card overflow-hidden">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-96 rounded-2xl transition-all duration-300"
                style={{ background: gradientCSS }}
              />
            </CardContent>
          </Card>

          {/* CSS Output */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>CSS Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-foreground/5 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm">background: {gradientCSS};</code>
                </pre>
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  className="absolute top-2 right-2 bg-primary hover:bg-primary/90"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy CSS
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preset gradients */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Popular Gradients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {presetGradients.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => applyPreset(preset.gradient)}
                    className="group relative overflow-hidden rounded-xl h-24 transition-all hover:scale-105 hover:shadow-xl"
                    style={{ background: preset.gradient }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-end p-3">
                      <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {preset.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls section */}
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Controls</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={randomize}
                  className="rounded-full"
                >
                  <RotateCw className="h-4 w-4 mr-2" />
                  Random
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Gradient type */}
              <Tabs
                value={gradientType}
                onValueChange={(v) => setGradientType(v as any)}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="linear">Linear</TabsTrigger>
                  <TabsTrigger value="radial">Radial</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Angle slider (only for linear) */}
              {gradientType === "linear" && (
                <div className="space-y-2">
                  <Label>Angle: {angle}°</Label>
                  <Slider
                    value={[angle]}
                    onValueChange={(v) => setAngle(v[0])}
                    min={0}
                    max={360}
                    step={1}
                    className="w-full"
                  />
                </div>
              )}

              {/* Color 1 */}
              <div className="space-y-2">
                <Label>Color 1</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-16 h-10 p-1 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Color 2 */}
              <div className="space-y-2">
                <Label>Color 2</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="w-16 h-10 p-1 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips card */}
          <Card className="glass-card bg-secondary/20 border-secondary/30">
            <CardHeader>
              <CardTitle className="text-base">💡 Pro Tip</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">
                Try using complementary colors for vibrant gradients, or
                analogous colors for a more subtle effect.
              </p>
            </CardContent>
          </Card>

          {/* Side Ad */}
        </div>
      </div>
    </div>
  );
};
