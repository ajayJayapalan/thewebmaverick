"use client";
import { useState } from "react";
import { Hero } from "./pageComponents/Hero";
import { AdBanner } from "./pageComponents/AdBanner";
import { ToolsGrid } from "./pageComponents/ToolsGrid";
import { ExampleOutput } from "./pageComponents/ExampleOutput";

export default function Home() {
  return (
    <main>
      <>
        {/* Hero Section */}
        <Hero />

        {/* Ad Banner - Top */}
        {/* <div className="container mx-auto px-4 mb-12">
          <AdBanner type="horizontal" />
        </div> */}

        {/* Tools Grid Section */}
        <div id="tools">
          <ToolsGrid
            onToolClick={(tool) => {
              if (tool.href) {
                // handleNavigateToTool(tool.href);
              }
            }}
          />
        </div>

        {/* Example Output Section */}
        <ExampleOutput />

        {/* Ad Banner - Bottom */}
        {/* <div className="container mx-auto px-4 py-12">
          <AdBanner type="horizontal" />
        </div> */}
      </>
    </main>
  );
}
