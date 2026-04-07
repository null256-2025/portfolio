# Rebuild Implementation Spec

最終更新: 2026-03-30

## 1. このドキュメントの目的

このドキュメントは、既存サイトを部分修正するのではなく、営業導線を最優先にした新規プロジェクトをゼロから再構築するための実装設計書です。

前提は以下です。

1. 目的は `90分 AI導入相談` の申込み獲得
2. トップページは `総合案内` ではなく `営業LP`
3. `何ができるか` ではなく `自社の悩みを相談してよいか` を最短で判断できる構成にする
4. 既存プロジェクトの技術基盤とデザインの良い部分は引き継ぐ
5. 既存プロジェクトの余分な依存や、導線を分散させる設計は持ち込まない

---

## 2. 現行プロジェクトの調査結果

### 2-1. 現在の技術基盤

現行プロジェクトで実際に使われている主な基盤は以下です。

- Next.js 14 系
- React 18 系
- TypeScript 5 系
- Tailwind CSS 3 系
- App Router 構成
- `shadcn/ui` 系の構成
- Radix UI primitives
- `framer-motion`
- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `lucide-react`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- Resend
- Google Analytics (`@next/third-parties`)
- Vercel Analytics

### 2-2. 現在のデザイン基盤

現行コードから継承すべきデザイン要素は以下です。

- 基本はライトテーマ固定
- タイポグラフィは `Zen Maru Gothic`
- 配色は白背景 + 濃いネイビー系 primary + 薄いグレーの muted
- Tailwind の CSS Variables ベース
- 丸みのあるカードと細いボーダー
- `framer-motion` による軽いフェードアップ
- フォームは `react-hook-form + zod`

### 2-3. 現行から持ち込まないもの

現行にはあるが、新規プロジェクトの初期段階では不要なもの。

- `antd`
- `@sendgrid/mail`
- `nodemailer`
- `react-icons`
- `next-themes`
- `zustand`
- 複数テーマ切替用の CSS 変数群
- 総合案内型のグローバルナビ
- トップと専用ページの内容重複

### 2-4. 現行から継承する設計思想

- App Router のディレクトリ構成
- UI primitives を `components/ui` に分離する方針
- `config` でページ文言やメタ情報を持つ方針
- `ClientPageWrapper` / `AnimatedSection` のようなシンプルなページ演出
- 余白とタイポを主体に見せる軽量なレイアウト

---

## 3. 新規プロジェクトの方針

### 3-1. サイトの役割

この新規サイトの役割は一つです。

`90分 AI導入相談` を申し込むかどうかを判断させ、申し込みへ進ませること。

### 3-2. サイトの構造方針

- トップページが主LP
- 詳細ページは補強ページ
- 申込みページは最終フォーム
- 実績ページと事例ページは CV 前の信頼補強
- 業務別ページは第2フェーズ以降で追加

### 3-3. コピー方針

- 1見出し1メッセージ
- 短い断定文
- 英語ラベルを使わない
- 制作意図や理念を前に出さない
- `伴走します` だけで逃げない
- `何が決まるか` `何が持ち帰れるか` を優先する
- 長い段落では説得しない

### 3-4. デザイン方針

- 1セクション1目的
- Hero と CTA の強弱を明確にする
- 同じ見た目のカードを延々と並べない
- 余白と文字サイズで階層を見せる
- 抽象イラストを主役にしない
- 実績画像、登壇画像、プロフィール写真などの証拠素材を優先する

---

## 4. 採用技術スタック

## 4-1. 採用する技術

### Core

- Next.js 14.x
- React 18.x
- TypeScript 5.x
- App Router

### Styling

- Tailwind CSS 3.x
- `tailwindcss-animate`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

### UI

- Radix UI
- `shadcn/ui` 構成
- `lucide-react`

### Motion

- `framer-motion`

### Forms / Validation

- `react-hook-form`
- `zod`
- `@hookform/resolvers`

### Mail / Tracking

