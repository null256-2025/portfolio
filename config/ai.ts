import { Icons } from "@/components/common/icons";
import type { skillsInterface } from "@/config/skills";

// AI ツールは単一ブロック（使用可/経験の区分なし）
export const aiTools: skillsInterface[] = [
  {
    name: "ChatGPT (OpenAI)",
    description:
      "会話生成・要約・コード補助などを幅広く対応。API連携で各種機能を実装します。",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "Claude (Anthropic)",
    description:
      "長文の読解・要約・仕様作成に強み。堅実な推論で設計〜ドキュメントを支援します。",
    rating: 5,
    icon: Icons.claude,
  },
  {
    name: "Gemini (Google)",
    description:
      "Google 連携が強み。検索・Docs/Sheets 連携や生成でワークフローを効率化します。",
    rating: 4,
    icon: Icons.gemini,
  },
  {
    name: "AI Studio",
    description:
      "プロンプト実験・API キー管理・モデル設定など、実運用前の準備と検証に活用します。",
    rating: 3,
    icon: Icons.aistudio,
  },
  {
    name: "Suno",
    description:
      "テキストから音楽を生成。プロトタイプやデモの演出素材を高速に用意します。",
    rating: 3,
    icon: Icons.suno,
  },
  {
    name: "Midjourney",
    description:
      "高品質な画像生成。キービジュアルやモック作成、アイデアの可視化に活用します。",
    rating: 4,
    icon: Icons.midjourney,
  },
  {
    name: "Runway",
    description:
      "動画生成/編集のオールインワン。短尺動画の試作や演出案の検証に有効です。",
    rating: 3,
    icon: Icons.runway,
  },
  {
    name: "Cline",
    description:
      "リポジトリ操作・タスク駆動のコード支援。LLM と連携した開発効率化を行います。",
    rating: 4,
    icon: Icons.cline,
  },
  {
    name: "Cursor",
    description:
      "AI ペアプロに最適な IDE。対話でコード生成/修正しつつリファクタを進めます。",
    rating: 4,
    icon: Icons.cursor,
  },
  {
    name: "GitHub Copilot",
    description:
      "日常的な補完・テスト雛形生成・リファクタ提案で開発スピードと品質を両立します。",
    rating: 4,
    icon: Icons.githubcopilot,
  },
  {
    name: "MCP (Model Context Protocol)",
    description:
      "ツール/データへの安全な接続規格。複数エージェント連携や社内データ統合を見据えます。",
    rating: 3,
    icon: Icons.mcp,
  },
  {
    name: "Dify",
    description:
      "ノーコード/ローコードでエージェントや RAG を構築。検証〜小規模運用まで迅速に展開。",
    rating: 4,
    icon: Icons.dify,
  },
  {
    name: "NotebookLM",
    description:
      "資料アップロードから要約・Q&A を実施。情報整理や調査の初期段階を効率化します。",
    rating: 3,
    icon: Icons.notebooklm,
  },
  {
    name: "Notion AI",
    description:
      "メモ/仕様/議事の生成と整形。ワークスペースの知識化と検索性を高めます。",
    rating: 3,
    icon: Icons.notion,
  },
  {
    name: "V0 (Vercel)",
    description:
      "プロンプトから UI モックを生成し、アイデア検証を高速に回します。",
    rating: 3,
    icon: Icons.v0,
  },
  {
    name: "Figma",
    description:
      "デザイン生成補助や自動レイアウト提案など AI 機能を活用し、設計と試作を加速します。",
    rating: 4,
    icon: Icons.figmaColor,
  },
].sort((a, b) => b.rating - a.rating);
