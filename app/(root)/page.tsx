import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import Timeline from "@/components/experience/timeline";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { aiTools } from "@/config/ai";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const serviceMenus = [
  {
    title: "90分 AI導入相談",
    price: "3〜5万円",
    duration: "90分",
    points: [
      "対象業務を1つに絞る",
      "成功指標（時間/品質）を設定",
      "2週間で試す実行計画を作成",
    ],
  },
  {
    title: "2週間パイロット",
    price: "5〜15万円",
    duration: "2週間",
    points: [
      "運用ルールとプロンプト整備",
      "最小実装またはテンプレ納品",
      "効果測定と次フェーズ提案",
    ],
  },
  {
    title: "半日ハンズオン",
    price: "要相談",
    duration: "半日",
    points: [
      "部署別の活用テーマ設計",
      "現場で使う演習中心",
      "導入後の運用ガイドを共有",
    ],
  },
];

const trustLinks = [
  {
    label: "TEQS 登壇実績",
    url: "https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860",
  },
  {
    label: "書籍執筆（技術情報協会）",
    url: "https://www.gijutu.co.jp/doc/b_2285.htm",
  },
  {
    label: "生成AIセミナー登壇",
    url: "https://www.i-enter.co.jp/news/detail/250131_01/",
  },
];

export default function IndexPage() {
  // Structured data for personal portfolio
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

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={"/images/profile.png"}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt={"KOMORI TAKAFUMI | ポートフォリオ"}
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {"KOMORI TAKAFUMI"}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {"AI導入を現場で回る形にする"}
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              {"営業・企画・人事向けに、運用設計から最小実装まで伴走。導入しただけで終わらせません。"}
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"/kansai-career"}
                target="_self"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label={"90分 AI導入相談を見る"}
              >
                {"90分 AI導入相談を見る"}
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label={"お問い合わせする"}
              >
                {"お問い合わせする"}
              </Link>
            </AnimatedText>
            <AnimatedText delay={1}>
              <Link
                href={"#offerings"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })
                )}
                aria-label={"提供メニューを見る"}
              >
                {"提供メニューを見る"}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="offerings"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {"提供メニュー"}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {"AIの使い方が分からない状態から、業務に定着させるところまで段階的に支援します。"}
          </AnimatedText>
        </div>
        <div className="mx-auto grid gap-4 md:w-full lg:grid-cols-3">
          {serviceMenus.map((menu, index) => (
            <AnimatedSection
              key={menu.title}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <article className="h-full rounded-lg border bg-background p-6">
                <p className="text-sm text-muted-foreground">
                  {menu.duration} / {menu.price}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{menu.title}</h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {menu.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link
                  href="/kansai-career"
                  className="inline-block mt-5 text-sm underline underline-offset-4"
                >
                  詳細を見る
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
        <div className="mx-auto flex max-w-[58rem] flex-wrap items-center justify-center gap-3">
          {trustLinks.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              target="_blank"
              className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </AnimatedSection>
      <div className="container py-8">
        <div className="mx-auto h-px max-w-[58rem] bg-border/70" />
      </div>
      <AnimatedSection
        className="container space-y-6 py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="ai"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.ai.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.ai.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={aiTools.slice(0, 6)} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/ai">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <Timeline experiences={experiences} />
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

