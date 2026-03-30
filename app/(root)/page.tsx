import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import {
  BusinessIconBadge,
  trustVisuals,
  type BusinessVisualName,
} from "@/components/business/business-visuals";
import { Button } from "@/components/ui/button";
import { commonFaqs, proofLinks, trustPillars } from "@/config/business";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const proofExperienceIds = [
  "generative-ai-workshop-for-companies-and-communities",
  "interview-buddy-ai-coach",
  "publication-20250331",
] as const;

const proofExperiences = proofExperienceIds
  .map((id) => experiences.find((experience) => experience.id === id))
  .filter((experience): experience is NonNullable<typeof experience> =>
    Boolean(experience)
  );

const decisionCards: Array<{
  icon: BusinessVisualName;
  title: string;
  description: string;
}> = [
  {
    icon: "clarify",
    title: "試す業務を決める",
    description: "提案書、議事録、FAQ、研修資料などの中から、最初に着手する業務を絞ります。",
  },
  {
    icon: "decision",
    title: "使う範囲を決める",
    description: "AIに任せる部分と、人が確認する部分を切り分けます。社内で迷いやすい線引きを先に整理します。",
  },
  {
    icon: "support",
    title: "次の2週間を決める",
    description: "相談後に何を試すか、誰が何をするかを、現実的な粒度で揃えます。",
  },
];

const fitCards: Array<{
  icon: BusinessVisualName;
  title: string;
  description: string;
}> = [
  {
    icon: "challenge",
    title: "AIを試したいが、何から始めればよいかわからない",
    description: "対象業務を絞るところから整理します。",
  },
  {
    icon: "clarify",
    title: "提案書、議事録、FAQ、研修資料の負荷が大きい",
    description: "文書業務の時短から入れます。",
  },
  {
    icon: "automation",
    title: "社内で使い始めているが、ルールが曖昧",
    description: "使う範囲とレビュー方法を先に決めます。",
  },
  {
    icon: "decision",
    title: "いきなり開発ではなく、まず小さく試したい",
    description: "相談、研修、PoCの順で段階的に進めます。",
  },
  {
    icon: "support",
    title: "開発会社に頼む前に、現場目線で整理したい",
    description: "導入前の論点を短くまとめます。",
  },
];

