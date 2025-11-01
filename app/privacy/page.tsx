import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ほぼ機能のないポモドーロタイマー",
  description: "本アプリにおけるデータの取扱いについて記載しています。",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 prose prose-neutral">
      <h1>プライバシーポリシー</h1>
      <p>
        本プライバシーポリシーは、アプリ「ほぼ機能のないポモドーロタイマー」
        （以下「本アプリ」）における個人情報の取扱いについて説明するものです。
      </p>

      <h2>1. 収集する情報</h2>
      <p>
        本アプリでは広告配信のために Google AdMob を利用します。AdMob は広告の最適化のために
        匿名の広告ID等を収集する場合があります。これらの情報から個人を特定することはありません。
      </p>

      <h2>2. 利用目的</h2>
      <p>広告配信およびサービス改善のために利用します。</p>

      <h2>3. 第三者への提供</h2>
      <p>
        開発者はユーザーの個人情報を第三者へ提供・販売しません。
        ただし広告配信等の第三者サービスにより、匿名化データが自動処理される場合があります。
      </p>

      <h2>4. データの管理</h2>
      <p>
        本アプリ自体はサーバーに個人データを保存しません。広告SDKが収集するデータは
        Google社のポリシーに従って管理されます。
      </p>

      <h2>5. お問い合わせ</h2>
      <p>
        開発者：小森 貴文（NULL256）<br />
        メール：<a href="mailto:info@null256.xyz">info@null256.xyz</a>
      </p>

      <h2>6. 変更</h2>
      <p>
        本ポリシーは必要に応じて予告なく変更される場合があります。改定後は本ページ掲載時に効力を生じます。
      </p>

      <hr />

      <h1>Privacy Policy (English)</h1>
      <p>
        This policy explains how personal information is handled in the app
        “Minimal Pomodoro Timer”.
      </p>

      <h2>1. Information Collection</h2>
      <p>
        We use Google AdMob to serve ads. AdMob may collect non-personal data
        (e.g., Advertising ID) to optimize ads. This data does not identify you.
      </p>

      <h2>2. Purpose of Use</h2>
      <p>For ad delivery and app improvement only.</p>

      <h2>3. Data Sharing</h2>
      <p>
        The developer does not sell or share personal information. Anonymized
        data may be processed by third-party services like Google AdMob.
      </p>

      <h2>4. Data Management</h2>
      <p>
        This app does not store user data on its own servers. Ad-related data is
        governed by Google’s privacy policy.
      </p>

      <h2>5. Contact</h2>
      <p>
        Developer: Takafumi Komori (NULL256) —{" "}
        <a href="mailto:info@null256.xyz">info@null256.xyz</a>
      </p>

      <h2>6. Updates</h2>
      <p>We may update this policy without notice. Changes take effect once posted.</p>
    </main>
  );
}
