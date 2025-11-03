import { Card } from "@/components/ui/card";

export function ExampleOutput() {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">See What You Can Create</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Real examples styled with CSS generated from our tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Example 1: Gradient Button */}
          <Card className="glass-card p-8 text-center space-y-4">
            <p className="text-sm text-foreground/60">Gradient Button</p>
            <button
              className="w-full px-6 py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(71.5% 0.143 215.221) 0%, oklch(88% 0.155 90) 100%)",
              }}
            >
              Click Me
            </button>
            <code className="text-xs text-foreground/50 block">
              linear-gradient(135deg, ...)
            </code>
          </Card>

          {/* Example 2: Box Shadow Card */}
          <Card className="glass-card p-8 text-center space-y-4">
            <p className="text-sm text-foreground/60">Soft Shadow</p>
            <div
              className="w-full h-24 rounded-2xl bg-white dark:bg-foreground/10"
              style={{
                boxShadow: "0 10px 40px -10px rgba(25, 31, 51, 0.2)",
              }}
            />
            <code className="text-xs text-foreground/50 block">
              box-shadow: 0 10px 40px...
            </code>
          </Card>

          {/* Example 3: Color Palette */}
          <Card className="glass-card p-8 text-center space-y-4">
            <p className="text-sm text-foreground/60">Color Palette</p>
            <div className="flex gap-2 justify-center">
              <div
                className="w-12 h-12 rounded-lg"
                style={{ backgroundColor: "oklch(71.5% 0.143 215.221)" }}
              />
              <div
                className="w-12 h-12 rounded-lg"
                style={{ backgroundColor: "oklch(80% 0.143 215.221)" }}
              />
              <div
                className="w-12 h-12 rounded-lg"
                style={{ backgroundColor: "oklch(60% 0.143 215.221)" }}
              />
            </div>
            <code className="text-xs text-foreground/50 block">
              Shades & Tints
            </code>
          </Card>
        </div>

        {/* Additional examples */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Glassmorphism example */}
              <div className="text-center">
                <div
                  className="w-full h-20 rounded-xl backdrop-blur-sm flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span className="text-xs text-foreground/60">Glass</span>
                </div>
              </div>

              {/* Gradient background */}
              <div className="text-center">
                <div
                  className="w-full h-20 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <span className="text-xs text-white">Gradient</span>
                </div>
              </div>

              {/* Deep shadow */}
              <div className="text-center">
                <div
                  className="w-full h-20 rounded-xl bg-white dark:bg-foreground/10 flex items-center justify-center"
                  style={{
                    boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span className="text-xs text-foreground/60">Shadow</span>
                </div>
              </div>

              {/* Color swatch */}
              <div className="text-center">
                <div
                  className="w-full h-20 rounded-xl flex items-center justify-center"
                  style={{
                    background: "oklch(88% 0.155 90)",
                  }}
                >
                  <span className="text-xs text-foreground">Color</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
