import { useEffect, useState } from "react";

const HeroSection = () => {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "laptop">("laptop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) setViewport("mobile");
      else if (width <= 1024) setViewport("tablet");
      else setViewport("laptop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#f5f6f8] py-10 md:py-20">

      {/* 🔒 Hidden SEO H1 (not visible on UI) */}
      <h1 className="sr-only">
        REACH Cut Planner – Apparel Cut Order Planning Software
      </h1>

      <div
        className="
          max-w-[1500px] mx-auto px-4 
          grid grid-cols-2 
          gap-6 md:gap-20
        "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center text-center px-2 md:px-10">
          <p className="text-[#a00043] font-bold text-xl sm:text-2xl md:text-[38px] leading-tight">
            Guaranteed Fabric Savings
          </p>

          <p className="text-[#a00043] font-bold text-xl sm:text-2xl md:text-[38px] leading-tight mt-4 md:mt-10">
            through
          </p>

          <p className="text-[#a00043] font-bold text-xl sm:text-2xl md:text-[38px] leading-tight mt-4 md:mt-10">
            AI Powered Cut Order Planning
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            border-l-2 border-[#d0d0d0] 
            pl-4 sm:pl-8 md:pl-16 
            flex flex-col justify-center 
            space-y-4 sm:space-y-6 md:space-y-12
          "
        >
          <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
            Automated Marker Allocation
          </p>

          <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
            Automated Plies Allocation
          </p>

          <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
            Automated Spread Planning
          </p>

          <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
            Automated Rolls Management
          </p>

          <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
            Automated Fabric Reconciliation
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;