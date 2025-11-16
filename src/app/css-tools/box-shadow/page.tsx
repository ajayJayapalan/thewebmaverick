"use client";
import ToolHeader from "@/components/layout/ToolHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Metadata } from "next";
import Script from "next/script";

interface ShadowPreset {
  name: string;
  description: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}
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

const PageContent = () => {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(10);
  const [blur, setBlur] = useState(30);
  const [spread, setSpread] = useState(-5);
  const [shadowColor, setShadowColor] = useState("#191F33");
  const [opacity, setOpacity] = useState(20);
  const [inset, setInset] = useState(false);
  const [copied, setCopied] = useState(false);

  const presets: ShadowPreset[] = [
    {
      name: "Soft",
      description: "Subtle elevation",
      x: 0,
      y: 4,
      blur: 12,
      spread: -2,
      color: "#191F33",
      opacity: 10,
      inset: false,
    },
    {
      name: "Medium",
      description: "Standard depth",
      x: 0,
      y: 10,
      blur: 30,
      spread: -5,
      color: "#191F33",
      opacity: 20,
      inset: false,
    },
    {
      name: "Intense",
      description: "Strong elevation",
      x: 0,
      y: 20,
      blur: 50,
      spread: -10,
      color: "#191F33",
      opacity: 30,
      inset: false,
    },
    {
      name: "Inner",
      description: "Inset shadow",
      x: 0,
      y: 2,
      blur: 8,
      spread: 0,
      color: "#191F33",
      opacity: 15,
      inset: true,
    },
  ];

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const generateShadowCSS = () => {
    const rgb = hexToRgb(shadowColor);
    const alpha = opacity / 100;
    const insetStr = inset ? "inset " : "";
    return `${insetStr}${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  };

  const shadowCSS = generateShadowCSS();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`box-shadow: ${shadowCSS};`);
    setCopied(true);
    toast.success("CSS copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (preset: ShadowPreset) => {
    setXOffset(preset.x);
    setYOffset(preset.y);
    setBlur(preset.blur);
    setSpread(preset.spread);
    setShadowColor(preset.color);
    setOpacity(preset.opacity);
    setInset(preset.inset);
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main content area - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Live preview */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="min-h-96 p-12 flex items-center justify-center">
                <div
                  className="w-64 h-64 rounded-2xl bg-white dark:bg-foreground/10 transition-all"
                  style={{ boxShadow: shadowCSS }}
                />
              </div>
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
                  <code className="text-sm">box-shadow: {shadowCSS};</code>
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

          {/* Preset shadows */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Preset Shadows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {presets.map((preset, index) => {
                  const rgb = hexToRgb(preset.color);
                  const alpha = preset.opacity / 100;
                  const insetStr = preset.inset ? "inset " : "";
                  const presetShadow = `${insetStr}${preset.x}px ${preset.y}px ${preset.blur}px ${preset.spread}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

                  return (
                    <button
                      key={index}
                      onClick={() => applyPreset(preset)}
                      className="group p-6 glass-card rounded-2xl transition-all hover:scale-105 hover:bg-primary/5"
                    >
                      <div
                        className="w-full h-24 rounded-xl bg-white dark:bg-foreground/10 mb-3 transition-all"
                        style={{ boxShadow: presetShadow }}
                      />
                      <p className="text-sm group-hover:text-primary transition-colors">
                        {preset.name}
                      </p>
                      <p className="text-xs text-foreground/60 mt-1">
                        {preset.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Controls and Ad */}
        <div className="space-y-6">
          {/* Controls */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* X Offset */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Horizontal Offset</Label>
                  <span className="text-sm text-foreground/60">
                    {xOffset}px
                  </span>
                </div>
                <Slider
                  value={[xOffset]}
                  onValueChange={(v) => setXOffset(v[0])}
                  min={-100}
                  max={100}
                  step={1}
                />
              </div>

              {/* Y Offset */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Vertical Offset</Label>
                  <span className="text-sm text-foreground/60">
                    {yOffset}px
                  </span>
                </div>
                <Slider
                  value={[yOffset]}
                  onValueChange={(v) => setYOffset(v[0])}
                  min={-100}
                  max={100}
                  step={1}
                />
              </div>

              {/* Blur */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Blur Radius</Label>
                  <span className="text-sm text-foreground/60">{blur}px</span>
                </div>
                <Slider
                  value={[blur]}
                  onValueChange={(v) => setBlur(v[0])}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>

              {/* Spread */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Spread Radius</Label>
                  <span className="text-sm text-foreground/60">{spread}px</span>
                </div>
                <Slider
                  value={[spread]}
                  onValueChange={(v) => setSpread(v[0])}
                  min={-50}
                  max={50}
                  step={1}
                />
              </div>

              {/* Color */}
              <div className="space-y-2">
                <Label>Shadow Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                    className="w-16 h-10 p-1 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Opacity */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Opacity</Label>
                  <span className="text-sm text-foreground/60">{opacity}%</span>
                </div>
                <Slider
                  value={[opacity]}
                  onValueChange={(v) => setOpacity(v[0])}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>

              {/* Inset toggle */}
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label>Inset Shadow</Label>
                  <p className="text-xs text-foreground/60">
                    Inner shadow effect
                  </p>
                </div>
                <Switch checked={inset} onCheckedChange={setInset} />
              </div>
            </CardContent>
          </Card>

          {/* Pro tip */}
          <Card className="glass-card bg-secondary/20 border-secondary/30">
            <CardHeader>
              <CardTitle className="text-base">💡 Pro Tip</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">
                Use multiple box-shadows by separating them with commas for
                layered depth effects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
