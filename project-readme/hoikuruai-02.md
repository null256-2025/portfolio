## 画像パス
C:\Users\t-komori\dev\portfolio\portfolio\public\images\projects\hoikuruai-02.png

## URL
https://antigravity-02-hoikuruai.vercel.app/



# 保育だより・連絡帳 下書きAI

保育現場向けに「おたより」「連絡帳」の下書きを素早く作れる Next.js 製の PoC です。医療・災害に関する NG ワードを入力段階と API 側の両方でブロックし、個人情報をサーバーに残さないシンプルな設計になっています。

## できること
- おたより / 連絡帳の下書き生成（トーン・長さ・キーワード・メモを指定）
- 文体サンプルをローカル保存し、生成文の口調を調整
- 医療・災害キーワードの NG ガード（`lib/ngWords.ts`）
- 生成文のトーン調整と注意書き付与（`lib/postEdit.ts`）
- API キー未設定時はモック文を返して画面動作を確認可能
- 匿名メトリクス送信（`/api/metrics`、ログ出力のみ）

## 画面構成
- `/` ホーム：利用上の注意とスタート導線
- `/compose`：おたより / 連絡帳のモード選択
- `/compose/[mode]`：入力フォーム（トーン・長さ・キーワード・メモ、生成結果コピー）
- `/settings`：文体サンプル登録（最大 5 件、ブラウザローカル保存）

## 技術スタック
- Next.js 16 (App Router) / TypeScript / Tailwind CSS 4
- LLM: Google Generative AI (Gemini 2.5 Flash) via `@google/generative-ai`
- 入力バリデーション: `ajv`
- テスト: Jest (NG ワード検出), Playwright (E2E)

## セットアップ
1) 依存関係をインストール
```bash
npm install
```

2) 環境変数を設定
```bash
cp .env.example .env.local
# GEMINI_API_KEY に Gemini の API キーを設定
```
（キー未設定でもモック結果で画面挙動を確認できます）

3) 開発サーバーを起動
```bash
npm run dev
# http://localhost:3000
```

## テスト / 品質チェック
- ユニットテスト（NG ワード検出）  
  `npx jest`
- E2E テスト（生成フロー）  
  `npx playwright install && npx playwright test`
- Lint  
  `npm run lint`

## ディレクトリ概要
- `app/`：ページと API ルート（生成 `/api/generate`, メトリクス `/api/metrics`）
- `lib/llm.ts`：Gemini へのプロンプト組み立てと生成
- `lib/ngWords.ts`：医療・災害 NG ワード検知
- `lib/postEdit.ts`：生成文のトーン調整と注意書き付与
- `__tests__/`：ユニットテスト
- `tests/`：Playwright E2E テスト

## 利用上の前提・制約
- 生成される文は AI の自動生成下書きです。必ず人が確認・修正してください。
- 医療・緊急・災害に関する内容は AI 生成対象外です。園の規定や専門機関の指示に従ってください。
- 入力内容や生成結果はサーバーに保存しません（文体サンプルのみブラウザローカル保存）。
