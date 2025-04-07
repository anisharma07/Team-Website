"use client";
import React from "react";
import TechButtons from "./TechButtons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SidePanel = () => {
  const pathname = usePathname();
  const [domain, setDomain] = useState("");

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 1) {
      setDomain(pathSegments[1]);
    }
  }, [pathname]);

  return (
    <div className="flex  lg:flex-col-reverse justify-between items-center mb-[30px]">
      <div id="ai-ml" className="flex flex-col lg:items-center w-[full]">
        <p className="text-[#4ED4FF] text-[45px] text-center font-bold font-aldrich sm:text-[33px] leading-0">
          {domain === "ai-ml"
            ? "Machine Learning"
            : domain === "web-dev"
            ? "Web Development"
            : domain === "app-dev"
            ? "App Development"
            : domain === "blockchain"
            ? "Blockchain Development"
            : domain === "ar-vr"
            ? "Augmented Reality"
            : "."}
        </p>
        <div className="w-[100px] h-[3px] bg-[#4ED4FF]"></div>
      </div>
      <TechButtons domainActive={domain} />
    </div>
  );
};

export default SidePanel;
