import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description: "コンポーネントや状態管理、仮想DOMを用いて、動的で使いやすいUIを構築します。",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description: "ルーティングやレイアウト、APIルートを活用して、高速で柔軟なWebアプリを構築します。",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "TypeScript",
    description: "静的型付けによってコードの可読性と信頼性を高め、保守性の高い開発を実現します。",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Tailwind CSS",
    description: "ユーティリティクラスを活用し、モダンで美しいデザインを効率的に実装します。",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Node.js",
    description: "サーバーサイドでJavaScriptを実行し、動的で拡張性のあるアプリケーションを開発します。",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "Vercel",
    description: "ゼロ設定でデプロイが可能。自動スケーリングやサーバーレス機能に対応したモダンなホスティング環境を提供します。",
    rating: 4,
    icon: Icons.vercel,
  },
  // --- AI / Tools ---
  {
    name: "Figma",
    description:
      "UI設計・プロトタイプ作成・デザインシステム運用。開発とデザインの橋渡しをします。",
    rating: 4,
    icon: Icons.figma,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