- Resend
- Google Analytics
- Vercel Analytics

## 4-2. 採用しない技術

- `antd`
- `@sendgrid/mail`
- `nodemailer`
- `next-themes`
- `zustand`
- テーマ切替機能
- 過剰な UI ライブラリ併用

## 4-3. 理由

- 営業LPに必要な UI は Tailwind + Radix + shadcn で十分
- Mail は Resend だけに統一した方が保守しやすい
- ダークモードや複数テーマは今回の目的に不要
- 状態管理は MVP ではページ内 state で十分

---

## 5. 新規プロジェクトの初期セットアップ手順

## 5-1. プロジェクト作成

```bash
npx create-next-app@latest ai-consultation-lp --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"
```

## 5-2. 依存追加

```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers class-variance-authority clsx tailwind-merge resend @next/third-parties @vercel/analytics

npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip

npm install -D prettier prettier-plugin-organize-imports
```

## 5-3. shadcn 構成導入

```bash
npx shadcn@latest init
```

必要コンポーネント:

- button
- card
- input
- textarea
- form
- accordion
- toast
- dialog
- tooltip

## 5-4. 初期設定

1. `app/globals.css` に現行の CSS Variables ベースを移植
2. フォントを `Zen Maru Gothic` に固定
3. ライトテーマ固定にする
4. `metadata`, `openGraph`, `twitter`, `robots`, `GA` を `app/layout.tsx` で設定
5. `config/site.ts` を作り、サイト名・URL・OGP・SNS を一元管理

---

## 6. 推奨ディレクトリ構成

```text
app/
  layout.tsx
  globals.css
  page.tsx
  consultation/
    page.tsx
  contact/
    page.tsx
    thanks/
      page.tsx
  experience/
    page.tsx
  cases/
    page.tsx
  api/
    contact/
      route.ts

components/
  common/
    client-page-wrapper.tsx
    animated-section.tsx
    animated-text.tsx
    page-shell.tsx
    site-header.tsx
    site-footer.tsx
  consultation/
    home/
      hero-section.tsx
      issue-grid.tsx
      outcome-grid.tsx
      process-grid.tsx
      proof-grid.tsx
      faq-section.tsx
      final-cta.tsx
    detail/
      detail-hero.tsx
      fit-section.tsx
      scope-section.tsx
      timeline-section.tsx
      proof-grid.tsx
      detail-faq.tsx
      detail-cta.tsx
    shared/
      hero-summary-card.tsx
      issue-card.tsx
      proof-card.tsx
      process-step.tsx
      faq-list.tsx
      section-heading.tsx
      stat-chip.tsx
  forms/
    consultation-form.tsx
  proofs/
    experience-card.tsx
    experience-group.tsx
  cases/
    case-card.tsx
    case-section.tsx
  ui/
    button.tsx
    card.tsx
    form.tsx
    input.tsx
    textarea.tsx
    accordion.tsx
    toast.tsx

config/
  site.ts
  navigation.ts
  consultation.ts
  proofs.ts
  faqs.ts

lib/
  utils.ts
```

### 6-1. ページごとの実ファイル責務

#### `app/page.tsx`

- トップLPの組み立てだけを行う
- セクション本文は `components/consultation/home/*` へ逃がす
- ここに長い文言や配列をべた書きしない

#### `app/consultation/page.tsx`

- 詳細ページの組み立てだけを行う
- 向いている会社、含むもの、FAQ などはコンポーネント化する

#### `app/contact/page.tsx`

- 左カラム説明 + 右カラムフォームのレイアウトのみ
- 入力項目定義は `consultation-form.tsx`
- API仕様は `app/api/contact/route.ts`

#### `app/experience/page.tsx`

- 実績一覧のレイアウトとグルーピングのみ
- 実績カード表示は `components/proofs/*`

#### `app/cases/page.tsx`

- 事例一覧のレイアウトのみ
- 事例カード表示は `components/cases/*`

### 6-2. セクション単位の実装分割

