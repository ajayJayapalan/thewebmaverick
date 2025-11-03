interface AdBannerProps {
  type: "horizontal" | "vertical";
  className?: string;
}

export function AdBanner({ type, className = "" }: AdBannerProps) {
  const dimensions = type === "horizontal" ? "w-full h-24" : "w-full h-96";

  return (
    <div className={`${dimensions} ${className}`}>
      <div className="w-full h-full glass-card rounded-2xl flex items-center justify-center border-2 border-dashed border-foreground/20">
        <div className="text-center px-4">
          <p className="text-foreground/40 text-sm mb-1">Advertisement</p>
          <p className="text-foreground/30 text-xs">
            {type === "horizontal" ? "728 x 90" : "300 x 600"}
          </p>
        </div>
      </div>
    </div>
  );
}
