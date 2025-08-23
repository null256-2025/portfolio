import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "お問い合わせありがとうございました",
  description: "お問い合わせを送信いただき、ありがとうございました。48時間以内にご連絡いたします。",
};

export default function ContactThanksPage() {
  return (
    <PageContainer
      title="送信完了"
      description="お問い合わせありがとうございました"
    >
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-8">
        {/* 成功アニメーション */}
        <div className="flex justify-center">
          <Icons.successAnimated className="text-green-500" />
        </div>

        {/* メッセージ */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">
            送信完了！
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            お問い合わせいただき、ありがとうございます。
            <br />
            48時間以内にご連絡いたします。
          </p>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/">
              <Icons.chevronLeft className="w-4 h-4 mr-2" />
              トップページに戻る
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              別のお問い合わせをする
            </Link>
          </Button>
        </div>

        {/* 追加情報 */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50 max-w-md">
          <p className="text-sm text-muted-foreground">
            <Icons.infoMark className="w-4 h-4 inline mr-2" />
            お急ぎの場合は、SNSからもお気軽にご連絡ください。
          </p>
        </div>
      </div>
    </PageContainer>
  );
}