トップLPは次のコンポーネント単位で分割する。

- `hero-section.tsx`
- `issue-grid.tsx`
- `outcome-grid.tsx`
- `process-grid.tsx`
- `proof-grid.tsx`
- `faq-section.tsx`
- `final-cta.tsx`

詳細ページは次のコンポーネント単位で分割する。

- `detail-hero.tsx`
- `fit-section.tsx`
- `scope-section.tsx`
- `timeline-section.tsx`
- `proof-grid.tsx`
- `detail-faq.tsx`
- `detail-cta.tsx`

### 6-3. `config` に持つべきデータ

#### `config/consultation.ts`

持つ内容:

- Hero文言
- issue cards
- outcome cards
- process cards
- consultation summary
- fit / unfit
- include / exclude
- CTA文言

#### `config/proofs.ts`

持つ内容:

- トップ掲載用 proof IDs
- 詳細ページ掲載用 proof IDs
- 実績ページのカテゴリ別掲載順
- 各実績に対する営業文脈メモ

#### `config/cases.ts`

持つ内容:

- case IDs
- 各事例の `課題 / 整理 / 試行 / 変化`
- どの業務向けの参考事例か

#### `config/navigation.ts`

持つ内容:

- ヘッダーナビ項目
- フッター項目
- CTAリンク

### 6-4. このディレクトリ構成にした理由

- ページファイルを薄く保つため
- LPの文言改修をコンポーネント差し替えで済ませるため
- 実績と事例の棚卸しを `config` で管理するため
- 将来、業務別ページを追加しても構造が崩れないため

---

## 7. サイトマップ

| パス | 役割 | 主CTA |
| --- | --- | --- |
| `/` | 主LP | `90分相談を申し込む` |
| `/consultation` | 相談詳細・補強 | `90分相談を申し込む` |
| `/contact` | 最終申込み | `送信する` |
| `/contact/thanks` | 完了 | `トップへ戻る` |
| `/experience` | 実績確認 | `相談詳細を見る` |
| `/cases` | 事例確認 | `相談詳細を見る` |

第2フェーズ以降:

- `/audiences/hr-recruiting`
- `/audiences/training-education`
- `/audiences/sales-planning`
- `/audiences/back-office`

### 7-1. ページと表示内容の対応表

| ページ | 表示するもの | 表示しないもの |
| --- | --- | --- |
| `/` | 相談対象、相談で決まること、申込み後の流れ、実績3件、FAQ、主CTA | 自己紹介長文、職種別一覧、作品一覧、複数商品比較 |
| `/consultation` | 対象/対象外、含むもの/含まないもの、当日の進め方、実績補強、FAQ、申込みCTA | トップと同じ Hero の繰り返し、技術一覧 |
| `/contact` | 最小フォーム、送信後の流れ、申込み前の補足 | 大量の任意項目、流入元、汎用問い合わせ導線 |
| `/experience` | 登壇、書籍、導入支援の証拠 | 個人制作作品の大量掲載 |
| `/cases` | 課題別の事例カード | 開発技術中心の説明 |

### 7-2. 画面遷移

基本導線は次の1本に固定する。

1. `/`
2. `/consultation`
3. `/contact`
4. `/contact/thanks`

補助導線:

- `/` -> `/experience`
- `/` -> `/cases`
- `/consultation` -> `/experience`
- `/consultation` -> `/cases`

---

## 8. 各ページのレイアウト設計

## 8-1. `/` トップページ

### ページの役割

最短で「この相談は自社向けか」「申し込んでよいか」を判断させる主LP。

### セクション順

1. Hero
2. こういう状態なら相談対象
3. 90分で整理する内容
4. 申込み後の流れ
5. 実績
6. FAQ
7. 最後のCTA

### セクションごとの責務

#### 1. Hero

- 5秒で何の相談か分からせる
- 主CTAを一番強く見せる
- summary card で時間・価格・持ち帰りを見せる

#### 2. こういう状態なら相談対象