const nextStepCards: Array<{
  icon: BusinessVisualName;
  title: string;
  description: string;
}> = [
  {
    icon: "training",
    title: "社内向けミニ研修",
    description: "部門単位で使い方と注意点を揃えます。",
  },
  {
    icon: "poc",
    title: "小規模PoC",
    description: "1業務に絞って、使える形になるかを検証します。",
  },
  {
    icon: "support",
    title: "継続支援",
    description: "運用整理や追加実装まで必要な範囲だけ進めます。",
  },
];

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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-primary/15 bg-background px-4 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
              中小企業向け 生成AI導入相談
            </p>
            <div className="space-y-4">
              <AnimatedText
                as="h1"
                delay={0.1}
                className="max-w-3xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl"
              >
                生成AI導入の最初の一歩を、90分で整理します
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.2}
                className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
              >
                何から試すか。どこまで使うか。次に何をやるか。導入前に決めるべきことを絞って整理します。
              </AnimatedText>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/kansai-career">90分 AI導入相談を見る</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#proofs">実績を見る</Link>
              </Button>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              研修の前に。開発の前に。最初の判断を先に揃えます。
            </p>
          </div>

          <AnimatedSection delay={0.1} direction="up">
            <div className="rounded-[1.75rem] border bg-background p-6 shadow-[0_22px_60px_-38px_rgba(15,23,42,0.45)]">
              <div className="overflow-hidden rounded-[1.5rem] border bg-muted/20">
                <Image
                  src="/images/profile.png"
                  alt="小森貴文のプロフィール写真"
                  width={720}
                  height={520}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    所要時間
                  </p>
                  <p className="mt-2 text-lg font-semibold">90分</p>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    価格
                  </p>
                  <p className="mt-2 text-lg font-semibold">3万円〜</p>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    申込み先
                  </p>
                  <p className="mt-2 text-lg font-semibold">/contact</p>
                </div>
                <div className="rounded-2xl border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    持ち帰り
                  </p>
                  <p className="mt-2 text-lg font-semibold">業務・範囲・次の一歩</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="py-6" id="decision">
        <section className="rounded-[2rem] border bg-muted/30 p-6 md:p-8 lg:p-10">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="space-y-2">
              <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
                この相談で決まること
              </AnimatedText>
              <p className="text-muted-foreground">
                相談の中で決めるのは、広い構想ではなく、最初に動かすための3点です。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {decisionCards.map((card, index) => (
                <AnimatedSection
                  key={card.title}
                  delay={0.08 * (index + 1)}
                  direction="up"
                >
                  <article className="h-full rounded-2xl border bg-background p-5">
                    <BusinessIconBadge
                      name={card.icon}
                      className="h-11 w-11 rounded-xl"
                    />
                    <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {card.description}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              こういう会社向けです
            </AnimatedText>
            <AnimatedText as="p" delay={0.1} className="text-muted-foreground">
              生成AIに興味はあるが、まだ社内で進め方が定まっていない企業向けです。
            </AnimatedText>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fitCards.map((card, index) => (
              <AnimatedSection
                key={card.title}
                delay={0.06 * (index + 1)}
                direction="up"
              >
                <article className="flex h-full flex-col rounded-2xl border bg-background p-5">
                  <BusinessIconBadge
                    name={card.icon}
                    className="h-11 w-11 rounded-xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold leading-7">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {card.description}
                  </p>
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
              私ができること
            </AnimatedText>
            <AnimatedText as="p" delay={0.1} className="text-muted-foreground">
              相談だけ、実装だけに偏らず、現場で回るところまで含めて支援します。
            </AnimatedText>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPillars.map((pillar, index) => (
              <AnimatedSection
                key={pillar.title}
                delay={0.08 * (index + 1)}
                direction="up"
              >
                <article className="h-full rounded-2xl border bg-background p-6">
                  <BusinessIconBadge
                    name={trustVisuals[index] ?? trustVisuals[0]}
                    className="h-11 w-11 rounded-xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {pillar.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12" id="proofs">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <AnimatedText as="h2" className="font-heading text-3xl sm:text-4xl">
              相談の背景になる実績
            </AnimatedText>
            <AnimatedText as="p" delay={0.1} className="text-muted-foreground">
              作品一覧ではなく、企業向け相談に近い実績を優先して掲載しています。
            </AnimatedText>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {proofExperiences.map((experience, index) => {
              const thumbnailSrc =
                experience.thumbnailUrl ??
                (experience.heroImage?.startsWith("/")
                  ? experience.heroImage
                  : undefined);

              return (
                <AnimatedSection
                  key={experience.id}
                  delay={0.08 * (index + 1)}
                  direction="up"
                >
                  <article className="overflow-hidden rounded-2xl border bg-background">
                    {thumbnailSrc ? (
                      <div className="relative aspect-[16/10] border-b">
                        <Image
                          src={thumbnailSrc}
                          alt={`${experience.position} サムネイル`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="space-y-3 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {experience.company}
                      </p>
                      <h3 className="text-lg font-semibold leading-7">
                        {experience.position}
                      </h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {experience.description[0]}
                      </p>
                      {experience.links?.[0] ? (
                        <Link
                          href={experience.links[0].url}
                          target="_blank"
                          className="inline-flex text-sm font-medium text-primary underline underline-offset-4"
                        >
                          詳細を見る
                        </Link>
                      ) : null}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
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
              相談後の選択肢
            </AnimatedText>
            <AnimatedText as="p" delay={0.1} className="text-muted-foreground">
              相談で終わらせず、必要なところだけ次に進めます。
            </AnimatedText>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {nextStepCards.map((card, index) => (
              <AnimatedSection
                key={card.title}
                delay={0.08 * (index + 1)}
                direction="up"
              >
                <article className="h-full rounded-2xl border bg-background p-5">
                  <BusinessIconBadge
                    name={card.icon}
                    className="h-11 w-11 rounded-xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {card.description}
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
                delay={0.08 * (index + 1)}
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
              まずは、何から始めるかの整理から。
            </AnimatedText>
            <p className="text-muted-foreground">
              自社で試すテーマを、90分で整理します。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/kansai-career">90分 AI導入相談を見る</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/experience">実績を見る</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
