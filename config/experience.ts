
import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  thumbnailUrl?: string;
  links?: { label: string; url: string }[];
  heroImage?: string;
}

export const experiences: ExperienceInterface[] = [
  // --- 既存: 株式会社アイエンター（職務） ---
  {
    id: "i-enter-2023",
    position: "Webアプリケーションエンジニア / AI活用エンジニア",
    company: "株式会社アイエンター",
    location: "Japan",
    startDate: new Date("2023-04-01"),
    endDate: "Present",
    companyUrl: "https://www.i-enter.co.jp",
    description: [
      "Laravel+Vue.js / C# / React を中心に、要件定義〜実装・テスト・デプロイまで一貫して担当。近年はDifyやChatGPTを組み込んだAI機能開発にも従事。",
      "派遣会社管理システム、研究用途のC#/Unity案件、鉄道データ可視化改修、市役所のAI受付システムなどを担当。"
    ],
    achievements: [
      "派遣会社管理システム（Laravel + Vue.js）の実装〜結合テスト（2023-2024）",
      "カーリング研究システム（C# / Unity / MySQL）メイン開発",
      "電車走行データ管理サービスの改修（C# / PostgreSQL）要件〜デプロイ",
      "市役所AI受付システムでReact + Dify/ChatGPTを用いた機能開発"
    ],
    skills: [
      "React","TypeScript","Laravel","Vue.js","PHP","C#",
      "PostgreSQL","MySQL","Docker","GitLab","Unity","Dify","ChatGPT"
    ] as ValidSkills[],
    links: [
      { label: "派遣会社管理システム", url: "https://goodjob.ca-m.co.jp/" },
      { label: "カーリング（Panora）", url: "https://panora.tokyo/archives/13530" },
      { label: "カーリング（北見：システム）", url: "https://www.kitami-curlinghall.info/system/" },
      { label: "AI受付システム（mm_news）", url: "https://news.ntv.co.jp/n/mmt/category/society/mm90b704cb9b274efe946ff605bd0d75f1" },
      { label: "AI受付システム（i-enter）", url: "https://www.i-enter.co.jp/news/detail/240821_01/" }
    ],
    heroImage: "/experience/i-enter-2023-hero.png"
  },


  // --- 既存: 阪神ロジテック（社内SE） ---
  {
    id: "hanshin-logitec-2022",
    position: "社内SE",
    company: "阪神ロジテック株式会社",
    location: "Japan",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-03-31"),
    description: [
      "インフラ/社内ITの立て直しを単独で推進。資産・契約の棚卸し、サーバ移設、メール切替、HP移転、LAN配線整備、Microsoft 365導入、PC更新、HPリニューアル公開まで担当。"
    ],
    achievements: [
      "IT資産/契約の洗い出しと費用把握",
      "さくらインターネットからのサーバ移行とHP移転を主導",
      "社内LAN配線整理・保守性改善、Microsoft 365導入",
      "老朽PC更新・サブモニター整備、HPフルリニューアル公開"
    ],
    skills: ["Microsoft365","Windows","Linux","Networking","DomainDNS","HTML","CSS","ProjectManagement"] as ValidSkills[],
    links: [{ label: "阪神ロジテック 公式サイト", url: "https://www.hanshin-logitec.co.jp/" }],
    heroImage: "/experience/hanshin-logitec-2022-hero.jpg"
  },

  // =========================
  // ▼▼ ここから今回の追加分 ▼▼
  // =========================

  // 001: 2024/04/04 オンライン（ニュース公開 2024/03/15）
  {
    id: "ext-seminar-20240404",
    position: "セミナー登壇：生成AIのビジネス活用術",
    company: "株式会社アイエンター",
    location: "Online",
    startDate: new Date("2024-04-04"),
    endDate: new Date("2024-04-04"),
    companyUrl: "https://www.i-enter.co.jp",
    description: [
      "生成AIの基礎からビジネス活用事例、導入ポイント・注意点を解説。業務効率化/精度向上につながる実践知を共有。"
    ],
    achievements: [
      "イベント詳細: 2024年4月4日開催「生成AIのビジネス活用術」",
      "登壇（R&Dユニット 高馬宏典 / Webアプリユニット 小森貴文）"
    ],
    skills: ["ChatGPT","Dify","Presentation","Education","Communication"] as ValidSkills[],
    links: [{ label: "告知ページ", url: "https://www.i-enter.co.jp/news/detail/240315_01/" }],
    heroImage: "/experience/ext-seminar-20240404-hero.png"
  },

  // 003: 2024/07/11 大阪支店セミナールーム（ハンズオン）
  {
    id: "ext-seminar-20240711",
    position: "ハンズオン講師：ChatGPTプロンプトスキル",
    company: "株式会社アイエンター",
    location: "Osaka（本町セミナールーム）",
    startDate: new Date("2024-07-11"),
    endDate: new Date("2024-07-11"),
    companyUrl: "https://www.i-enter.co.jp",
    description: [
      "プロンプト基礎〜実践演習のハンズオン。文章生成/分析/画像生成などの実演で、ChatGPTの潜在能力を引き出す手法を指導。"
    ],
    achievements: [
      "イベント詳細: 2024年7月11日開催「ChatGPTを使いこなそう！“プロンプトスキル”を身につける」",
      "講師（R&Dユニット 高馬宏典 / Webアプリユニット 小森貴文）"
    ],
    skills: ["ChatGPT","Presentation","Education","Workshop","Communication"] as ValidSkills[],
    links: [{ label: "告知ページ", url: "https://www.i-enter.co.jp/news/detail/240605_01/" }],
    heroImage: "/experience/ext-seminar-20240711-hero.png"
  },

  // 002: 2025/02/26 オンライン（AIエージェント元年）
  {
    id: "ext-seminar-20250226",
    position: "セミナー登壇：生成AI最新トレンド／AIエージェント",
    company: "株式会社アイエンター",
    location: "Online",
    startDate: new Date("2025-02-26"),
    endDate: new Date("2025-02-26"),
    companyUrl: "https://www.i-enter.co.jp",
    description: [
      "o1/o3, Replit Agent, Cline, Gemini 2.0 など最新ツールのデモを実施。「AIエージェント元年」の概念とインパクトを解説。"
    ],
    achievements: [
      "イベント詳細: 2025年2月26日開催「生成AI最新トレンドと『AIエージェント元年』を徹底解説」",
      "登壇（テクノロジー本部 R&Dユニット 小森貴文）",
      "告知ページ: https://www.i-enter.co.jp/news/detail/250131_01/"
    ],
    skills: ["ChatGPT","Presentation","Education","Communication"] as ValidSkills[],
    links: [{ label: "告知ページ", url: "https://www.i-enter.co.jp/news/detail/250131_01/" }],
    heroImage: "/experience/ext-seminar-20250226-hero.png"
  },

  // 書籍: 技術情報協会 書籍（発刊 2025/03/31）
  {
    id: "publication-20250331",
    position: "書籍執筆（分担執筆）",
    company: "技術情報協会",
    location: "Japan",
    startDate: new Date("2025-03-31"),
    endDate: new Date("2025-03-31"),
    companyUrl: "https://www.gijutu.co.jp",
    description: [
      "『実験の自動化・自律化によるR&Dの効率化と運用方法』に分担執筆。生成AIによる業務効率化と活用事例を担当。"
    ],
    achievements: [
      "書籍詳細（技術情報協会/No.2285）: https://www.gijutu.co.jp/doc/b_2285.htm",
      "著者ページ（NTS出版）: http://www.nts-book.co.jp/item/detail/writer/it/20250331_71.html"
    ],
    skills: ["Writing","AI","Research","TechnicalDocumentation"] as ValidSkills[],
    links: [{ label: "書籍詳細（技術情報協会）", url: "https://www.gijutu.co.jp/doc/b_2285.htm" }],
    heroImage: "/experience/publication-20250331-hero.jpg"
  },

  // 004: 2025/12/05 クリエイティブAI トライ＆ディスカッション
  {
    id: "teqs-creative-ai-20251205",
    position: "トライ＆ディスカッション登壇：クリエイティブAIでビジネスを加速",
    company: "ソフト産業プラザ TEQS",
    location: "大阪（ATC ITM棟6階 TEQS講義室）",
    startDate: new Date("2025-12-05"),
    endDate: new Date("2025-12-05"),
    companyUrl: "https://teqs.jp",
    thumbnailUrl: "/images/projects/teqs.png",
    heroImage: "https://teqs.jp/wp-content/uploads/2025/11/3d92d372d672c18f418fe35b2f9acc41.jpg",
    description: [
      "クリエイティブAI（画像・音楽・動画）を実際に手を動かして学ぶトライアル形式のセミナー。サービス企画や事業開発に必要な素材をその場で制作しながら習得。"
    ],
    achievements: [
      "画像/音楽/動画の生成AIをハンズオンで実習（アカウント作成〜素材生成）",
      "サービス説明動画やUI/UXモック、プレゼン用BGMなどのビジネス素材を制作",
      "参加者ディスカッションと質疑応答で活用アイデアを共有"
    ],
    skills: ["AI","Presentation","Education","Workshop","Communication"] as ValidSkills[],
    links: [
      { label: "イベント詳細", url: "https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860" }
    ]
  }

];