- 訪問者が「自分向けか」を判断するためのセクション
- 会社の悩みを言語化する

#### 3. 90分で整理する内容

- 何が決まるかを3点で明示する
- 抽象的な `支援します` を避ける

#### 4. 申込み後の流れ

- 送信後が不安な人向け
- NDA や日程調整まで含めた安心感を作る

#### 5. 実績

- 相談してよさそうかを判断させる
- トップでは3件まで

#### 6. FAQ

- 申込み直前の不安だけを潰す

#### 7. 最後のCTA

- 迷っている人を最終的に `/contact` へ送る

### Hero に書くこと

- バッジ: `90分 AI導入相談`
- H1: `何から始めるかを、90分で決めます`
- 説明: `生成AIを試したい。ただ、対象業務もルールも決まっていない。そんな導入前の整理に絞った相談です。`
- 主CTA: `90分相談を申し込む`
- 従CTA: `相談の詳細を見る`
- 補足: `いきなり開発はしません。まず、何を試すかの整理から進めます。`
- 右カラム summary:
  - 所要時間: `90分`
  - 価格: `3万円〜`
  - 実施形式: `オンライン対応可`
  - 持ち帰り: `試す業務 / 使う範囲 / 次の2週間`

### こういう状態なら相談対象

4項目までに絞る。

- AIを試したいが、何から始めるか決まっていない
- 社内で使い始めたが、ルールと確認方法が曖昧
- 提案書、議事録、FAQなどの負荷が大きい
- 開発発注の前に、現場側で論点を整理したい

### 90分で整理する内容

3カード。

- 試す業務を1つに絞る
- 使う範囲を決める
- 次の2週間を固める

### 申込み後の流れ

3ステップ。

- 現状確認
- 対象整理
- 次の一歩

### 実績

トップで出す実績は3件まで。

優先順:

1. 書籍掲載
2. 企業向け登壇
3. 中小企業向けワークショップ

実績カードに入れる情報:

- 固有名詞
- 何をしたか
- 誰向けか
- 詳細リンク

### 実際に使う実績

#### 1. 技術情報協会

- 種別: 書籍執筆
- 表示名: `技術情報協会 / 書籍執筆（分担執筆）`
- 要約: `生成AIによる業務効率化と活用事例を分担執筆`
- 使う理由: `単発の勉強会ではなく、知見を外部に出せる人だと伝わる`
- 元データ: `publication-20250331`

#### 2. 株式会社アイエンター

- 種別: 企業向けオンラインセミナー
- 表示名: `株式会社アイエンター / 生成AI最新トレンドとAIエージェント`
- 要約: `DX・業務改善担当向けに最新トレンドと導入論点を解説`
- 使う理由: `企業向け説明力の証拠になる`
- 元データ: `ext-seminar-20250226`

#### 3. ソフト産業プラザ TEQS

- 種別: 実践型ワークショップ
- 表示名: `ソフト産業プラザ TEQS / クリエイティブAIでビジネスを加速`
- 要約: `中小企業向けに、手を動かす形式でAI活用を共有`
- 使う理由: `非エンジニア相手でも実務に落として話せる`
- 元データ: `teqs-creative-ai-20251205`

### FAQ

4問まで。

- テーマ未整理でもよいか
- いきなり開発前提でなくてもよいか
- オンラインで可能か
- 相談後に何を依頼できるか

### トップに書かないこと

- 長い自己紹介
- 職種別4ページへの強い導線
- 複数商品比較
- 技術一覧
- ポートフォリオ色の強い作品紹介

---

## 8-2. `/consultation` 相談詳細ページ

### ページの役割

トップだけでは不安な人向けに、対象・含む内容・含まない内容・進め方を確認させる補強ページ。

### セクション順

1. 冒頭要約
2. 向いている会社 / 向いていない相談
3. この相談で整理すること
4. 含むもの / 含まないもの
5. 当日の進め方
6. 実績
7. FAQ
8. CTA

### セクションごとの責務

