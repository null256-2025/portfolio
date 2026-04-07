# REBUILD Asset Manifest

## 1. 目的

このファイルは、新規プロジェクトへ移送する実績・事例・アイコン素材の台帳です。
画像、動画、SVG アイコンのローカル実体は `rebuild_asset_bundle/` にまとめています。

## 2. 参照ルール

- 新規プロジェクトへ素材を持っていくときは、まず `rebuild_asset_bundle/` を丸ごとコピーする
- 実装時の採用判断は `REBUILD_IMPLEMENTATION_SPEC.md` を優先する
- この台帳は「何の素材か」「どこから来たか」「公開URLがあるか」を確認するために使う
- `example.com` の仮URLは公開導線に使わない

## 3. バンドル構成

```text
rebuild_asset_bundle/
  proofs/
  cases/
  icons/
```

## 4. 実績素材

| ID | 用途 | 元ファイル | バンドル先 | 公開URL / 参考URL | 備考 |
| --- | --- | --- | --- | --- | --- |
| `publication-20250331` | 書籍・寄稿 | `public/experience/publication-20250331-hero.jpg` | `rebuild_asset_bundle/proofs/publication-20250331-hero.jpg` | `https://www.gijutu.co.jp/doc/b_2285.htm` | 分担執筆の訴求に使用 |
| `ext-seminar-20240404` | セミナー実績 | `public/experience/ext-seminar-20240404-hero.png` | `rebuild_asset_bundle/proofs/ext-seminar-20240404-hero.png` | `https://www.i-enter.co.jp/news/detail/240315_01/` | 「生成AIのビジネス活用」用 |
| `ext-seminar-20240711` | セミナー実績 | `public/experience/ext-seminar-20240711-hero.png` | `rebuild_asset_bundle/proofs/ext-seminar-20240711-hero.png` | `https://www.i-enter.co.jp/news/detail/240605_01/` | ChatGPT プロンプトスキル用 |
| `ext-seminar-20250226` | セミナー実績 | `public/experience/ext-seminar-20250226-hero.png` | `rebuild_asset_bundle/proofs/ext-seminar-20250226-hero.png` | `https://www.i-enter.co.jp/news/detail/250131_01/` | 最新トレンド / AIエージェント用 |
| `teqs-creative-ai-20251205` | ワークショップ実績 | `public/images/projects/teqs.png` | `rebuild_asset_bundle/proofs/teqs.png` | `https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860` | ロゴ用途 |
| `teqs-creative-ai-20251205` | ワークショップ実績 | `public/images/projects/teqs-02.png` | `rebuild_asset_bundle/proofs/teqs-02.png` | `https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860` | イベント掲載画像 |
| `i-enter-2023` | 開発・導入支援 | `public/experience/i-enter-2023-hero.png` | `rebuild_asset_bundle/proofs/i-enter-2023-hero.png` | `https://www.i-enter.co.jp` | 業務システム開発 / AI活用経験 |
| `hanshin-logitec-2022` | 社内SE経験 | `public/experience/hanshin-logitec-2022-hero.jpg` | `rebuild_asset_bundle/proofs/hanshin-logitec-2022-hero.jpg` | `https://www.hanshin-logitec.co.jp/` | 事業会社側の現場理解用 |

## 5. 事例素材

