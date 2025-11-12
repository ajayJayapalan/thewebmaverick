"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Palette, Droplet, BoxSelect, Sparkles } from "lucide-react";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { AdBanner } from "./AdBanner";

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  href: string;
}

export const tools: Tool[] = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Shades & Tints",
    description: "Instantly get 10+ variations of your brand color",
    gradient: "from-blue-500 to-cyan-400",
    href: "/shades-and-tints",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Color Theory",
    description: "Generate complementary, analogous, and triadic palettes",
    gradient: "from-purple-500 to-pink-400",
    href: "/color-theory",
  },
  {
    icon: <Droplet className="h-8 w-8" />,
    title: "Gradient Maker",
    description: "Drag, blend, copy CSS instantly",
    gradient: "from-orange-500 to-yellow-400",
    href: "/gradient-generator",
  },
  {
    icon: <BoxSelect className="h-8 w-8" />,
    title: "Box Shadow",
    description: "Live preview + curated preset shadows",
    gradient: "from-green-500 to-emerald-400",
    href: "/box-shadow",
  },
];

export function ToolsGrid() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push("/css-tools/" + path);
  };

  return (
    <section className=" relative overflow-hidden min-h-screen flex flex-col justify-evenly items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Powerful CSS Tools</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A curated collection of essential tools to speed up your design
            workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={clsx(
                  "glass-card  overflow-hidden group cursor-pointer h-full transition-all ",
                  // index !== 0
                  //   ? "grayscale"
                  //   :
                  "hover:shadow-xl hover:-translate-y-2"
                )}
                onClick={() => {
                  if ([0, 1].includes(index)) {
                    handleNavigation(tool.href);
                  }
                }}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} p-4 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{tool.icon}</div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More tools section */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block glass-card rounded-2xl px-8 py-6">
            <p className="text-foreground/60 mb-4">More Tools</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-foreground/10 text-foreground/50 text-sm">
                Glassmorphism (Coming Soon)
              </span>
              <span className="px-4 py-2 rounded-full bg-foreground/10 text-foreground/50 text-sm">
                Neumorphism (Coming Soon)
              </span>
              <span className="px-4 py-2 rounded-full bg-foreground/10 text-foreground/50 text-sm">
                Text Shadow (Coming Soon)
              </span>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container mx-auto px-4 mb-12">
        <AdBanner type="horizontal" />
      </div>
    </section>
  );
}