#### 1. 冒頭要約

- トップでは不安な人向けに、相談内容を短く再確認させる

#### 2. 向いている会社 / 向いていない相談

- 対象をはっきり切る
- 問い合わせの質を下げない

#### 3. この相談で整理すること

- 期待値を合わせる

#### 4. 含むもの / 含まないもの

- 丸投げ依頼や見積り前提の誤認を防ぐ

#### 5. 当日の進め方

- 実施イメージを持たせる

#### 6. 実績

- トップより少し詳しく見せる

#### 7. FAQ

- 相談だけで終えてよいか、データ不要か等を明記する

#### 8. CTA

- 内容を確認した人を `/contact` に送る

### 冒頭要約に書くこと

- タイトル: `90分 AI導入相談の詳細`
- 説明: `申し込む前に、対象・含む内容・進め方を確認できるページです。`
- CTA: `90分相談を申し込む`
- summary:
  - 所要時間
  - 価格
  - 実施形式
  - 持ち帰るもの

### 向いている会社

- AIを試したいが、対象業務が決まっていない
- 社内ルールを曖昧なまま始めたくない
- 文書業務の負荷が高い
- いきなり大規模開発ではなく小さく試したい
- 現場目線で導入前整理をしたい

### 向いていない相談

- 要件も目的も決まっていない丸投げ開発
- 補助金申請だけが目的
- 社内調整の完全代行だけを求める依頼

### 含むもの

- 現状整理
- 対象業務の切り分け
- AI と人の役割分担整理
- 次の2週間の進め方

### 含まないもの

- その場での要件定義書確定
- その場での開発見積り確定
- 補助金申請の代行
- 社内稟議文書の代筆

### 当日の進め方

1. 現状確認
2. 対象整理
3. 次の一歩

### 詳細ページに書かないこと

- トップと同じ Hero 文言の繰り返し
- 作品一覧
- 開発メニューの羅列

---

## 8-3. `/contact` 申込みページ

### ページの役割

最終申込み専用ページ。迷わせず送信させる。

### セクション構成

左カラム:

1. 5項目だけで送れる説明
2. 本文に書いてほしいこと
3. 送信後の流れ
4. 申込み前の補足

右カラム:

1. 申込みフォーム

### 見出しと文言

- タイトル: `90分 AI導入相談のお申し込み`
- 説明: `5項目だけで送れます。通常2営業日以内に返信します。`
- 左上ボックス:
  - 見出し: `5項目だけで送れます`
  - 文: `相談テーマが固まっていなくても大丈夫です。まずは、今困っていることをそのままお送りください。`

### フォーム項目

必須:

- お名前
- メールアドレス
- ご相談内容

任意:

- 会社名
- ご担当 / 部署

### ご相談内容の placeholder

`例: 営業資料づくりを効率化したい。提案書と議事録のどちらから試すべきか相談したい。社内で使う範囲も整理したい。`

### 本文に書いてほしいこと

- 今困っていること
- 試したい業務や部署
- 社内で気になっている制約や不安

### 送信後の流れ

- 2営業日以内に返信
- 日程調整
- 必要に応じて NDA 調整

### contact に書かないこと

- 多数の任意入力
- 流入元
- テーマ選択肢の列挙
- 相談メニュー一覧
- FAQ の大量掲載

---

## 8-4. `/experience` 実績ページ

### ページの役割

発注判断用の証拠確認ページ。

### 構成

1. 冒頭要約
2. 登壇実績
3. 書籍・寄稿
4. 開発・導入支援
5. CTA

### 実績ページに載せる具体素材

#### A. 登壇・研修

- `ext-seminar-20240404`
  - 表示テーマ: 生成AIのビジネス活用術
  - 見せ方: 基礎から導入ポイントまで説明できる
- `ext-seminar-20240711`
  - 表示テーマ: ChatGPTプロンプトスキル
  - 見せ方: ハンズオン形式で、実務に落とした説明ができる
