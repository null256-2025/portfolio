"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "お名前は3文字以上で入力してください。",
  }),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  message: z.string().min(10, {
    message: "もう少し具体的にご記入ください。（10文字以上）",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // 成功時の処理
        form.reset();
        router.push("/contact/thanks");
      } else {
        // APIからのエラーレスポンス
        toast({
          title: "送信エラー",
          description: data.error || "メールの送信に失敗しました。",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("送信エラー:", err);
      toast({
        title: "送信エラー",
        description: "ネットワークエラーが発生しました。しばらく時間をおいて再度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前</FormLabel>
              <FormControl>
                <Input placeholder="例: 山田 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="例: sample@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ご相談内容</FormLabel>
              <FormControl>
                <Textarea placeholder="ご相談やご質問をご自由にご記入ください。" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 任意入力（SNSリンクなど）が必要なら復活 */}
        {/* 
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SNSリンク（任意）</FormLabel>
              <FormControl>
                <Input placeholder="SNSやWebサイトのURL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
              送信中...
            </>
          ) : (
            "送信する"
          )}
        </Button>
      </form>
    </Form>
  );
}
