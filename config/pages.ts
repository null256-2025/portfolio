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
    description: "中小企業向けのAI導入相談の入口です。",
    metadata: {
      title: "中小企業向けAI導入相談",
      description:
        "中小企業向けに、生成AI導入の最初の整理、社内向け研修、小規模PoCを支援します。",
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
    description: "使用できる AI の一覧。",
    metadata: {
      title: "AI",
      description: "小森貴文が扱える・使用経験のある AI ツール一覧",
    },
  },
  projects: {
    title: "事例",
    description:
      "企業向け支援・業務改善に近い事例を中心に、相談につながる実績をまとめています。",
    metadata: {
      title: "事例",
      description: "相談に近い実績と、企業向け支援に転用しやすい事例一覧",
    },
  },
  contact: {
    title: "お申し込み",
    description:
      "90分 AI導入相談の最終申込みページです。通常2営業日以内に返信します。",
    metadata: {
      title: "AI導入相談のお申し込み",
      description:
        "90分 AI導入相談の最終申込みページです。",
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
    title: "実績",
    description:
      "登壇・研修・開発・導入支援の実績を、発注判断の材料として確認できるページです。",
    metadata: {
      title: "実績",
      description: "講師・開発・導入支援の実績とキャリアの詳細",
    },
  },
};
