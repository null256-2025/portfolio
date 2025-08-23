# Resend API設定ガイド

## 概要

このプロジェクトではメール送信にResend APIを使用しています。以下の手順でResend APIキーを取得し、設定してください。

## 1. Resendアカウントの作成

1. [Resend公式サイト](https://resend.com)にアクセス
2. 「Sign up」をクリックしてアカウントを作成
3. メールアドレスを認証

## 2. API Keyの取得

1. Resendにログイン後、ダッシュボードにアクセス
2. 左側のメニューから「API Keys」をクリック
3. 「Create API Key」ボタンをクリック
4. API Key名を入力（例：`Portfolio Contact Form`）
5. Permissionは「Sending access」を選択
6. 「Add」ボタンをクリック
7. 表示されたAPI Keyをコピー（**重要：この画面を閉じると再度確認できません**）

## 3. 環境変数の設定

1. プロジェクトのルートディレクトリにある `.env.local` ファイルを開く
2. `RESEND_API_KEY=your_resend_api_key_here` の部分を以下のように変更：

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

**注意事項：**
- API Keyは`re_`で始まります
- API Keyを他の人と共有しないでください
- `.env.local`ファイルはGitにコミットされないようになっています

## 4. メール送信先の設定

現在の設定では、すべてのお問い合わせが以下のメールアドレスに送信されます：
- **送信先：** null256.2025@gmail.com

送信先を変更したい場合は、`app/api/contact/route.ts`の35行目を修正してください：

```typescript
to: ["your-email@example.com"], // ここを変更
```

## 5. 送信者メールアドレスについて

Resendの無料プランでは、送信者メールアドレスとして以下が使用されます：
- `onboarding@resend.dev` （Resendの検証済みドメイン）

独自ドメインを使用したい場合は、Resendでドメイン認証を行ってください。

## 6. 動作確認

1. 開発サーバーを起動：`npm run dev`
2. `http://localhost:3000/contact`にアクセス
3. コンタクトフォームに必要事項を入力して送信
4. 送信成功時は`/contact/thanks`ページにリダイレクトされます
5. 指定したメールアドレスにメールが届くことを確認

## 7. トラブルシューティング

### API Keyエラーが発生する場合
- `.env.local`ファイルのAPI Keyが正しく設定されているか確認
- 開発サーバーを再起動（`Ctrl+C`で停止後、`npm run dev`で再開）

### メールが届かない場合
- 迷惑メールフォルダを確認
- Resendダッシュボードの「Logs」でメール送信ログを確認
- API Keyの権限が「Sending access」になっているか確認

### フォーム送信でエラーが発生する場合
- ブラウザの開発者ツール（F12）でエラーメッセージを確認
- ネットワークタブでAPI呼び出しのレスポンスを確認

## 8. 料金について

- Resendの無料プランでは月3,000通まで送信可能
- コンタクトフォーム程度の利用では無料プランで十分です
- 詳細は[Resend Pricing](https://resend.com/pricing)を確認

## サポート

設定で困った場合は、以下を確認してください：
1. [Resend Documentation](https://resend.com/docs)
2. このREADMEの内容
3. `app/api/contact/route.ts`のエラーログ