- `ext-seminar-20250226`
  - 表示テーマ: 生成AI最新トレンド / AIエージェント
  - 見せ方: 最新動向と実務導入をつなげて話せる
- `teqs-creative-ai-20251205`
  - 表示テーマ: クリエイティブAIでビジネスを加速
  - 見せ方: 中小企業向けの実践型ワークショップ実績

#### B. 書籍・寄稿

- `publication-20250331`
  - 表示テーマ: 実験の自動化・自律化によるR&D効率化
  - 見せ方: 生成AI活用を外部向けに文章化できる

#### C. 開発・導入支援

- `i-enter-2023`
  - 表示テーマ: React / Dify / ChatGPT を組み込んだ業務システム開発
  - 見せ方: 相談だけでなく、必要なら実装までつなげられる
- `hanshin-logitec-2022`
  - 表示テーマ: 社内ITの立て直しと導入整理
  - 見せ方: 現場・運用・導入前整理の現実感がある

### 見せ方

- 件数より固有名詞
- 時系列より営業上の信頼順
- 1カード1実績
- `何をしたか` `誰向けか` `どう相談に効くか` を短く入れる

---

## 8-5. `/cases` 事例ページ

### ページの役割

相談後のイメージを具体化するページ。

### 1事例あたりのフォーマット

- 課題
- どう整理したか
- 何を試したか
- 何が変わったか

### 優先事例

- 文書業務
- FAQ / 問い合わせ整理
- ワークショップ / 研修
- 小規模 PoC

### 事例ページに載せる具体素材

#### Case 1. 生成AIワークショップ

- 元データ: `generative-ai-workshop-for-companies-and-communities`
- 使いどころ: 研修・教育、導入前勉強会
- 見せる観点:
  - 課題: 何に使えるか分からない
  - 整理: 活用シーンを分けて説明
  - 試行: ハンズオンで手を動かす
  - 変化: 社内で試すイメージを持てる

#### Case 2. Interview Buddy

- 元データ: `interview-buddy-ai-coach`
- 使いどころ: 人事・採用、面接支援、評価コメント整理
- 見せる観点:
  - 課題: 面接票や評価の標準化
  - 整理: AIを使う箇所と参考情報の線引き
  - 試行: 模擬面接と評価支援
  - 変化: 人事業務への導入イメージ

#### Case 3. 保育だより・連絡帳 下書きAI

- 元データ: `hoikuru-ai-poc`
- 使いどころ: 文書業務、定型文、PoC
- 見せる観点:
  - 課題: 文書作成の負荷
  - 整理: 下書き生成に限定
  - 試行: 小さなPoCで安全に検証
  - 変化: 文書業務から始める導入イメージ

#### Case 4. Dify × GAS × LINE ボット

- 元データ: `in-house-ai-propulsion-daily-report-summarization-and-notification-automation`
- 使いどころ: 業務フロー自動化、小規模連携
- 見せる観点:
  - 課題: 既存ツールをつなぎたい
  - 整理: ノーコード + スクリプトで軽量に構成
  - 試行: 小さく実装
  - 変化: PoCから運用判断へ

#### Case 5. 保育ルームAIチャットサポート

- 元データ: `hoikuru-ai-chat-support`
- 使いどころ: FAQ、問い合わせ整理、チャット支援
- 見せる観点:
  - 課題: 問い合わせ対応の属人化
  - 整理: FAQ と応答範囲を分ける
  - 試行: チャット支援を小さく実装
  - 変化: 問い合わせ整理のイメージ

#### Case 6. TrendTune

- 元データ: `trendtune-youtube-analysis-mvp`
- 使いどころ: ナレッジ整理、分析支援
- 見せる観点:
  - 課題: 情報整理に時間がかかる
  - 整理: 欲しいアウトプットを先に決める
  - 試行: MVP で素早く可視化
  - 変化: 小さく試して判断する進め方

### 事例ページに載せない素材

- `nanobanana-studio`
- `yofuke-no-toudai`
- `seiran`
- `symmetrical-drawing-app`

