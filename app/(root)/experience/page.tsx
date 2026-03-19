import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { proofLinks } from "@/config/business";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border bg-background p-6">
            <h2 className="text-xl font-heading">登壇・研修実績</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              生成AIの基礎、最新トレンド、実務活用、ハンズオンまで、非エンジニアにも伝わる形で説明できます。
            </p>
          </article>
          <article className="rounded-2xl border bg-background p-6">
            <h2 className="text-xl font-heading">開発・導入支援</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              相談や研修だけで終わらず、PoCや簡易実装、運用ルールのたたき台までつなげられます。
            </p>
          </article>
          <article className="rounded-2xl border bg-background p-6">
            <h2 className="text-xl font-heading">講師 × 開発 × 導入</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              「理解してもらう」「小さく作る」「現場で回る形にする」までを横断して対応できます。
            </p>
          </article>
        </section>

        <section className="rounded-2xl border bg-muted/30 p-6">
          <h2 className="text-2xl font-heading">外部から確認できる実績</h2>
          <div className="mt-4 flex flex-wrap gap-3">
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
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-heading">経歴一覧</h2>
            <p className="mt-2 text-muted-foreground">
              登壇・研修・開発・導入支援の全体像を時系列で確認できます。
            </p>
          </div>
          <Timeline experiences={experiences} />
        </section>
      </div>
    </PageContainer>
  );
}
