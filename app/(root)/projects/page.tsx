import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import {
  businessCaseStudyIds,
  experimentalProjectIds,
  projectContextNotes,
} from "@/config/business";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  const businessProjects = businessCaseStudyIds
    .map((id) => Projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const experimentalProjects = experimentalProjectIds
    .map((id) => Projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-heading">企業向け支援・業務改善に近い事例</h2>
            <p className="mt-2 text-muted-foreground">
              営業、教育、人事、バックオフィスの相談に近いものを先に掲載しています。
            </p>
          </div>
          <div className="grid justify-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {businessProjects.map((project) => (
              <div key={project.id} className="space-y-3">
                <ProjectCard project={project} />
                <p className="text-sm text-muted-foreground">
                  {projectContextNotes[project.id]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="experimental-projects" className="space-y-5">
          <div>
            <h2 className="text-2xl font-heading">作品・実験・個人開発</h2>
            <p className="mt-2 text-muted-foreground">
              実装力や表現の参考として残している個人作品です。営業時は上段の事例を優先して案内しています。
            </p>
          </div>
          <div className="grid justify-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {experimentalProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
