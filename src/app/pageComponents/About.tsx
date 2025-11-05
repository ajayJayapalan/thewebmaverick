"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-16">
      {/* Left: Blob image */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
        <div className="absolute inset-0 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987" // replace with your image
            alt="Ajay Jayapalan"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right: Content */}
      <Card className="border-none shadow-none p-0 bg-transparent">
        <CardContent className="space-y-4 p-0">
          <div className="text-3xl">👋</div>
          <h2 className="text-xl md:text-2xl font-medium text-foreground">
            Hey, I'm <span className="text-primary font-semibold">Ajay</span>, a
            Frontend-heavy Full-Stack Engineer.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I love building intuitive web tools and creative interfaces — from
            3D visualizations to clean, responsive UI systems. I’m passionate
            about turning complex ideas into simple, delightful experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is my personal playground where I share small side-projects and
            design experiments. You can follow the journey on{" "}
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="text-primary underline underline-offset-4"
            >
              Twitter
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
