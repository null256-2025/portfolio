import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: (string | string[])[];
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
  qrImg?: string;
  qrText?: string;
}

export const Projects: ProjectInterface[] = [
  {
    id: "nanobanana-studio",
    type: "Personal",
    companyName: "NanoBanana Studio",
    category: ["Web Dev", "Frontend", "Generative AI", "API"],
    shortDescription: "日本語プロンプトからインスタ向けのシーン画像とセルフィー風画像をまとめて生成。",
    websiteLink: "https://nanobanana-01.vercel.app/",
    techStack: ["Next.js", "TypeScript", "CSS", "AI"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/images/projects/nanobanana-01.png",
    descriptionDetails: {
      paragraphs: [
        "Gemini API を使って、日本語のプロンプトからシーン画像とセルフィー風画像を生成。キャプションとハッシュタグも自動で用意。画像はブラウザ上の Object URL で扱い、サーバーには保存しません。",
      ],
      bullets: [
        "日本語プロンプトのまま、Gemini 2.5 Flash Image でヒーロー画像を生成",
        "顔写真を添付すると同じシーンのセルフィー風画像も同時生成",
        "1:1 / 4:5 / 9:16 など複数のアスペクト比をワンタップ切り替え",
      ],
    },
    pagesInfoArr: [
      {
        title: "NanoBanana Studio",
        imgArr: [
          "/images/projects/nanobanana-01.png",
          "/images/projects/nanobanana-01-2.png",
        ],
      },
    ],
  },
  {
    id: "hoikuru-ai-poc",
    type: "Personal",
    companyName: "保育だより・連絡帳 下書きAI",
    category: ["Web Dev", "Frontend", "Generative AI", "Automation"],
    shortDescription: "保育現場向けに「おたより」「連絡帳」の下書きを素早く作れる Next.js 製の PoC。",
    websiteLink: "https://antigravity-02-hoikuruai.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/images/projects/hoikuruai-02.png",
    descriptionDetails: {
      paragraphs: [
        "保育現場向けに「おたより」「連絡帳」の下書きを素早く作れる Next.js 製の PoC。医療・災害に関する NG ワードを入力段階と API 側の両方でブロックし、個人情報をサーバーに残さないシンプルな設計になっています。",
      ],
      bullets: [
        "おたより / 連絡帳の下書き生成（トーン・長さ・キーワード・メモを指定）",
        "文体サンプルをローカル保存し、生成文の口調を調整",
        "医療・災害キーワードの NG ガード",
      ],
    },
    pagesInfoArr: [
      {
        title: "保育だより・連絡帳 下書きAI",
        imgArr: [
          "/images/projects/hoikuruai-02.png",
          [
            "/images/projects/hoikuruai-02-1.png",
            "/images/projects/hoikuruai-02-2.png",
          ],
        ],
      },
    ],
  },
  {
    id: "trendtune-youtube-analysis-mvp",
    type: "Personal",
    companyName: "TrendTune（YouTube分析MVP）",
    category: ["Web Dev", "Frontend", "API"],
    shortDescription: "タグ×3で“伸び筋”を3秒で可視化。API最適化とキャッシュで無料枠でも安定運用。",
    websiteLink: "https://youtube-beta-liard.vercel.app/",
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
    category: ["Web Dev", "Backend", "UI/UX", "Automation", "Generative AI", "Dify", "GAS", "API"],
    shortDescription: "Dify のフローと Google Apps Script を連携し、LINE から食材・条件を投げると最適なレシピを返すボット。BYOK/省コストで即運用できる軽量構成。",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/images/projects/cook-bot/syokuzai.png",
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
        imgArr: ["/images/projects/cook-bot/demo-02.mp4"],
      },
    ],
    qrImg: "/images/projects/cook-bot/LIFF.png",
    qrText: "以下のQRコードから実際にお試しできます！",
  },
  {
    id: "generative-ai-workshop-for-companies-and-communities",
    type: "Personal",
    companyName: "生成AIワークショップ（企業/コミュニティ向け）",
    category: ["Web Dev", "UI/UX", "Generative AI", "Automation"],
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
  {
    id: "hoikuru-ai-chat-support",
    type: "Personal",
    companyName: "保育ルームAIチャットサポート",
    category: ["Web Dev", "UI/UX", "Generative AI", "Automation", "Dify", "API", "LIFF"],
    shortDescription: "保育士向けのAIチャットサポートシステム。日々の業務を効率化し、保育士の負担を軽減。",
    websiteLink: "https://example.com/hoikuru",
    githubLink: undefined,
    techStack: ["Next.js"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-03-31"),
    companyLogoImg: "/images/projects/hoikuruai.png",
    descriptionDetails: {
      paragraphs: [
        "保育士向けのAIチャットサポートシステム。日々の業務を効率化し、保育士の負担を軽減。",
      ],
      bullets: [
        "プロンプト設計の基礎〜業務テンプレ化までを実演",
        "ノーコード×APIで小さな自動化を体験",
        "参加者満足度の高い“実務直結”コンテンツ",
      ],
    },
    pagesInfoArr: [
      {
        title: "保育ルームAIチャットサポート",
        imgArr: ["/images/projects/hoikuruai.png"],
      },
    ],
  },
  {
    id: "symmetrical-drawing-app",
    type: "Personal",
    companyName: "対称描画ジェネレーター",
    category: ["Web Dev", "Creative Coding", "UI/UX"],
    shortDescription:
      "p5.jsとTweakpaneで作る対称描画アプリ。分割・ミラー・色・太さを操作して模様生成。",
    websiteLink: "https://scope-app.vercel.app/",
    githubLink: undefined,
    techStack: ["TypeScript", "Vite", "p5.js", "Tweakpane"],
    startDate: new Date("2025-08-30"),
    endDate: new Date("2025-08-31"),
    companyLogoImg: "/images/projects/scorp.png",
    descriptionDetails: {
      paragraphs: [
        "マウス/タッチで中心対称パターンを描けるジェネラティブ・ドローイングアプリ。Tweakpaneで分割数やミラーリング、線色/太さ、背景色、感度をリアルタイム調整可能。",
      ],
      bullets: [
        "分割数・水平/垂直ミラーで対称描画を生成",
        "線の色/太さ・背景色をリアルタイム調整",
        "PNG保存・キャンバスクリア機能を搭載",
        "モバイル最適化のスライドイン設定パネル（ハンバーガー）",
        "Vite+TypeScript構成、p5.jsベースの描画",
      ],
    },
    pagesInfoArr: [
      {
        title: "Symmetrical Drawing App",
        imgArr: ["/images/projects/scorp.mp4"],
      },
    ],
  }
];

export const featuredProjects = Projects.slice(0, 3);
