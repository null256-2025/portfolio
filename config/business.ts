export type AudienceSlug =
  | "hr-recruiting"
  | "training-education"
  | "sales-planning"
  | "back-office";

export interface ServiceOffer {
  title: string;
  price: string;
  summary: string;
  bullets: string[];
  href: string;
}

export interface AudiencePageConfig {
  slug: AudienceSlug;
  href: `/${AudienceSlug}`;
  navTitle: string;
  pageTitle: string;
  pageDescription: string;
  cardDescription: string;
  heroTitle: string;
  heroDescription: string;
  challenges: string[];
  capabilities: string[];
  offers: {
    title: string;
    description: string;
  }[];
  relatedProjectIds: string[];
  relatedExperienceIds: string[];
}

export const serviceOffers: ServiceOffer[] = [
  {
    title: "90分 AI導入相談",
    price: "3万円〜",
    summary:
      "対象業務の切り分け、運用ルールの整理、次の2週間で試す計画づくりまでを90分で行います。",
    bullets: [
      "対象業務を1テーマに絞る",
      "導入時の注意点とレビュー体制を整理する",
      "試行の優先順位と進め方を決める",
    ],
    href: "/kansai-career",
  },
  {
    title: "社内向けミニ研修",
    price: "8万円〜",
    summary:
      "部門別の活用例や安全な使い方を、現場の業務に合わせて短時間で共有します。",
    bullets: [
      "非エンジニア向けにわかりやすく説明",
      "職種別の使いどころを整理",
      "社内で回る運用の前提を合わせる",
    ],
    href: "/contact",
  },
  {
    title: "小規模PoC / 2週間パイロット",
    price: "15万円〜",
    summary:
      "1業務に限定して、小さく試し、使える形になるかを検証します。必要なら簡易実装までつなぎます。",
    bullets: [
      "1業務に絞って検証する",
      "最小限の画面やテンプレートに落とし込む",
      "次の運用フェーズに進む判断材料を残す",
    ],
    href: "/contact",
  },
];

export const homeChallenges = [
  "社内でAI活用に興味はあるが、何から始めればよいかわからない",
  "提案書、議事録、FAQ、研修資料などの作成負荷が大きい",
  "勝手利用が始まっており、ルールや線引きが曖昧になっている",
  "いきなり大きな開発ではなく、まず小さく試して判断したい",
  "開発会社に頼む前に、現場目線で整理してほしい",
];

export const trustPillars = [
  {
    title: "講師として伝えられる",
    description:
      "非エンジニアにも伝わる言葉で、使いどころと注意点を整理できます。",
  },
  {
    title: "PoCまでつなげられる",
    description:
      "相談で止まらず、必要に応じて画面や業務フローまで形にできます。",
  },
  {
    title: "導入の現実論を持っている",
    description:
      "ルール設計、レビュー体制、社内で回る運用まで含めて考えられます。",
  },
];

export const supportSteps = [
  {
    title: "相談",
    description: "まずは現状と困りごとを整理し、どこから始めるべきかを確認します。",
  },
  {
    title: "課題整理",
    description: "対象業務を絞り、AIを使う範囲と使わない範囲を決めます。",
  },
  {
    title: "小さく試す",
    description: "90分相談、ミニ研修、または小規模PoCのいずれかで検証を始めます。",
  },
  {
    title: "継続支援",
    description: "必要に応じて、運用設計や追加の導入支援へつなげます。",
  },
];

export const commonFaqs = [
  {
    question: "開発だけでも依頼できますか？",
    answer:
      "可能です。まずは対象業務と目的を整理したうえで、必要な範囲だけ対応します。",
  },
  {
    question: "研修だけでも依頼できますか？",
    answer:
      "可能です。社内勉強会、実務寄りのミニ研修など、小さく始められる形で対応します。",
  },
  {
    question: "社内データを渡さなくても相談できますか？",
    answer:
      "可能です。最初は実データを使わず、業務フローや困りごとの整理から始められます。",
  },
  {
    question: "オンラインでも相談できますか？",
    answer: "可能です。初回相談はオンライン対応可で、日程はメールで調整します。",
  },
];

