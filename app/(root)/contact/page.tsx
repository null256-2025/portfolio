import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { contactTopics } from "@/config/business";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const flowItems = [
  "1. フォーム送信後、通常2営業日以内に返信します。",
  "2. 日程はメールで調整し、初回相談はオンライン対応できます。",
  "3. 必要に応じてNDA締結や事前ヒアリング項目を調整します。",
  "4. 相談後に、研修・PoC・追加支援の進め方を提案します。",
];

const faqItems = [
  {
    question: "NDAの相談はできますか？",
    answer: "可能です。必要に応じて先方雛形での締結に対応します。",
  },
  {
    question: "まずは相談だけでも大丈夫ですか？",
    answer: "問題ありません。対象業務の整理から始められます。",
  },
  {
    question: "オンラインで相談できますか？",
    answer: "対応可能です。日程調整後、オンラインで実施します。",
  },
];

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border bg-muted/30 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              最終申込み地点
            </p>
            <h2 className="mt-2 text-2xl font-heading">相談内容を送る前に確認すること</h2>
            <p className="mt-3 text-muted-foreground leading-7">
              相談したい業務やテーマが未整理でも問題ありません。現状の困りごとから書いていただければ大丈夫です。
            </p>
          </section>

          <section className="rounded-2xl border bg-background p-6">
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
            <h2 className="text-2xl font-heading">問い合わせ後の流れ</h2>
            <ol className="mt-4 space-y-3 text-muted-foreground">
              {flowItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-2xl border bg-background p-6">
            <h2 className="text-2xl font-heading">FAQ</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {faqItems.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-medium text-foreground">{faq.question}</h3>
                  <p className="mt-1 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/kansai-career">90分 AI導入相談の詳細を見る</Link>
              </Button>
            </div>
          </section>
        </div>

        <div className="w-full">
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                送信フォーム
              </p>
              <h2 className="text-2xl font-heading">相談内容を送る</h2>
              <p className="text-sm text-muted-foreground leading-7">
                相談したい業務やテーマが未整理でも問題ありません。流入元には「90分 AI導入相談」やイベント名をご記入ください。
              </p>
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