理由:

- 営業導線の信頼補強より、個人制作色が強い
- LP で見せるべき事例ではない

---

## 8-6. 実装者向けのページ別 TODO

### `/`

作るファイル:

- `app/page.tsx`
- `components/consultation/home/hero-section.tsx`
- `components/consultation/home/issue-grid.tsx`
- `components/consultation/home/outcome-grid.tsx`
- `components/consultation/home/process-grid.tsx`
- `components/consultation/home/proof-grid.tsx`
- `components/consultation/home/faq-section.tsx`
- `components/consultation/home/final-cta.tsx`

完了条件:

- セクションが 7 以内
- 主CTAが `/contact`
- proof が 3 件表示される

### `/consultation`

作るファイル:

- `app/consultation/page.tsx`
- `components/consultation/detail/detail-hero.tsx`
- `components/consultation/detail/fit-section.tsx`
- `components/consultation/detail/scope-section.tsx`
- `components/consultation/detail/timeline-section.tsx`
- `components/consultation/detail/proof-grid.tsx`
- `components/consultation/detail/detail-faq.tsx`
- `components/consultation/detail/detail-cta.tsx`

完了条件:

- 含むもの / 含まないもの がある
- 対象 / 対象外 がある
- CTA が `/contact`

### `/contact`

作るファイル:

- `app/contact/page.tsx`
- `components/forms/consultation-form.tsx`
- `app/api/contact/route.ts`
- `app/contact/thanks/page.tsx`

完了条件:

- 入力項目が 5 項目
- Resend 送信成功
- thanks ページ遷移

### `/experience`

作るファイル:

- `app/experience/page.tsx`
- `components/proofs/experience-group.tsx`
- `components/proofs/experience-card.tsx`

完了条件:

- 登壇 / 書籍 / 導入支援 の3カテゴリで表示
- 固有名詞が前面に出ている

### `/cases`

作るファイル:

- `app/cases/page.tsx`
- `components/cases/case-section.tsx`
- `components/cases/case-card.tsx`

完了条件:

- 各事例が `課題 / 整理 / 試行 / 変化` で表示される
- 個人制作色の強い事例が混ざっていない

---

## 8-7. 素材台帳の参照先

実績・事例の画像、動画、アイコン、外部URLは `REBUILD_ASSET_MANIFEST.md` を参照すること。

実装前に確認するもの:

- `REBUILD_ASSET_MANIFEST.md`
- `rebuild_asset_bundle/` フォルダ

運用ルール:

- 新規リポジトリへ移す素材は `rebuild_asset_bundle/` を起点にコピーする
- テキストだけで実装しない
- 外部URLしかない素材は、台帳に書かれた運用ルールに従う

---

## 9. ナビゲーション方針

## 9-1. ヘッダーナビ

MVP では以下だけに絞る。

- 相談トップ
- 相談の詳細
- 実績
- 事例
- お申し込み

### 置かないもの

- Home
- Contact
- Skills
- AI
- 職種別4ページの直リンク

業務別ページは第2フェーズで、詳細ページまたは事例ページから遷移させる。

---

## 10. デザイン仕様

## 10-1. 配色

現行のトーンを踏襲する。

- Background: 白
- Foreground: 濃いネイビー
- Primary: 濃いネイビー
- Muted: 薄いグレー
- Border: 薄いグレー

### 重要

- primary は濃い色のまま維持
- 無難な紫系に寄せない
- ダークモードは作らない

## 10-2. フォント

- 本文: `Zen Maru Gothic`
- 見出し: `Zen Maru Gothic`

もし次段で改善するなら:

- 見出しだけ別書体にしてもよい
- ただし MVP は現行踏襲を優先

## 10-3. 角丸と影

- 角丸は `16px〜32px` を中心
- 影は薄く
- Hero, CTA, proof だけ見た目の重みを上げる
- それ以外は border ベース

## 10-4. 動き