export const audiencePages: AudiencePageConfig[] = [
  {
    slug: "hr-recruiting",
    href: "/hr-recruiting",
    navTitle: "人事・採用向け",
    pageTitle: "人事・採用向け",
    pageDescription:
      "面接メモ、評価コメント、採用文面、社内利用ルールなど、人事・採用業務の生成AI活用を小さく始めるためのページです。",
    cardDescription:
      "面接メモ、評価コメント、採用文面、社内利用ルールなど、人事・採用業務の負荷を軽くする生成AI活用を支援します。",
    heroTitle: "人事・採用業務のAI活用を、現場で回る形に整理します",
    heroDescription:
      "面接メモ、評価コメント、採用文面、社内利用ルールなど、人事・採用業務で生成AIをどう使うかを、小さく試せる形で支援します。",
    challenges: [
      "面接メモや評価コメントの整理に時間がかかる",
      "求人票やスカウト文の初稿作成が重い",
      "採用業務の記録が属人化している",
      "どこまでAIを使ってよいか線引きが難しい",
      "人事部門で試したいが、全社導入までは考えていない",
    ],
    capabilities: [
      "採用業務で時短しやすいポイントの整理",
      "面接記録や評価コメント作成の補助設計",
      "採用文面の初稿作成に関する使い方整理",
      "社内で安全に使うためのルールたたき台作成",
      "1テーマに絞った小規模な試行導入",
    ],
    offers: [
      {
        title: "面接メモ・評価コメント整理の時短相談",
        description:
          "面接記録や評価コメント作成の負荷を整理し、生成AIをどこにどう使うと現実的かを一緒に切り分けます。",
      },
      {
        title: "採用文面作成をラクにする生成AI活用ミニ研修",
        description:
          "求人票、スカウト文、候補者向け文面など、採用業務で使いやすい場面に絞って社内向けに共有します。",
      },
      {
        title: "採用業務1テーマ限定の小型PoC支援",
        description:
          "採用業務の中から1テーマだけを選び、小さく試して、使えるかどうかを検証します。",
      },
    ],
    relatedProjectIds: [
      "interview-buddy-ai-coach",
      "generative-ai-workshop-for-companies-and-communities",
    ],
    relatedExperienceIds: ["ext-seminar-20240711", "ext-seminar-20250226"],
  },
  {
    slug: "training-education",
    href: "/training-education",
    navTitle: "研修・教育向け",
    pageTitle: "研修・教育向け",
    pageDescription:
      "社内勉強会、研修資料、質問整理、運用ルールづくりなど、教育業務に生成AIをどう組み込むかを整理するページです。",
    cardDescription:
      "社内勉強会、研修資料、質問整理、運用ルールのたたき台など、教育業務に生成AIを取り入れる支援を行います。",
    heroTitle: "研修・教育業務に生成AIをどう組み込むかを支援します",
    heroDescription:
      "社内勉強会、研修資料、質問整理、運用ルールづくりなど、教育業務に合わせて生成AI活用を実務ベースで整理します。",
    challenges: [
      "研修資料作成に時間がかかる",
      "同じ説明を何度も繰り返している",
      "受講者からの質問整理が重い",
      "社内向けAI研修の内容や進め方が決まらない",
      "利用ルールをどこまで整えるべきか迷っている",
    ],
    capabilities: [
      "社内向け生成AI勉強会の設計と実施",
      "研修資料づくりの時短支援",
      "部門別に使いどころを整理するワークショップ",
      "利用ルールや注意点のたたき台作成",
      "全社導入前に小さく試すための整理",
    ],
    offers: [
      {
        title: "社内で安全に生成AIを使うための90分勉強会",
        description:
          "何に使えるか、何に使わないか、どこに注意すべきかを、非エンジニアにも伝わる形で整理します。",
      },
      {
        title: "研修資料づくりを早くする実践ワーク支援",
        description:
          "研修資料や説明文の作成負荷を軽くするための、具体的な使い方をハンズオン寄りで共有します。",
      },
      {
        title: "部門向け生成AI活用ルールたたき台作成支援",
        description:
          "全社ポリシーの前段階として、部門内で小さく使い始めるためのルール整理を支援します。",
      },
    ],
    relatedProjectIds: ["generative-ai-workshop-for-companies-and-communities"],
    relatedExperienceIds: [
      "teqs-creative-ai-20251205",
      "ext-seminar-20240404",
      "ext-seminar-20240711",
    ],
  },
  {
    slug: "sales-planning",
    href: "/sales-planning",
    navTitle: "営業企画向け",
    pageTitle: "営業企画向け",
    pageDescription:
      "提案書初稿、営業メール、ナレッジ整理など、営業支援業務の時短と標準化に向けて生成AI活用を整理するページです。",
    cardDescription:
      "提案書初稿、営業メール、営業ナレッジ整理など、営業支援業務の時短と標準化を支援します。",
    heroTitle: "営業企画・営業支援業務の時短と整理を支援します",
    heroDescription:
      "提案書初稿、営業メール、ナレッジ整理など、営業支援業務で生成AIをどう使うかを、小さく試せる形で整理します。",
    challenges: [
      "提案書の初稿作成に時間がかかる",
      "営業メールや説明文の作成が重い",
      "過去提案が再利用しにくい",
      "営業ナレッジが個人に閉じている",
      "まずは営業支援業務の一部からAIを試したい",
    ],
    capabilities: [
      "提案書や営業文面の初稿作成支援",
      "営業資料づくりの時短ポイント整理",
      "営業ナレッジの再利用整理",
      "社内向けの営業活用ミニ研修",
      "1業務に絞った小規模PoC",
    ],
    offers: [
      {
        title: "提案書・営業メール作成の時短相談",
        description:
          "営業支援業務の中で、どこに生成AIを使うと効果が出やすいかを一緒に整理します。",
      },
      {
        title: "営業資料づくりをラクにする生成AI活用研修",
        description:
          "提案書、説明文、営業メールなどに絞って、現場で使いやすい形の活用例を共有します。",
      },
      {
        title: "営業ナレッジ整理の小型PoC支援",
        description:
          "既存資料や過去提案をどう再利用しやすくするかを、小さなPoCとして検証します。",
      },
    ],
    relatedProjectIds: [
      "in-house-ai-propulsion-daily-report-summarization-and-notification-automation",
      "trendtune-youtube-analysis-mvp",
    ],
    relatedExperienceIds: ["ext-seminar-20250226", "publication-20250331"],
  },
  {
    slug: "back-office",
    href: "/back-office",
    navTitle: "バックオフィス向け",
    pageTitle: "バックオフィス向け",
    pageDescription:
      "議事録、報告書、FAQ、定型文、社内問い合わせ対応など、管理部門の文書業務や問い合わせ整理を支援するページです。",
    cardDescription:
      "議事録、報告書、FAQ、定型文、社内問い合わせ対応など、管理部門の文書業務や問い合わせ整理を支援します。",
    heroTitle: "バックオフィス業務の文書作成・問い合わせ整理を支援します",
    heroDescription:
      "議事録、報告書、FAQ、定型文、社内問い合わせ対応など、管理部門の業務で生成AIをどう使うかを実務ベースで整理します。",
    challenges: [
      "議事録や報告書の作成に時間がかかる",
      "FAQや社内文書が散在している",
      "問い合わせ対応が属人化している",
      "定型文作成に毎回時間を取られる",
      "まずは小さい範囲で効果検証したい",
    ],
    capabilities: [
      "文書作成業務の時短ポイント整理",
      "FAQや社内文書の整理",
      "定型文作成支援の考え方整理",
      "問い合わせ対応の型化支援",
      "小規模な業務改善PoC",
    ],
    offers: [
      {
        title: "議事録・報告書作成をラクにする業務改善相談",
        description:
          "文書作成業務の流れを確認し、生成AIを使うとしたらどこが現実的かを一緒に整理します。",
      },
      {
        title: "FAQ・定型文整備の生成AI活用ミニ研修",
        description:
          "FAQ、社内文書、定型回答の整理など、管理部門で使いやすい形の活用例を共有します。",
      },
      {
        title: "社内問い合わせ整理の小型PoC支援",
        description:
          "問い合わせ対応や情報整理の一部を対象に、小さく試して、運用可能性を確認します。",
      },
    ],
    relatedProjectIds: [
      "hoikuru-ai-poc",
      "hoikuru-ai-chat-support",
      "in-house-ai-propulsion-daily-report-summarization-and-notification-automation",
    ],
    relatedExperienceIds: ["i-enter-2023", "publication-20250331"],
  },
];

