
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
}

export const experiences: ExperienceInterface[] = [
  {
    id: "i-enter-2023",
    position: "Webアプリケーションエンジニア / AI活用エンジニア",
    company: "株式会社アイエンター",
    location: "Japan",
    startDate: new Date("2023-04-01"),
    endDate: "Present",
    companyUrl: "https://www.i-enter.co.jp",
    // logo: "/logos/i-enter.png", // 画像を用意できたら有効化
    description: [
      "Laravel+Vue.js / C# / React を中心に、要件定義〜実装・テスト・デプロイまで一貫して担当。近年はDifyやChatGPTを組み込んだAI機能開発にも従事。",
      "派遣会社管理システムの機能開発・保守、研究用途のC#/Unity案件、鉄道データ可視化改修、市役所のAI受付システムなどを担当。"
    ],
    achievements: [
      "派遣会社管理システム（Laravel + Vue.js）の実装〜結合テストを継続担当（2023・2024）",
      "カーリング研究システム開発でメインコーダー（C# / Unity / MySQL）",
      "電車走行データ管理サービスの改修で要件定義〜デプロイまで担当（C# / PostgreSQL）",
      "市役所AI受付システムでReact + Dify/ChatGPTを用いた開発に参画"
    ],
    skills: [
      "React",
      "TypeScript",
      "Laravel",
      "Vue.js",
      "PHP",
      "C#",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "GitLab",
      "Unity",
      "Dify",
      "ChatGPT"
    ] as ValidSkills[]
  },
  {
    id: "ai-lectures-2024",
    position: "生成AI活用 講師（社内・社外）",
    company: "株式会社アイエンター",
    location: "Japan",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-11-30"),
    companyUrl: "https://www.i-enter.co.jp",
    // logo: "/logos/i-enter.png",
    description: [
      "従業員および社外向けに、生成AIのリテラシー/活用事例/ハンズオンを実施。資料作成〜登壇まで一貫対応。"
    ],
    achievements: [
      "社内向け生成AIリテラシー講座の企画・講師",
      "社外向け活用講座・ハンズオンの登壇（会社公式イベント/セミナー）",
      "全社員向け年次研修で生成AI講義を担当"
    ],
    skills: ["ChatGPT", "Dify", "Python", "SlideDesign", "Communication"] as ValidSkills[]
  },
  {
    id: "hanshin-logitec-2022",
    position: "社内SE",
    company: "阪神ロジテック株式会社",
    location: "Japan",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-03-31"),
    // companyUrl: "",
    // logo: "/logos/hanshin-logitec.png",
    description: [
      "インフラ/社内ITの立て直しを単独で推進。資産・契約の棚卸し、サーバ移設、メールアドレス切替、HP移転、LAN配線整備、Office 365導入、PC更新〜周辺機器整備、HPリニューアル公開まで担当。"
    ],
    achievements: [
      "社内IT資産/契約の洗い出しと費用把握を完遂",
      "さくらインターネットからのサーバ移行と会社HP移転を主導",
      "社内LAN配線の整理・保守性改善、全PCへのMicrosoft 365導入",
      "老朽PCの更新とサブモニター整備で業務体感速度を改善",
      "会社HPのフルリニューアルを要件定義〜公開まで単独完了"
    ],
    skills: [
      "Microsoft365",
      "Windows",
      "Linux",
      "Networking",
      "DomainDNS",
      "HTML",
      "CSS",
      "ProjectManagement"
    ] as ValidSkills[]
  }
];
