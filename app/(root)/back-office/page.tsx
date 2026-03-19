import { Metadata } from "next";

import { AudiencePage } from "@/components/business/audience-page";
import { getAudiencePage } from "@/config/business";
import { siteConfig } from "@/config/site";

const audience = getAudiencePage("back-office");

export const metadata: Metadata = {
  title: audience?.pageTitle,
  description: audience?.pageDescription,
  alternates: {
    canonical: `${siteConfig.url}/back-office`,
  },
};

export default function BackOfficePage() {
  if (!audience) {
    return null;
  }

  return <AudiencePage audience={audience} />;
}
