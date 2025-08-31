import { Icons } from "@/components/common/icons";
import type { skillsInterface } from "@/config/skills";

// AI ツールは単一ブロック（使用可/経験の区分なし）
export const aiTools: skillsInterface[] = [
  {
    name: "ChatGPT (OpenAI)",
    description:
      "会話生成や要約、コード補助など多用途。API連携でアプリへのAI機能実装も行います。",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "Claude",
    description:
      "長文要約やドキュメント整理、仕様作成などに活用。堅実な推論で開発と運用を支援します。",
    rating: 4,
    icon: Icons.claude,
  },
  {
    name: "Suno",
    description:
      "テキストから音楽を生成。デモやプロトタイプの演出素材として活用できます。",
    rating: 3,
    icon: Icons.suno,
  },
  {
    name: "Cline",
    description:
      "LLM連携のコード支援ツール。リポジトリ操作やタスク駆動の開発補助を行います。",
    rating: 4,
    icon: Icons.cline,
  },
  {
    name: "Dify",
    description:
      "ノーコード/ローコードでAIワークフローを構築。エージェントやRAGの迅速な実験に最適です。",
    rating: 4,
    icon: Icons.dify,
  },
  {
    name: "NotebookLM",
    description:
      "資料アップロードからの要約・Q&Aに活用。情報整理やリサーチ効率化を支援します。",
    rating: 3,
    icon: Icons.notebooklm,
  },
  {
    name: "V0",
    description:
      "プロンプトからUIモックを生成し迅速に試作。アイデア検証の初速を上げます。",
    rating: 3,
    icon: Icons.v0,
  },
].sort((a, b) => b.rating - a.rating);

