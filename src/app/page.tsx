import { Hero } from "./pageComponents/Hero";
import { AdBanner } from "./pageComponents/AdBanner";
import { ToolsGrid } from "./pageComponents/ToolsGrid";
import { ExampleOutput } from "./pageComponents/ExampleOutput";
// import AboutSection from "./pageComponents/About";

export default function Home() {
  return (
    <main>
      <>
        {/* Hero Section */}
        <Hero />

        {/* Tools Grid Section */}
        <div id="tools">
          <ToolsGrid />
        </div>

        {/* Example Output Section */}
        <ExampleOutput />

        {/* About Section */}
        {/* <AboutSection /> */}
        {/* Ad Banner - Bottom */}
        <div className="container mx-auto px-4 py-12">
          <AdBanner type="horizontal" />
        </div>
      </>
    </main>
  );
}
