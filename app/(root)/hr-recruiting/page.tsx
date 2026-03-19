import { Metadata } from "next";

import { AudiencePage } from "@/components/business/audience-page";
import { getAudiencePage } from "@/config/business";
import { siteConfig } from "@/config/site";

const audience = getAudiencePage("hr-recruiting");

export const metadata: Metadata = {
  title: audience?.pageTitle,
  description: audience?.pageDescription,
  alternates: {
    canonical: `${siteConfig.url}/hr-recruiting`,
  },
};

export default function HrRecruitingPage() {
  if (!audience) {
    return null;
  }

  return <AudiencePage audience={audience} />;
}
