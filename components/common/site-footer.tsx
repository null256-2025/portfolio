import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { supplementaryLinks } from "@/config/business";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container mt-10 flex flex-col items-center justify-center gap-4 py-10">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          {supplementaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-8">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "h-10 w-10 p-2"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
