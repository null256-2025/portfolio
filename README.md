# ポートフォリオサイト

このリポジトリは、私のポートフォリオサイトです。Next.js 14、TypeScript、Tailwind CSS を用いて構築し、自己紹介、スキル、職務経歴、制作物、連絡先をまとめています。

## 概要
- 名前: 小森 貴文 / Komori Takafumi
- 肩書き: フロントエンドエンジニア／AI開発者
- 関心領域: 生成AI活用、業務自動化、フロントエンド、Next.js、YouTube運営・分析
- 拠点: 大阪・梅田 / 夜・土日対応可

## 自己紹介
大阪在住のフロントエンドエンジニア／AI開発者。社内AI推進担当として、業務の自動化やデータ活用を設計・実装してきました。人前での説明やワークショップが得意で、難しいことを“わかりやすく”形にします。いまはソロプレーナーとして、個人・小規模事業者の課題を素早くPoC→運用までつなぐ伴走をしています。

### 強み・ハイライト
- React / Next.js によるフロント実装
- ChatGPT・API連携での自動化設計（BYOK対応）
- YouTubeチャンネル分析MVPの開発
- ワークショップ/研修の企画と登壇

## スキル
- 言語: TypeScript / JavaScript
- フレームワーク: Next.js / React / Node.js
- ツール: Tailwind CSS / Vercel / GAS / Slack API / YouTube Data API / OpenAI API
- 提供メニュー: 30日AIスプリント / YouTube運営・分析 / 社内自動化（GAS/Slack/API） / 生成AIワークショップ

詳細はサイト上のスキル一覧をご覧ください。

## 職務経歴・プロジェクト
- 主要な経験を年表形式で掲載しています。
- 各プロジェクトは技術要素・役割・成果・リンク（公開可能な場合）を記載しています。

サイト上の掲載内容は次の設定から更新できます。
- `portfolio/portfolio.json`: プロフィール・自己紹介・プロジェクト・スキル・連絡先の中核データ
- `config/site.ts`: 基本プロフィールやサイト情報
- `config/skills.ts`: スキル一覧
- `config/projects.ts`: プロジェクト一覧
- `config/experience.ts`: 職務経歴（タイムライン）

## 連絡先
- X: https://x.com/Null256x
- LinkedIn: https://www.linkedin.com/in/%E8%B2%B4%E6%96%87-%E5%B0%8F%E6%A3%AE-53b079376/
- note: https://note.com/null256
- GitHub: https://github.com/null256-2025/portfolio

必要に応じて `.env.local` を設定し、問い合わせフォームなどの機能を有効化できます（導入している場合）。

## ローカル開発
```bash
npm install
npm run dev
# http://localhost:3000 を開く
```

## デプロイ
Vercel 等のホスティングに対応しています。環境変数の設定後、リポジトリ連携でデプロイできます。

## このリポジトリで非掲載にしたもの
- テンプレート由来のデモ動画・スクリーンショット・Star History などの宣伝要素
- テンプレートの README コンテンツ

## 謝辞
このサイトはテンプレート（minimal-next-portfolio / by Naman Barkiya）をベースにカスタマイズしています。素晴らしいテンプレートの提供に感謝します。
