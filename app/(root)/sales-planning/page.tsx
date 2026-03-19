import { Metadata } from "next";

import { AudiencePage } from "@/components/business/audience-page";
import { getAudiencePage } from "@/config/business";
import { siteConfig } from "@/config/site";

const audience = getAudiencePage("sales-planning");

export const metadata: Metadata = {
  title: audience?.pageTitle,
  description: audience?.pageDescription,
  alternates: {
    canonical: `${siteConfig.url}/sales-planning`,
  },
};

export default function SalesPlanningPage() {
  if (!audience) {
    return null;
  }

  return <AudiencePage audience={audience} />;
}
