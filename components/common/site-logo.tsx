"use client";

import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  priority?: boolean;
}

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/images/projects/logo.svg"
      alt={siteConfig.authorName}
      width={384}
      height={192}
      priority={priority}
      className={cn("h-10 w-auto", className)}
    />
  );
}
