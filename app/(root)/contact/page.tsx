import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { contactTopics, serviceOffers } from "@/config/business";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border bg-muted/30 p-6">
            <h2 className="text-2xl font-heading">こんな相談が可能です</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {contactTopics.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">まずは小さく始められます</h2>
            <div className="mt-4 grid gap-4">
              {serviceOffers.map((offer) => (
                <article key={offer.title} className="rounded-xl border p-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-semibold">{offer.title}</h3>
                    <p className="text-sm font-medium text-primary">{offer.price}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {offer.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">問い合わせ後の流れ</h2>
            <ol className="mt-4 space-y-3 text-muted-foreground">
              <li>1. フォーム送信後、通常2営業日以内に返信します。</li>
              <li>2. 日程はメールで調整し、初回相談はオンライン対応可能です。</li>
              <li>3. 必要に応じてNDA締結や事前ヒアリング項目を調整します。</li>
              <li>4. 初回相談後に、研修・PoC・追加支援の進め方を提案します。</li>
            </ol>
          </section>

          <section className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">よくある質問</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground">
                  初回相談はオンライン対応できますか？
                </h3>
                <p className="mt-1">
                  対応可能です。日程調整後、オンラインで実施します。
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  NDAの相談はできますか？
                </h3>
                <p className="mt-1">
                  可能です。必要に応じて先方雛形での締結に対応します。
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  まずは相談だけでも大丈夫ですか？
                </h3>
                <p className="mt-1">
                  問題ありません。対象業務の整理から始められます。
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/kansai-career">90分 AI導入相談の詳細を見る</Link>
              </Button>
            </div>
          </section>
        </div>
        <div className="w-full">
          <div className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">相談内容を送る</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              相談したい業務やテーマが未整理でも問題ありません。現状の困りごとから書いていただければ大丈夫です。
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
