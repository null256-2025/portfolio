## 画像パス
C:\Users\t-komori\dev\portfolio\portfolio\public\images\projects\nanobanana-01.png

## URL
https://nanobanana-01.vercel.app/


# NanoBanana Studio

Gemini API を使って、日本語のプロンプトからインスタ向けのシーン画像とセルフィー風画像をまとめて生成する Next.js (Pages Router) アプリです。キャプションとハッシュタグも自動で用意します。

## できること
- 日本語プロンプトのまま、Gemini 2.5 Flash Image でヒーロー画像を生成
- 顔写真を添付すると同じシーンのセルフィー風画像も同時生成（8MB まで）
- 1:1 / 4:5 / 9:16 など複数のアスペクト比をワンタップ切り替え
- 生成画像はブラウザで即プレビューし、そのままダウンロード可能
- キャプションとハッシュタグ（英語＋日本語ミックス）を Gemini 2.5 Flash で自動生成しワンクリックでコピー

## セットアップ
1. Node.js 18 以上を用意します（Next.js 15 で動作確認）。
2. ルートにある `.env.local` に Gemini の API キーを設定します。
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. 依存をインストールします。
   ```
   npm install
   ```
4. 開発サーバーを起動します。
   ```
   npm run dev
   ```
   `http://localhost:3000` にアクセスするとトップページ、`/image-gen` でジェネレーター画面を開けます。

ビルドと本番起動:
```
npm run build
npm start
```

## 使い方（/image-gen）
- 「プロンプト」にシーンや質感を日本語で入力します（例: 夕方の渋谷、フィルム感、シアンの差し色など）。
- アスペクト比を選びます（Instagram で大きく見せるなら 4:5 が推奨）。
- 任意でセルフィー用の顔写真を添付すると、同じシーンの自撮り風 2 枚目が追加で生成されます。
- 「画像を生成する」を押すと、シーン画像と（顔写真があれば）セルフィー画像がカルーセルに表示され、個別またはまとめてダウンロードできます。
- 「キャプションとタグをコピー」で、英語主体＋日本語 1 文のキャプションと 12 個のハッシュタグをまとめてクリップボードにコピーできます。

## API 概要
- `POST /api/generate`  
  リクエスト: `{ prompt, aspectRatio, faceImage? }`（`faceImage` は Data URL もしくは Base64、8MB 以下）。  
  レスポンス: `{ baseImage, selfieImage?, mimeType }`。Gemini 2.5 Flash Image による生成。
- `POST /api/caption`  
  リクエスト: `{ scene?, vibe?, localeHint? }`。フロントからはプロンプト内容を推定して呼び出し。  
  レスポンス: `{ caption, hashtags[] }`。Gemini 2.5 Flash で生成。

## 主な構成
- `pages/index.tsx` … プロダクトのランディングページ
- `pages/image-gen.tsx` … 生成 UI（フォーム、プレビュー、ダウンロード、キャプションコピー）
- `pages/api/generate.ts` … 画像生成 API（ヒーロー画像＋セルフィー画像）
- `pages/api/caption.ts` … キャプション＆ハッシュタグ生成 API
- `lib/gemini.ts` … Gemini クライアントの初期化（`GEMINI_API_KEY` 必須）
- `styles/*.css` … 全体と各ページのスタイル

## メモ
- 画像はブラウザ上の Object URL で扱い、サーバーには保存しません。ページを離れるとプレビュー URL は破棄されます。
- Gemini API の利用には課金設定が必要です。料金・ポリシーは公式ドキュメントを確認してください。
