"use client";
// import { AdBanner } from "@/app/pageComponents/AdBanner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ToolHeader() {
  const router = useRouter();

  const onBack = () => {
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={onBack}
              className="cursor-pointer hover:text-primary"
            >
              Css Tools
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shades & Tints</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-start justify-between mb-8 mt-8">
        <div>
          <h1 className="text-4xl mb-2">Shades & Tints Generator</h1>
          <p className="text-foreground/70">
            Generate lighter and darker variations of any color
          </p>
        </div>

        <Button
          variant="ghost"
          onClick={onBack}
          className="hover:bg-foreground/5"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Top Ad Banner */}
      {/* <AdBanner type="horizontal" className="mb-8" /> */}
    </div>
  );
}
