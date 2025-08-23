import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// バリデーションスキーマ
const contactFormSchema = z.object({
  name: z.string().min(3, "お名前は3文字以上で入力してください。"),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  message: z.string().min(10, "もう少し具体的にご記入ください。（10文字以上）"),
  social: z.string().url().optional().or(z.literal("")),
});

// Resendクライアントの初期化
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 環境変数チェック
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "メール送信の設定が正しくありません。" },
        { status: 500 }
      );
    }

    // リクエストボディの解析
    const body = await req.json();

    // バリデーション
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: "入力データが正しくありません。",
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { name, email, message, social } = validationResult.data;

    // メール送信（null256.2025@gmail.comに送信）
    const { data, error } = await resend.emails.send({
      from: "お問い合わせフォーム <onboarding@resend.dev>", // Resendの検証済みドメイン
      to: ["null256.2025@gmail.com"],
      subject: `【お問い合わせ】${name}様からのメッセージ`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            新しいお問い合わせが届きました
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-top: 0;">送信者情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            ${social ? `<p><strong>SNSリンク:</strong> <a href="${social}" target="_blank">${social}</a></p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">メッセージ内容</h3>
            <div style="white-space: pre-wrap; line-height: 1.6; color: #555;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666;">
            <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
            <p>このメールはポートフォリオサイトのお問い合わせフォームから送信されました。</p>
          </div>
        </div>
      `,
      // プレーンテキスト版も提供
      text: `
新しいお問い合わせが届きました

【送信者情報】
お名前: ${name}
メールアドレス: ${email}
${social ? `SNSリンク: ${social}` : ''}

【メッセージ内容】
${message}

送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました。しばらく時間をおいて再度お試しください。" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { 
        success: true,
        message: "お問い合わせを送信しました。48時間以内にご連絡いたします。",
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    
    // エラーの種類に応じた適切なレスポンス
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "リクエストの形式が正しくありません。" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}

// GET リクエストの処理（ヘルスチェック用）
export async function GET() {
  return NextResponse.json(
    { 
      status: "Contact API is running",
      timestamp: new Date().toISOString(),
      hasApiKey: !!process.env.RESEND_API_KEY 
    },
    { status: 200 }
  );
}
