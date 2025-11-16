"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ArrowLeft,
  Check,
  Copy,
  Info,
  Lock,
  RotateCw,
  UnlockIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type SchemeType =
  | "complementary"
  | "analogous"
  | "triadic"
  | "tetradic"
  | "monochrome";

export default function PageContent() {
  const [baseColor, setBaseColor] = useState("#667eea");
  const [schemeType, setSchemeType] = useState<SchemeType>("complementary");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Convert hex to HSL
  const hexToHsl = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return { h: 0, s: 0, l: 0 };

    let r = parseInt(result[1], 16) / 255;
    let g = parseInt(result[2], 16) / 255;
    let b = parseInt(result[3], 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number) => {
    h = h / 360;
    s = s / 100;
    l = l / 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate color palette based on scheme
  const generatePalette = (): string[] => {
    const hsl = hexToHsl(baseColor);
    const palette: string[] = [];

    switch (schemeType) {
      case "complementary":
        palette.push(baseColor);
        palette.push(hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l));
        // Add variations
        palette.push(hslToHex(hsl.h, hsl.s, Math.min(hsl.l + 15, 90)));
        palette.push(
          hslToHex((hsl.h + 180) % 360, hsl.s, Math.min(hsl.l + 15, 90))
        );
        break;

      case "analogous":
        palette.push(hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l));
        palette.push(baseColor);
        palette.push(hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l));
        palette.push(hslToHex((hsl.h + 60) % 360, hsl.s, hsl.l));
        palette.push(hslToHex((hsl.h - 60 + 360) % 360, hsl.s, hsl.l));
        break;

      case "triadic":
        palette.push(baseColor);
        palette.push(hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l));
        palette.push(hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l));
        // Add lighter variations
        palette.push(hslToHex(hsl.h, hsl.s, Math.min(hsl.l + 15, 90)));
        palette.push(
          hslToHex((hsl.h + 120) % 360, hsl.s, Math.min(hsl.l + 15, 90))
        );
        break;

      case "tetradic":
        palette.push(baseColor);
        palette.push(hslToHex((hsl.h + 90) % 360, hsl.s, hsl.l));
        palette.push(hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l));
        palette.push(hslToHex((hsl.h + 270) % 360, hsl.s, hsl.l));
        break;

      case "monochrome":
        palette.push(hslToHex(hsl.h, hsl.s, Math.min(hsl.l + 30, 95)));
        palette.push(hslToHex(hsl.h, hsl.s, Math.min(hsl.l + 15, 90)));
        palette.push(baseColor);
        palette.push(hslToHex(hsl.h, hsl.s, Math.max(hsl.l - 15, 10)));
        palette.push(hslToHex(hsl.h, hsl.s, Math.max(hsl.l - 30, 5)));
        break;
    }

    return palette;
  };

  const palette = generatePalette();

  const copyColor = (color: string, index: number) => {
    navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    toast.success(`${color} copied to clipboard!`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAllColors = () => {
    const allColors = palette.join(", ");
    navigator.clipboard.writeText(allColors);
    toast.success("All colors copied to clipboard!");
  };

  const randomizeColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBaseColor(randomColor);
  };

  const schemeDescriptions: Record<SchemeType, string> = {
    complementary: "Colors opposite on the color wheel - creates high contrast",
    analogous: "Colors next to each other - creates harmony",
    triadic: "Three colors evenly spaced - creates vibrant palettes",
    tetradic: "Four colors in two complementary pairs - rich and varied",
    monochrome: "Variations of a single hue - creates unity",
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main content area - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Color palette display */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Color Palette</CardTitle>
                <Button
                  onClick={copyAllColors}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {palette.map((color, index) => {
                  const isBase =
                    index === 0 ||
                    (schemeType === "analogous" && index === 1) ||
                    (schemeType === "monochrome" && index === 2);

                  return (
                    <div key={index} className="relative group">
                      <div
                        className="aspect-square rounded-2xl transition-all group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center cursor-pointer relative overflow-hidden"
                        style={{ backgroundColor: color }}
                        onClick={() => copyColor(color, index)}
                      >
                        {isBase && (
                          <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs bg-white/20 text-white backdrop-blur-sm">
                            Base
                          </div>
                        )}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                          {copiedIndex === index ? (
                            <Check className="h-6 w-6" />
                          ) : (
                            <Copy className="h-6 w-6" />
                          )}
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-sm">{color.toUpperCase()}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Live preview with palette */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Palette Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Preview with gradients */}
                <div
                  className="h-48 rounded-2xl border border-gray-200"
                  style={{
                    background: `linear-gradient(135deg, ${palette
                      .map((color, i) => {
                        const stop = (i / (palette.length - 1)) * 100;
                        return `${color} ${stop}%`;
                      })
                      .join(", ")})`,
                  }}
                />

                {/* Color bars */}
                <div className="flex h-16 rounded-xl overflow-hidden">
                  {palette.map((color, index) => (
                    <div
                      key={index}
                      className="flex-1 transition-all hover:flex-[1.5] cursor-pointer"
                      style={{ backgroundColor: color }}
                      onClick={() => copyColor(color, index)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CSS Output */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>CSS Code</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-foreground/5 rounded-xl p-4 overflow-x-auto text-sm">
                <code>
                  {`:root {
${palette
  .map((color, index) => `  --palette-${index + 1}: ${color};`)
  .join("\n")}
}

/* Example usage */
.primary { background: ${palette[0]}; }
.secondary { background: ${palette[1] || palette[0]}; }`}
                </code>
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Controls and Ad */}
        <div className="space-y-6">
          {/* Controls */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Controls</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={randomizeColor}
                  className="rounded-full"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Base color picker */}
              <div className="space-y-2">
                <Label>Base Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-16 h-10 p-1 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="flex-1"
                    placeholder="#667eea"
                  />
                </div>
              </div>

              {/* Scheme type selector */}
              <div className="space-y-2">
                <Label>Color Scheme</Label>
                <Select
                  value={schemeType}
                  onValueChange={(v) => setSchemeType(v as SchemeType)}
                >
                  <SelectTrigger className="border-2 min-w-[12rem] border-sky-500 focus:ring-2 focus:ring-sky-300 focus:border-sky-600 rounded-md">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complementary">Complementary</SelectItem>
                    <SelectItem value="analogous">Analogous</SelectItem>
                    <SelectItem value="triadic">Triadic</SelectItem>
                    <SelectItem value="tetradic">Tetradic</SelectItem>
                    <SelectItem value="monochrome">Monochrome</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-foreground/60 flex">
                  {/* <Info className="h-5 w-5 mr-1" /> */}
                  {schemeDescriptions[schemeType]}
                </p>
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
                Click the lock icon on colors you want to keep when regenerating
                the palette.
              </p>
            </CardContent>
          </Card>

          {/* Side Ad */}
          {/* <AdBanner type="vertical" /> */}
        </div>
      </div>
    </div>
  );
}