| ID | 用途 | 元ファイル | バンドル先 | 公開URL / 参考URL | 備考 |
| --- | --- | --- | --- | --- | --- |
| `generative-ai-workshop-for-companies-and-communities` | ワークショップ事例 | `public/images/projects/teqs.png` | `rebuild_asset_bundle/cases/teqs.png` | `https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860` | ロゴ用途 |
| `generative-ai-workshop-for-companies-and-communities` | ワークショップ事例 | `public/images/projects/teqs-02.png` | `rebuild_asset_bundle/cases/teqs-02.png` | `https://www.sansokan.jp/events/eve_detail.san?H_A_NO=46860` | 事例カード / 詳細ページ用 |
| `interview-buddy-ai-coach` | Interview Buddy | `public/images/projects/interview-buddy.png` | `rebuild_asset_bundle/cases/interview-buddy.png` | `https://interview-buddy-vert.vercel.app/` | ロゴ / サムネイル |
| `interview-buddy-ai-coach` | Interview Buddy | `public/images/projects/interview-buddy-01.png` | `rebuild_asset_bundle/cases/interview-buddy-01.png` | `https://interview-buddy-vert.vercel.app/` | 画面キャプチャ |
| `interview-buddy-ai-coach` | Interview Buddy | `public/images/projects/interview-buddy-02.png` | `rebuild_asset_bundle/cases/interview-buddy-02.png` | `https://interview-buddy-vert.vercel.app/` | 画面キャプチャ |
| `hoikuru-ai-poc` | 保育だより・連絡帳 下書きAI | `public/images/projects/hoikuruai-02.png` | `rebuild_asset_bundle/cases/hoikuruai-02.png` | `https://antigravity-02-hoikuruai.vercel.app/` | メイン画像 |
| `hoikuru-ai-poc` | 保育だより・連絡帳 下書きAI | `public/images/projects/hoikuruai-02-1.png` | `rebuild_asset_bundle/cases/hoikuruai-02-1.png` | `https://antigravity-02-hoikuruai.vercel.app/` | 補足画像 |
| `hoikuru-ai-poc` | 保育だより・連絡帳 下書きAI | `public/images/projects/hoikuruai-02-2.png` | `rebuild_asset_bundle/cases/hoikuruai-02-2.png` | `https://antigravity-02-hoikuruai.vercel.app/` | 補足画像 |
| `in-house-ai-propulsion-daily-report-summarization-and-notification-automation` | Dify × GAS × LINE ボット | `public/images/projects/cook-bot/demo-02.mp4` | `rebuild_asset_bundle/cases/demo-02.mp4` | なし | 動画。自前実演用 |
| `in-house-ai-propulsion-daily-report-summarization-and-notification-automation` | Dify × GAS × LINE ボット | `public/images/projects/cook-bot/syokuzai.png` | `rebuild_asset_bundle/cases/syokuzai.png` | なし | サムネイル / 補足画像 |
| `in-house-ai-propulsion-daily-report-summarization-and-notification-automation` | Dify × GAS × LINE ボット | `public/images/projects/cook-bot/LIFF.png` | `rebuild_asset_bundle/cases/LIFF.png` | なし | QR画像 |
| `hoikuru-ai-chat-support` | 保育ルームAIチャットサポート | `public/images/projects/hoikuruai.png` | `rebuild_asset_bundle/cases/hoikuruai.png` | なし | `websiteLink` は仮URLだったため公開URLなし扱い |
| `trendtune-youtube-analysis-mvp` | TrendTune | `public/images/projects/trendtune.png` | `rebuild_asset_bundle/cases/trendtune.png` | `https://youtube-beta-liard.vercel.app/` | サムネイル |

## 6. アイコン素材

以下の SVG アイコンを `public/images/icons/` から `rebuild_asset_bundle/icons/` にコピーしています。

- `aistudio.svg`
- `claude.svg`
- `cline.svg`
- `cursor.svg`
- `dify.svg`
- `figma.svg`
- `gemini.svg`
- `githubcopilot.svg`
- `mcp.svg`
- `midjourney.svg`
- `notebooklm.svg`
- `notion.svg`
- `runway.svg`
- `suno.svg`
- `v0.svg`

## 7. 外部参照のみの素材

以下はローカル実体が既存プロジェクト内にないため、バンドルには含めていません。

| ID | 種別 | 外部URL | 備考 |
| --- | --- | --- | --- |
| `teqs-creative-ai-20251205` | hero image | `https://teqs.jp/wp-content/uploads/2025/11/3d92d372d672c18f418fe35b2f9acc41.jpg` | TEQS 側の外部画像。必要なら新プロジェクト側で別途取得 |

## 8. 公開時の注意

- `generative-ai-workshop-for-companies-and-communities` の `websiteLink` は `example.com` の仮URLだったため、公開導線には使わない
- `hoikuru-ai-chat-support` の `websiteLink` も仮URLだったため、公開導線には使わない
- 動画 `demo-02.mp4` は容量と表示方法を新プロジェクト側で再確認する
