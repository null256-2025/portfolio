import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "trendtune-youtube-analysis-mvp",
    type: "Personal",
    companyName: "TrendTune（YouTube分析MVP）",
    category: ["Web Dev", "Frontend"],
    shortDescription: "タグ×3で“伸び筋”を3秒で可視化。API最適化とキャッシュで無料枠でも安定運用。",
    websiteLink: "https://example.com/demo",
    githubLink: "https://github.com/yourname/trendtune",
    techStack: ["React", "Next.js", "Vercel"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/images/projects/trendtune.png",
    descriptionDetails: {
      paragraphs: [
        "タグ×3で“伸び筋”を3秒で可視化。API最適化とキャッシュで無料枠でも安定運用。",
      ],
      bullets: [
        "段階的フィルタリング＋IndexedDBキャッシュでAPIクォータを約77.7%削減",
        "プログレッシブ検索で最初の結果を即返し、追加ロードで深掘り",
        "BYOK（ブラウザ保存）でキーをサーバー送信せず安全に運用",
      ],
    },
    pagesInfoArr: [
      {
        title: "TrendTune",
        imgArr: ["/images/projects/trendtune.png"],
      },
    ],
  },
  {
    id: "in-house-ai-propulsion-daily-report-summarization-and-notification-automation",
    type: "Personal",
    companyName: "Dify × GAS × LINE｜レシピ応答ボット",
    category: ["Web Dev", "Backend"],
    shortDescription: "Dify のフローと Google Apps Script を連携し、LINE から食材・条件を投げると最適なレシピを返すボット。BYOK/省コストで即運用できる軽量構成。",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/images/projects/syokuzai.png",
    descriptionDetails: {
      paragraphs: [
        "Dify のフローと Google Apps Script を連携し、LINE から食材・条件を投げると最適なレシピを返すボット。BYOK/省コストで即運用できる軽量構成。",
      ],
      bullets: [
        "Dify のフローでプロンプト設計とツール呼び出しを可視化、保守性を確保",
        "GAS で LINE Messaging API と連携、深夜実行やログ収集を自動化",
        "少量トークン・キャッシュ活用でレスポンスとコストを最適化"
      ],
    },
    pagesInfoArr: [
      {
        title: "Dify × GAS × LINE｜レシピ応答ボット",
        imgArr: ["/images/projects/syokuzai.png"],
      },
    ],
  },
  {
    id: "generative-ai-workshop-for-companies-and-communities",
    type: "Personal",
    companyName: "生成AIワークショップ（企業/コミュニティ向け）",
    category: ["Web Dev", "UI/UX"],
    shortDescription: "90–120分で“明日から使える”生成AI活用。実務例を交えたハンズオン形式。",
    websiteLink: "https://example.com/workshop-deck",
    githubLink: undefined,
    techStack: ["Next.js"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/images/projects/seminar.png",
    descriptionDetails: {
      paragraphs: [
        "90–120分で“明日から使える”生成AI活用。実務例を交えたハンズオン形式。",
      ],
      bullets: [
        "プロンプト設計の基礎〜業務テンプレ化までを実演",
        "ノーコード×APIで小さな自動化を体験",
        "参加者満足度の高い“実務直結”コンテンツ",
      ],
    },
    pagesInfoArr: [
      {
        title: "生成AIワークショップ",
        imgArr: ["/images/projects/seminar.png"],
      },
    ],
  },
];

export const featuredProjects = Projects.slice(0, 3);
