import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Button } from "@/components/ui/button";
import {
  BusinessIconBadge,
  type BusinessVisualName,
} from "@/components/business/business-visuals";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

const proofExperienceIds = [
  "teqs-creative-ai-20251205",
  "publication-20250331",
  "ext-seminar-20250226",
] as const;

const proofMeta: Record<
  (typeof proofExperienceIds)[number],
  {
    organizer: string;
    audience: string;
    scale: string;
    theme: string;
  }
> = {
  "teqs-creative-ai-20251205": {
    organizer: "ソフト産業プラザ TEQS",
    audience: "中小企業・事業開発/企画担当",
    scale: "少人数トライ&ディスカッション形式",
    theme: "クリエイティブAIでビジネスを加速",
  },
  "publication-20250331": {
    organizer: "技術情報協会",
    audience: "R&D・技術企画担当",
    scale: "書籍掲載（分担執筆）",
    theme: "実験の自動化・自律化によるR&D効率化",
  },
  "ext-seminar-20250226": {
    organizer: "株式会社アイエンター",
    audience: "企業のDX/業務改善担当",
    scale: "オンラインセミナー",
    theme: "生成AI最新トレンドとAIエージェント",
  },
};

const proofExperiences = proofExperienceIds
  .map((id) => experiences.find((item) => item.id === id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

const consultOutcomeCards = [
  {
    title: "試す業務を決める",
    description: "提案書、議事録、FAQ、研修資料などの中から、最初に着手する業務を絞ります。",
  },
  {
    title: "使う範囲を決める",
    description: "AIに任せる部分と、人が確認する部分を切り分けます。社内で迷いやすい線引きを先に整理します。",
  },
  {
    title: "次の2週間を決める",
    description: "相談後に何を試すか、誰が何をするかを、現実的な粒度で揃えます。",
  },
];

const consultOutcomeIcons: BusinessVisualName[] = ["clarify", "decision", "support"];

const fitCards = [
  {
    title: "AIを試したいが、何から始めればよいかわからない",
    description: "対象業務を絞るところから整理します。",
  },
  {
    title: "提案書、議事録、FAQ、研修資料の負荷が大きい",
    description: "文書業務の時短から入れます。",
  },
  {
    title: "社内で使い始めているが、ルールが曖昧",
    description: "使う範囲とレビュー方法を先に決めます。",
  },
  {
    title: "いきなり開発ではなく、まず小さく試したい",
    description: "相談、研修、PoCの順で段階的に進めます。",
  },
  {
    title: "開発会社に頼む前に、現場目線で整理したい",
    description: "導入前の論点を短くまとめます。",
  },
];

const nextStepCards = [
  {
    title: "社内向けミニ研修",
    description: "部門単位で使い方と注意点を揃えます。",
  },
  {
    title: "小規模PoC",
    description: "1業務に絞って、使える形になるかを検証します。",
  },
  {
    title: "継続支援",
    description: "運用整理や追加実装まで必要な範囲だけ進めます。",
  },
];

const nextStepIcons: BusinessVisualName[] = ["training", "poc", "support"];

const faqItems = [
  {
    question: "開発だけでも依頼できますか？",
    answer:
      "可能です。まずは対象業務と目的を整理したうえで、必要な範囲だけ対応します。",
  },
  {
    question: "社内データを渡さなくても相談できますか？",
    answer:
      "可能です。最初は実データを使わず、業務フローや困りごとの整理から始められます。",
  },
  {
    question: "オンラインで相談できますか？",
    answer:
      "可能です。初回相談はオンライン対応可で、日程はメールで調整します。",
  },
];

export const metadata: Metadata = {
  title: "90分 AI導入相談",
  description:
    "中小企業向けの生成AI導入整理、社内向け研修、小規模PoCのための初回相談ページです。",
  alternates: {
    canonical: `${siteConfig.url}/kansai-career`,
  },
};

export default function KansaiCareerPage() {
  return (
    <PageContainer
      title="90分 AI導入相談"
      description="中小企業の導入前整理を90分でまとめる、初回相談ページです。"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-primary/15 bg-background px-4 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
              中小企業向け 生成AI導入相談
            </p>
            <div className="space-y-4">
              <AnimatedText
                as="h2"
                className="font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl"
              >
                生成AI導入の最初の一歩を、90分で整理します
              </AnimatedText>
              <AnimatedText
                as="p"
                className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
              >
                何から試すか。どこまで使うか。次に何をやるか。導入前に決めるべきことを絞って整理します。
              </AnimatedText>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">お申し込みへ進む</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#proofs">実績を見る</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              研修の前に。開発の前に。最初の判断を先に揃えます。
            </p>
          </div>

          <AnimatedSection delay={0.1} direction="up">
            <div className="rounded-[1.75rem] border bg-background p-6 shadow-[0_22px_60px_-38px_rgba(15,23,42,0.45)]">
              <div className="space-y-4">
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
                <div className="grid gap-3 sm:grid-cols-2">
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
            </div>
          </AnimatedSection>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <AnimatedText as="h3" className="font-heading text-2xl sm:text-3xl">
              この相談で決まること
            </AnimatedText>
            <p className="text-muted-foreground">
              相談の中で決めるのは、広い構想ではなく、最初に動かすための3点です。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {consultOutcomeCards.map((card, index) => (
              <AnimatedSection
                key={card.title}
                delay={0.08 * (index + 1)}
                direction="up"
              >
                <article className="h-full rounded-2xl border bg-background p-5">
                  <BusinessIconBadge
                    name={consultOutcomeIcons[index]}
                    className="h-11 w-11 rounded-xl"
                  />
                  <h4 className="mt-4 text-lg font-semibold">{card.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {card.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border bg-muted/30 p-6">
            <h3 className="text-2xl font-heading">向いている会社</h3>
            <div className="mt-4 grid gap-3">
              {fitCards.map((card, index) => (
                <div key={card.title} className="rounded-2xl border bg-background p-4">
                  <div className="flex items-start gap-3">
                    <BusinessIconBadge
                      name={index % 2 === 0 ? "challenge" : "clarify"}
                      className="h-10 w-10 rounded-xl"
                    />
                    <div>
                      <p className="font-medium leading-7">{card.title}</p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border bg-background p-6">
            <h3 className="text-2xl font-heading">向いていない会社</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p className="rounded-2xl border bg-muted/30 p-4">
                要件も目的も決まっていない、丸投げ前提の開発依頼。
              </p>
              <p className="rounded-2xl border bg-muted/30 p-4">
                補助金申請だけを目的にした相談。
              </p>
              <p className="rounded-2xl border bg-muted/30 p-4">
                社内調整の代行だけを求める依頼。
              </p>
            </div>
          </div>
        </section>

        <section id="proofs" className="space-y-4">
          <div className="space-y-2">
            <AnimatedText as="h3" className="font-heading text-2xl sm:text-3xl">
              証拠材料
            </AnimatedText>
            <p className="text-muted-foreground">
              件数ではなく、固有名詞と内容で見せる前提にしています。
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {proofExperiences.map((item) => {
              const meta = proofMeta[item.id as keyof typeof proofMeta];
              const thumbnailSrc =
                item.thumbnailUrl ??
                (item.heroImage?.startsWith("/") ? item.heroImage : undefined);

              return (
                <AnimatedSection key={item.id} direction="up">
                  <article className="h-full overflow-hidden rounded-2xl border bg-background">
                    {thumbnailSrc ? (
                      <div className="relative aspect-[16/10] border-b">
                        <Image
                          src={thumbnailSrc}
                          alt={`${item.position} サムネイル`}
                          fill
                          sizes="(max-width: 768px) 100vw, 420px"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="space-y-3 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {meta?.organizer ?? item.company}
                      </p>
                      <h4 className="text-lg font-semibold leading-7">
                        {item.position}
                      </h4>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {meta?.theme}
                      </p>
                      {meta ? (
                        <ul className="space-y-1 text-sm leading-6 text-muted-foreground">
                          <li>対象者: {meta.audience}</li>
                          <li>形式: {meta.scale}</li>
                        </ul>
                      ) : null}
                      {item.links?.[0] ? (
                        <Link
                          href={item.links[0].url}
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
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <AnimatedText as="h3" className="font-heading text-2xl sm:text-3xl">
              相談後の選択肢
            </AnimatedText>
            <p className="text-muted-foreground">
              相談で終わらせず、必要なところだけ次に進めます。
            </p>
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
                    name={nextStepIcons[index]}
                    className="h-11 w-11 rounded-xl"
                  />
                  <h4 className="mt-4 text-lg font-semibold">{card.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {card.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <AnimatedText as="h3" className="font-heading text-2xl sm:text-3xl">
              FAQ
            </AnimatedText>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-2xl border bg-background p-5">
                <h4 className="text-lg font-semibold">{faq.question}</h4>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border bg-muted/30 p-8 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <AnimatedText as="h3" className="font-heading text-3xl sm:text-4xl">
              まずは、何から始めるかの整理から。
            </AnimatedText>
            <p className="text-muted-foreground">
              自社で試すテーマを、90分で整理します。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">お申し込みへ進む</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">トップへ戻る</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
