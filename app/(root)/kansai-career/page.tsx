import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

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

export const metadata: Metadata = {
  title: "勉強会参加者限定30分相談",
  description:
    "登壇内容を踏まえ、1業務に絞って次の一手を決める30分相談。参加者限定で無料対応します。",
  alternates: {
    canonical: `${siteConfig.url}/kansai-career`,
  },
};

export default function KansaiCareerPage() {
  const ctaLabel = "30分相談を予約する";

  return (
    <PageContainer
      title="登壇後の30分相談"
      description="勉強会参加者限定。1業務に絞って次の一手を決めます。"
    >
      <div className="mx-auto max-w-3xl space-y-10">
        <section className="rounded-lg border p-6 bg-background">
          <p className="text-sm text-muted-foreground mb-2">
            参加者限定・無料（先着順）
          </p>
          <h2 className="text-2xl font-heading mb-3">
            登壇後の30分相談で、次の一手を切る
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            課題の棚卸しではなく、業務1つに絞って「何を試すか」を決める時間です。
            30分で優先順位と実行ステップを整理します。
          </p>
          <div className="mt-5">
            <Button asChild size="lg">
              <Link href="/contact">{ctaLabel}</Link>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border p-6 bg-background">
          <h2 className="text-2xl font-heading mb-3">30分で持ち帰る成果物</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>対象業務（1つ）と成功指標（時間短縮/品質改善）</li>
            <li>進め方の選択肢（2週間パイロット or 90分診断）</li>
            <li>見積レンジと最低限必要な社内体制</li>
          </ul>
        </section>

        <section className="rounded-lg border p-6 bg-background">
          <h2 className="text-2xl font-heading mb-4">登壇・実績の証拠</h2>
          <div className="space-y-4">
            {proofExperiences.map((item) => {
              const firstLink = item.links?.[0];
              const meta = proofMeta[item.id as keyof typeof proofMeta];
              const thumbnailSrc =
                item.thumbnailUrl ??
                (item.heroImage?.startsWith("/") ? item.heroImage : undefined);
              return (
                <article key={item.id} className="rounded-md border p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-56 flex-shrink-0">
                      {thumbnailSrc ? (
                        <div className="relative w-full aspect-video rounded-md overflow-hidden border">
                          <Image
                            src={thumbnailSrc}
                            alt={`${item.position} サムネイル`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-video rounded-md border grid place-items-center text-sm text-muted-foreground">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">
                        {item.startDate.toLocaleDateString("ja-JP")}
                      </p>
                      <h3 className="text-lg font-semibold mt-1">{item.position}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                      {meta ? (
                        <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                          <li>主催: {meta.organizer}</li>
                          <li>対象者: {meta.audience}</li>
                          <li>形式/規模: {meta.scale}</li>
                          <li>テーマ: {meta.theme}</li>
                        </ul>
                      ) : null}
                      {firstLink ? (
                        <Link
                          href={firstLink.url}
                          target="_blank"
                          className="inline-block mt-2 text-sm underline underline-offset-4"
                        >
                          イベント/掲載詳細（外部）
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-lg border p-6 bg-background">
          <h2 className="text-2xl font-heading mb-3">対象と対象外</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">対象</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>営業/企画/人事の業務改善</li>
                <li>AI導入時の運用設計・ルール作成</li>
                <li>社内提案に向けた要件整理</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">対象外</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>要件未定の丸投げ開発依頼</li>
                <li>補助金申請のみを目的とした相談</li>
                <li>社内調整の代行のみを求める依頼</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border p-6 bg-background">
          <h2 className="text-2xl font-heading mb-3">相談後の進め方（有料）</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>2週間パイロット: 5〜15万円（1業務に限定して検証）</li>
            <li>90分診断: 3〜5万円（運用設計と優先順位を確定）</li>
          </ul>
        </section>

        <section className="rounded-lg border p-6 bg-background">
          <h2 className="text-2xl font-heading mb-3">FAQ</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>NDA: 先方雛形での締結に対応します。</li>
            <li>情報管理: 原則として機密情報の持ち出しを行いません。</li>
            <li>請求対応: 請求書払いに対応します（支払サイトは個別調整）。</li>
          </ul>
        </section>

        <section className="rounded-lg border p-6 bg-background text-center space-y-3">
          <h2 className="text-2xl font-heading">30分相談を予約する</h2>
          <p className="text-muted-foreground">
            フォームから「勉強会参加者経由」と記載してください。
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{ctaLabel}</Link>
          </Button>
        </section>
      </div>

      <Link
        href="/contact"
        className={cn(
          buttonVariants({ size: "lg" }),
          "fixed bottom-4 right-4 z-50 shadow-lg"
        )}
      >
        {ctaLabel}
      </Link>
    </PageContainer>
  );
}
