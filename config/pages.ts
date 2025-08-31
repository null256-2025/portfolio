import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "ポートフォリオサイトへようこそ。",
    metadata: {
      title: "Home",
      description: "小森貴文のポートフォリオサイト",
    },
  },
  skills: {
    title: "Skills",
    description: "これまでに培ってきた主なスキル一覧。",
    metadata: {
      title: "Skills",
      description: "小森貴文が持つスキルの概要",
    },
  },
  ai: {
    title: "AI",
    description: "使用できる、また使用したことのある AI の一覧。",
    metadata: {
      title: "AI",
      description: "小森貴文が扱える・使用経験のある AI ツール一覧",
    },
  },
  projects: {
    title: "Projects",
    description: "これまでに手がけた主要なプロジェクトや成果を紹介します。",
    metadata: {
      title: "Projects",
      description: "小森貴文のプロジェクトと実績",
    },
  },
  contact: {
    title: "Contact",
    description: "まずは30分の無料ヒアリングから。夜・土日もご相談いただけます。",
    metadata: {
      title: "Contact",
      description: "お問い合わせフォーム",
    },
  },
  resume: {
    title: "Resume",
    description: "職務経歴書を閲覧いただけます。",
    metadata: {
      title: "Resume",
      description: "小森貴文の職務経歴書",
    },
  },
  experience: {
    title: "Experience",
    description: "これまでのキャリアの流れや経験をまとめています。",
    metadata: {
      title: "Experience",
      description: "小森貴文のキャリアと職務経験の詳細",
    },
  },
};