export const businessCaseStudyIds = [
  "generative-ai-workshop-for-companies-and-communities",
  "interview-buddy-ai-coach",
  "hoikuru-ai-poc",
  "in-house-ai-propulsion-daily-report-summarization-and-notification-automation",
  "hoikuru-ai-chat-support",
  "trendtune-youtube-analysis-mvp",
];

export const experimentalProjectIds = [
  "nanobanana-studio",
  "yofuke-no-toudai",
  "seiran",
  "symmetrical-drawing-app",
];

export const projectContextNotes: Record<string, string> = {
  "generative-ai-workshop-for-companies-and-communities":
    "社内勉強会や部門向け研修の設計・実施に近い相談の参考になります。",
  "interview-buddy-ai-coach":
    "人事・採用業務での面接支援、評価コメント整理、AI活用ルール検討に近い事例です。",
  "hoikuru-ai-poc":
    "定型文や文書生成の負荷を下げる用途で、小さくPoCを試すときの参考になります。",
  "in-house-ai-propulsion-daily-report-summarization-and-notification-automation":
    "既存ツールをつなぎ、業務フローを小さく自動化する相談に近い事例です。",
  "hoikuru-ai-chat-support":
    "FAQや問い合わせ対応の型化、チャット支援の導入検討に近い事例です。",
  "trendtune-youtube-analysis-mvp":
    "ナレッジ整理や分析を短時間で回すための軽量な業務支援イメージに近い事例です。",
};

export const proofLinks = [
  {
    label: "TEQS 登壇実績",
    url: "https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860",
  },
  {
    label: "書籍執筆（技術情報協会）",
    url: "https://www.gijutu.co.jp/doc/b_2285.htm",
  },
  {
    label: "生成AIセミナー登壇",
    url: "https://www.i-enter.co.jp/news/detail/250131_01/",
  },
];

export const supplementaryLinks = [
  { label: "Skills", href: "/skills" },
  { label: "AI", href: "/ai" },
  { label: "個人開発 / 作品", href: "/projects#experimental-projects" },
];

export const contactTopics = [
  "自社で生成AIをどう使い始めるべきか整理したい",
  "どの業務から試すべきか相談したい",
  "社内向け研修や勉強会を検討している",
  "提案書、議事録、FAQなどの業務改善をしたい",
  "小規模なPoCや試作の相談をしたい",
];

export function getAudiencePage(slug: AudienceSlug) {
  return audiencePages.find((page) => page.slug === slug);
}
