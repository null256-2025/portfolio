import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { aiTools } from "@/config/ai";

export const metadata: Metadata = {
  title: pagesConfig.ai.metadata.title,
  description: pagesConfig.ai.metadata.description,
};

export default function AIPage() {
  return (
    <PageContainer title={pagesConfig.ai.title} description={pagesConfig.ai.description}>
      <SkillsCard skills={aiTools} />
    </PageContainer>
  );
}

