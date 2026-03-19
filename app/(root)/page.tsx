import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import ProjectCard from "@/components/projects/project-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  audiencePages,
  businessCaseStudyIds,
  commonFaqs,
  homeChallenges,
  proofLinks,
  projectContextNotes,
  serviceOffers,
  supportSteps,
  trustPillars,
} from "@/config/business";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const featuredBusinessProjects = businessCaseStudyIds
  .slice(0, 3)
  .map((id) => Projects.find((project) => project.id === id))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "AI Developer | Frontend Engineer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="py-10 md:py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/profile.png"
              height={280}
              width={280}
              sizes="(max-width: 1024px) 240px, 280px"
              className="h-auto w-full max-w-[17rem] rounded-full border-8 border-primary bg-primary object-cover"
              alt="KOMORI TAKAFUMI | ポートフォリオ"
              priority
            />
          </div>
          <div className="space-y-6">
            <AnimatedText
              as="p"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-primary"
            >
              SME AI Enablement
            </AnimatedText>
            <AnimatedText
              as="h1"
              delay={0.1}
              className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl"
            >
              中小企業向けに、
              <br />
              生成AIの研修・業務改善・小規模PoCを支援します
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.2}
              className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              営業・企画・人事・バックオフィスの現場で、
              「何から始めればよいかわからない」状態から小さく試せる形に整理し、
              実務で回るところまで伴走します。
            </AnimatedText>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border px-4 py-2">90分 AI導入相談 3万円〜</span>
              <span className="rounded-full border px-4 py-2">社内向けミニ研修 8万円〜</span>
              <span className="rounded-full border px-4 py-2">小規模PoC 15万円〜</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kansai-career"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                90分 AI導入相談を見る
              </Link>
              <Link
                href="#audiences"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                職種別ページを見る
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                問い合わせる
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-6" id="challenges">
        <section className="rounded-[2rem] border bg-muted/30 p-6 md:p-8">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="space-y-3 text-center">
              <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
                こんな悩みがある企業向けです
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.1}
                className="text-muted-foreground"
              >
                まずは対象業務を絞って、小さく試せるところから始めます。
              </AnimatedText>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {homeChallenges.map((item, index) => (
                <AnimatedSection
                  key={item}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <article className="rounded-2xl border bg-background p-5">
                    <p className="text-muted-foreground">{item}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="py-12" id="audiences">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              職種ごとに、よくある課題から見られます
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-muted-foreground"
            >
              営業時はトップではなく、相手に合う職種ページを直接送れる構成にしています。
            </AnimatedText>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audiencePages.map((audience, index) => (
              <AnimatedSection
                key={audience.slug}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <article className="flex h-full flex-col rounded-2xl border bg-background p-6">
                  <h3 className="text-xl font-semibold">{audience.navTitle}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {audience.cardDescription}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={audience.href}
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      {audience.navTitle}を見る
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12" id="offers">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              まずは小さく始められるメニューを用意しています
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-muted-foreground"
            >
              いきなり大規模導入ではなく、まずは1テーマを整理し、小さく試す形を基本にしています。
            </AnimatedText>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {serviceOffers.map((offer, index) => (
              <AnimatedSection
                key={offer.title}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <article className="flex h-full flex-col rounded-2xl border bg-background p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                    <p className="text-sm font-medium text-primary">{offer.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {offer.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {offer.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={offer.href}
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      詳細を見る
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              講師・開発・導入支援をまたいで対応できます
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-muted-foreground"
            >
              相談だけ、実装だけに偏らず、現場で回るところまで含めて支援します。
            </AnimatedText>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPillars.map((pillar, index) => (
              <AnimatedSection
                key={pillar.title}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <article className="h-full rounded-2xl border bg-background p-6">
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {proofLinks.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                target="_blank"
                className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              相談に近い事例
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-muted-foreground"
            >
              作品一覧ではなく、企業向け相談に近い実績を優先して掲載しています。
            </AnimatedText>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredBusinessProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <div className="space-y-3">
                  <ProjectCard project={project} />
                  <p className="text-sm text-muted-foreground">
                    {projectContextNotes[project.id]}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              事例一覧を見る
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              支援の流れ
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-muted-foreground"
            >
              相談、研修、PoCのいずれでも、同じ順序で理解コストを下げながら進めます。
            </AnimatedText>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportSteps.map((step, index) => (
              <AnimatedSection
                key={step.title}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <article className="h-full rounded-2xl border bg-background p-6">
                  <p className="text-sm font-semibold text-primary">STEP {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              よくある質問
            </AnimatedText>
          </div>
          <div className="space-y-4">
            {commonFaqs.map((faq, index) => (
              <AnimatedSection
                key={faq.question}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <article className="rounded-2xl border bg-background p-6">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-14">
        <section className="rounded-[2rem] border bg-muted/30 p-8 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              まずは30分〜90分の相談から始められます
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-muted-foreground"
            >
              いきなり導入や開発を決める必要はありません。現状整理と、小さく始めるための進め方の確認から対応します。
            </AnimatedText>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/kansai-career">90分 AI導入相談を見る</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">問い合わせる</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
