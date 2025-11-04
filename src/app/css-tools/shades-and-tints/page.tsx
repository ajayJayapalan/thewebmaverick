import ToolHeader from "@/components/layout/ToolHeader";
import TintAndShadeGenerator from "./pageComponets/TintAndShadeGenerator";
import { Toaster } from "@/components/ui/sonner";

interface ShadesAndTintsGeneratorProps {
  onBack: () => void;
}

export default function ShadesAndTintsGenerator({
  onBack,
}: ShadesAndTintsGeneratorProps) {
  return (
    <div className="min-h-screen">
      {/* Header with breadcrumb */}
      <ToolHeader />

      <TintAndShadeGenerator />

      <Toaster />
    </div>
  );
}