- Hero: 1回のフェードアップ
- セクション見出し: 軽いフェード
- CTA: hover のみ

やりすぎないこと。

---

## 11. 実装ステップ

## Phase 0. 初期化

1. Next.js プロジェクト作成
2. Tailwind / shadcn / Radix 導入
3. layout, metadata, analytics, font, globals をセット

## Phase 1. デザイン基盤

1. `globals.css` に CSS Variables を設定
2. `button`, `card`, `form`, `input`, `textarea`, `accordion`, `toast` を作成
3. `ClientPageWrapper`, `AnimatedSection`, `AnimatedText` を移植
4. `site-header`, `site-footer`, `page-shell` を作成

## Phase 2. コンテンツ設定ファイル

1. `config/site.ts`
2. `config/navigation.ts`
3. `config/consultation.ts`
4. `config/proofs.ts`
5. `config/faqs.ts`

この段階でコピーを固定する。

## Phase 3. ページ実装

1. `/`
2. `/consultation`
3. `/contact`
4. `/contact/thanks`
5. `/experience`
6. `/cases`

実装順を逆にしない。

## Phase 4. フォーム / API

1. `react-hook-form + zod`
2. `/api/contact`
3. Resend 送信
4. success / error toast

## Phase 5. SEO / 計測

1. `metadata`
2. OGP
3. sitemap
4. robots
5. Google Analytics
6. Vercel Analytics

## Phase 6. QA

1. mobile
2. desktop
3. CTA 導線
4. フォーム送信
5. console error
6. alt text

---

## 12. コンテンツルール

### 必須ルール

- 1文は短く
- 1段落で説明しすぎない
- 見出しで意味が通るようにする
- 主語はユーザーの悩み側に置く
- 事実と成果を先に書く

### 禁止表現

- `伴走します`
- `お気軽にご相談ください` だけで終わる CTA
- `幅広く対応可能です`
- `課題解決を支援します`
- `AIを活用して業務改善します`
- `ポートフォリオ`
- 英語ラベル

### 推奨表現

- `何から始めるかを、90分で決めます`
- `試す業務を1つに絞ります`
- `使う範囲を決めます`
- `次の2週間の動きを固めます`
- `いきなり開発はしません`

---

## 13. 受け入れ条件

## トップページ

- 5秒以内に `何を相談できるか` が分かる
- 主CTAが1つに収束している
- Hero に複数商品が出ていない
- セクションが 7 以内

## 相談詳細ページ

- 向いている会社 / 向いていない相談がある
- 含むもの / 含まないものがある
- CTA が `/contact` に固定されている

## 申込みページ

- フォーム項目が 5 つ
- 送信前に迷わない
- 2営業日以内返信が明示されている

## 実績・事例

- 固有名詞で判断できる
- `何をしたか` が短く読める
- 相談にどう効くかが分かる

---

## 14. 旧サイトからの移行方針

新プロジェクトではパスを整理する。

推奨:

- `/` 維持
- `/kansai-career` は廃止し `/consultation` へ変更
- `/projects` は `/cases` に寄せる
- `/contact` は維持

リダイレクト方針:

- `/kansai-career` -> `/consultation`
- `/projects` -> `/cases`

もし既存URLを維持したいなら、MVP では `/kansai-career` を残してもよい。
ただし新規構築時点では、URL 名称も営業目的に合わせた方が望ましい。

---

## 15. 最終判断

新規プロジェクトでは、既存コードの「UI 部品」と「技術基盤」は引き継いでよいです。
ただし、以下は捨てる前提で進めるべきです。

- 総合案内型ナビ
- ポートフォリオ前提の情報設計
- 多テーマ切替
- 複数ライブラリの重複
- トップと専用ページの内容重複
- 長い説明文

作るべきものは `見た目のよいサイト` ではなく、`申込み判断がしやすい営業LP` です。

このドキュメント通りに進めれば、既存サイトの雰囲気は維持しつつ、導線だけを営業仕様に作り直せます。
