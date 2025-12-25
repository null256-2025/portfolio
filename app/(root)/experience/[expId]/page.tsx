import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { experiences, ExperienceInterface } from "@/config/experience";
import { siteConfig } from "@/config/site";

interface ExperienceDetailPageProps {
  params: {
    expId: string;
  };
}

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const experience = experiences.find((c) => c.id === params.expId);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `Detailed information about my role as ${experience.position} at ${experience.company}.`,
    alternates: {
      canonical: `${siteConfig.url}/experience/${params.expId}`,
    },
  };
}

export default function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const experience: ExperienceInterface | undefined = experiences.find((c) => c.id === params.expId);

  if (!experience) {
    redirect("/experience");
  }

  return (
    <ClientPageWrapper>
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <AnimatedSection className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              経験一覧に戻る
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {experience.logo && (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    )}
                    <div className="flex-1 text-center sm:text-left">
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                        {experience.position}
                      </h1>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span className="text-md font-medium text-muted-foreground">
                          {experience.company}
                        </span>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icons.externalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                      {getDurationText(
                        experience.startDate,
                        experience.endDate
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <AnimatedSection delay={0.3}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                      Role Summary
                    </h3>

                    {/* ??? Hero Image?E?Role Summary??????E*/}
                    {experience.heroImage && (
                      <div className="mb-6 overflow-hidden rounded-lg border border-border">
                        <Image
                          src={experience.heroImage}
                          alt={`${experience.position} hero`}
                          width={1200}
                          height={630}
                          className="w-full h-auto object-cover"
                          priority
                        />
                      </div>
                    )}

                    <ul className="space-y-3">
                      {experience.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="text-base leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-base leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                      Technologies & Skills
                    </h3>
                    <ChipContainer textArr={experience.skills} />
                    <p className="mt-4 text-sm text-muted-foreground">
                      These are the primary technologies and skills utilized
                      during my time at {experience.company}.
                    </p>
                  </div>

                  {experience.links?.length ? (
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        Related Links
                      </h4>
                      <ul className="space-y-2">
                        {experience.links.map((l, i) => (
                          <li key={i} className="text-base leading-relaxed">
                            <a
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary hover:underline"
                            >
                              <Icons.link className="w-4 h-4" />
                              <span>{l.label}</span>
                              <Icons.externalLink className="w-3.5 h-3.5 opacity-70" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </AnimatedSection>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              View All Experience
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
