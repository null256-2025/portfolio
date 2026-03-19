import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AudiencePageConfig,
  projectContextNotes,
  supportSteps,
} from "@/config/business";
import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { cn } from "@/lib/utils";

interface AudiencePageProps {
  audience: AudiencePageConfig;
}

export function AudiencePage({ audience }: AudiencePageProps) {
  const relatedProjects = audience.relatedProjectIds
    .map((id) => Projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const relatedExperiences = audience.relatedExperienceIds
    .map((id) => experiences.find((experience) => experience.id === id))
    .filter(
      (experience): experience is NonNullable<typeof experience> =>
        Boolean(experience)
    );

  return (
    <PageContainer
      title={audience.pageTitle}
      description={audience.pageDescription}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-2xl border bg-muted/30 p-6 md:p-8">
          <p className="text-sm font-medium text-primary">職種別の相談入口</p>
          <h2 className="mt-2 text-3xl font-heading">{audience.heroTitle}</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {audience.heroDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kansai-career"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              90分 AI導入相談を見る
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              問い合わせる
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">よくある課題</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {audience.challenges.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">提供できること</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {audience.capabilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-heading">まずは小さく始められるメニュー</h2>
            <p className="mt-2 text-muted-foreground">
              相談、研修、小規模PoCのいずれかで、対象業務を絞って進めます。
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {audience.offers.map((offer) => (
              <article
                key={offer.title}
                className="rounded-2xl border bg-background p-6"
              >
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-heading">関連事例</h2>
            <p className="mt-2 text-muted-foreground">
              同じ業務課題に近い既存事例を絞って掲載しています。
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <div key={project.id} className="space-y-3">
                <ProjectCard project={project} />
                <p className="text-sm text-muted-foreground">
                  {projectContextNotes[project.id]}
                </p>
              </div>
            ))}
          </div>
          {relatedExperiences.length > 0 ? (
            <div className="rounded-2xl border bg-background p-6">
              <h3 className="text-xl font-semibold">関連する登壇・実績</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {relatedExperiences.map((experience) => (
                  <Link
                    key={experience.id}
                    href={`/experience/${experience.id}`}
                    className="rounded-xl border p-4 transition-colors hover:bg-accent"
                  >
                    <p className="text-sm text-muted-foreground">
                      {experience.startDate.toLocaleDateString("ja-JP")}
                    </p>
                    <p className="mt-2 font-medium">{experience.position}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {experience.description[0]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className="rounded-2xl border bg-background p-6">
          <h2 className="text-2xl font-heading">進め方</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border p-4">
                <p className="text-sm font-medium text-primary">STEP {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border bg-muted/30 p-6 text-center md:p-8">
          <h2 className="text-2xl font-heading">
            {audience.navTitle}から小さく始めたい方へ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            まずは対象業務を整理し、どこから試すべきかを決めるところから対応します。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/kansai-career">90分 AI導入相談を見る</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">問い合わせる</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
