"use client";
import { AdBanner } from "@/app/pageComponents/AdBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { Check, Copy, Info, RotateCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export default function TintAndShadeGenerator() {
  const [baseColor, setBaseColor] = useState("#667eea");
  const [textColor, setTextColor] = useState("#191F33");

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main content area - 3 columns */}
        <ColorVariations textColor={textColor} baseColor={baseColor} />

        {/* Sidebar - Controls and Ad */}
        <ColorControls
          textColor={textColor}
          baseColor={baseColor}
          handleBaseColor={(color: string) => setBaseColor(color)}
          handleTextColor={(color: string) => setTextColor(color)}
        />
      </div>
    </div>
  );
}

function ColorVariations({ textColor = "", baseColor = "" }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyColor = (color: string, index: number) => {
    navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    toast.success(`${color} copied to clipboard!`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const variations = useMemo(() => {
    return generateVariations({ baseColor });
  }, [baseColor]);

  const copyAllColors = () => {
    const allColors = variations.join("\n");
    navigator.clipboard.writeText(allColors);
    toast("All colors copied to clipboard!");
  };

  return (
    <div className="lg:col-span-3 space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Color Variations</CardTitle>
            <div className="flex gap-1 text-gray-500 items-center text-xs font-light">
              <Info className="h3- w-3" />
              <span className="">Click to copy the shade color</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {variations.map((color: string, index: number) => {
              const isBase = [4, 5].includes(index);
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => copyColor(color, index)}
                >
                  <div
                    className="h-24 rounded-2xl transition-all group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      backgroundColor: color,
                    }}
                  >
                    {isBase && (
                      <div
                        className="absolute bottom-2 left-2 px-2 py-1 rounded-full text-xs backdrop-blur-sm"
                        style={{
                          // backgroundColor: `${textColor}20`,
                          color: textColor,
                        }}
                      >
                        Base
                      </div>
                    )}
                    <div
                      className="absolute flex items-center gap-2 top-2 right-2 px-2 py-1 rounded-full text-xs backdrop-blur-sm"
                      style={{
                        // backgroundColor: `${textColor}20`,
                        color: textColor,
                      }}
                    >
                      {color.toUpperCase()}
                    </div>
                    <div
                      className="opacity-0 mt-2 group-hover:opacity-100 transition-opacity"
                      style={{
                        color: textColor,
                      }}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        <Copy className="h-6 w-6" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <Card className="glass-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>CSS Variables</CardTitle>
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
          <pre className="bg-foreground/5 rounded-xl p-4 overflow-x-auto text-sm">
            <code>
              {`:root {
  --color-50: ${variations[0]};
  --color-100: ${variations[1]};
  --color-200: ${variations[2]};
  --color-300: ${variations[3]};
  --color-400: ${variations[4]};
  --color-500: ${variations[5]}; /* base */
  --color-600: ${variations[6]};
  --color-700: ${variations[7]};
  --color-800: ${variations[8]};
  --color-900: ${variations[9]};
  --color-950: ${variations[10]};
}`}
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function ColorControls({
  textColor = "",
  baseColor = "",
  handleTextColor = (color: string) => {},
  handleBaseColor = (color: string) => {},
}) {
  const [toggleContrast, setToggleContrast] = useState(false);

  const toggleTextColor = () => {
    let value = "#191F33";
    if (["#191F33", "#EFECE3"].includes(textColor)) {
      if (textColor === value) {
        value = "#EFECE3";
      }
    }
    handleTextColor(value);
  };

  const randomizeColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    handleBaseColor(randomColor);
  };

  useEffect(() => {
    toggleTextColor();
  }, [toggleContrast]);

  return (
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
          {/* Color picker */}
          <div className="space-y-2">
            <Label>Base Color</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={baseColor}
                onChange={(e) => handleBaseColor(e.target.value)}
                className="w-16 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={baseColor}
                onChange={(e) => handleBaseColor(e.target.value)}
                className="flex-1"
                placeholder="#667eea"
              />
            </div>
          </div>

          {/* Auto contrast toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Text Contrast</Label>
              <div className="space-y-2">
                <div className="flex gap-2 relative">
                  <Input
                    type="color"
                    value={textColor}
                    onChange={(e) => handleTextColor(e.target.value)}
                    className="w-16 h-10 p-1 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={textColor}
                    onChange={(e) => handleTextColor(e.target.value)}
                    className="flex-1"
                    placeholder="#667eea"
                  />
                </div>
                <div className="flex gap-4 mt-1">
                  <p className="text-xs text-foreground/60">
                    Toggle to reset text contrast
                  </p>
                  <Switch
                    className="border border-1 border-color-black"
                    checked={toggleContrast}
                    onCheckedChange={setToggleContrast}
                  />
                </div>
              </div>
            </div>
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
            Use the 500 variant as your primary color, 100-300 for backgrounds,
            and 700-900 for text or emphasis.
          </p>
        </CardContent>
      </Card>

      {/* Side Ad */}
      <AdBanner type="vertical" />
    </div>
  );
}

const generateVariations = ({ baseColor = "" }) => {
  // Convert hex to RGB
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

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = Math.round(x).toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const rgb = hexToRgb(baseColor);
  const variations = [];

  // Generate tints (lighter - mix with white)
  for (let i = 4; i >= 1; i--) {
    const factor = i * 0.15;
    const tint = {
      r: rgb.r + (255 - rgb.r) * factor,
      g: rgb.g + (255 - rgb.g) * factor,
      b: rgb.b + (255 - rgb.b) * factor,
    };
    variations.push(rgbToHex(tint.r, tint.g, tint.b));
  }

  // Add base color
  variations.push(baseColor);
  variations.push(baseColor);

  // Generate shades (darker - mix with black)
  for (let i = 1; i <= 4; i++) {
    const factor = i * 0.15;
    const shade = {
      r: rgb.r * (1 - factor),
      g: rgb.g * (1 - factor),
      b: rgb.b * (1 - factor),
    };
    variations.push(rgbToHex(shade.r, shade.g, shade.b));
  }

  return variations;
};
