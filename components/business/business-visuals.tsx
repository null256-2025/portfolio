import type { AudienceSlug } from "@/config/business";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCheck,
  ClipboardList,
  FlaskConical,
  HeartHandshake,
  HelpCircle,
  Lightbulb,
  MessageSquare,
  Presentation,
  Search,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export type BusinessVisualName =
  | "consultation"
  | "training"
  | "poc"
  | "hr"
  | "education"
  | "sales"
  | "operations"
  | "challenge"
  | "clarify"
  | "automation"
  | "decision"
  | "trust"
  | "build"
  | "support"
  | "question"
  | "step-list"
  | "step-search"
  | "step-build"
  | "step-check";

const iconMap: Record<BusinessVisualName, LucideIcon> = {
  consultation: MessageSquare,
  training: Presentation,
  poc: FlaskConical,
  hr: Users,
  education: BookOpen,
  sales: BarChart3,
  operations: Settings,
  challenge: HelpCircle,
  clarify: Search,
  automation: Wrench,
  decision: Target,
  trust: ShieldCheck,
  build: Briefcase,
  support: HeartHandshake,
  question: Lightbulb,
  "step-list": ClipboardList,
  "step-search": Search,
  "step-build": Wrench,
  "step-check": CheckCheck,
};

export const audienceVisualMap: Record<AudienceSlug, BusinessVisualName> = {
  "hr-recruiting": "hr",
  "training-education": "education",
  "sales-planning": "sales",
  "back-office": "operations",
};

export const serviceOfferVisuals: BusinessVisualName[] = [
  "consultation",
  "training",
  "poc",
];

export const homeChallengeVisuals: BusinessVisualName[] = [
  "challenge",
  "clarify",
  "automation",
  "decision",
  "support",
];

export const trustVisuals: BusinessVisualName[] = [
  "trust",
  "build",
  "support",
];

export const supportStepVisuals: BusinessVisualName[] = [
  "step-list",
  "step-search",
  "step-build",
  "step-check",
];

export const audienceChallengeVisuals: BusinessVisualName[] = [
  "challenge",
  "clarify",
  "decision",
  "automation",
  "support",
];

export const audienceCapabilityVisuals: BusinessVisualName[] = [
  "clarify",
  "build",
  "training",
  "automation",
  "step-check",
];

interface BusinessIconBadgeProps {
  name: BusinessVisualName;
  className?: string;
  iconClassName?: string;
}

export function BusinessIconBadge({
  name,
  className,
  iconClassName,
}: BusinessIconBadgeProps) {
  const Icon = iconMap[name];

  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary",
        className
      )}
    >
      <Icon className={cn("h-5 w-5", iconClassName)} />
    </div>
  );
}

interface BusinessFeatureChipProps {
  name: BusinessVisualName;
  label: string;
  subLabel?: string;
  className?: string;
}

export function BusinessFeatureChip({
  name,
  label,
  subLabel,
  className,
}: BusinessFeatureChipProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border bg-background/80 px-4 py-3 text-left shadow-sm",
        className
      )}
    >
      <BusinessIconBadge name={name} className="h-11 w-11 rounded-xl" />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-6">{label}</p>
        {subLabel ? (
          <p className="text-sm text-muted-foreground">{subLabel}</p>
        ) : null}
      </div>
    </div>
  );
}

const flowItems: Array<{
  title: string;
  description: string;
  icon: BusinessVisualName;
}> = [
  {
    title: "相談",
    description: "まず課題を整理",
    icon: "step-list",
  },
  {
    title: "見極め",
    description: "使いどころを絞る",
    icon: "step-search",
  },
  {
    title: "試す",
    description: "小さくPoCや研修",
    icon: "step-build",
  },
  {
    title: "定着",
    description: "現場で回る形にする",
    icon: "step-check",
  },
];

export function BusinessFlowStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-3 rounded-[1.75rem] border bg-muted/30 p-4 sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {flowItems.map((item, index) => (
        <div
          key={item.title}
          className="relative rounded-2xl border bg-background px-4 py-4"
        >
          <div className="flex items-center gap-3">
            <BusinessIconBadge
              name={item.icon}
              className="h-10 w-10 rounded-xl"
              iconClassName="h-4 w-4"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step {index + 1}
              </p>
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {item.description}
          </p>
          {index < flowItems.length - 1 ? (
            <ArrowRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground xl:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
