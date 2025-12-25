"use client";

import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExperienceInterface } from "@/config/experience";

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface ExperienceDetailDrawerProps {
  experience: ExperienceInterface;
  children: React.ReactNode;
}

const ExperienceDetailDrawer: React.FC<ExperienceDetailDrawerProps> = ({
  experience,
  children,
}) => {
  const description = experience.description?.[0];
  const achievements = experience.achievements?.slice(0, 3) ?? [];
  const skills = experience.skills?.slice(0, 4) ?? [];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="left-auto right-0 top-0 h-full w-full max-w-none translate-x-0 translate-y-0 rounded-none border-l bg-background p-6 sm:w-[420px] sm:p-8">
        <div className="space-y-6">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="text-xl font-bold">
              {experience.position}
            </DialogTitle>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">
                {experience.company}
              </span>
              <span className="mx-2">•</span>
              <span>
                {getDurationText(experience.startDate, experience.endDate)}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              {experience.location}
            </div>
          </DialogHeader>

          {description && (
            <section className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">概要</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </section>
          )}

          {achievements.length > 0 && (
            <section className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">成果</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {skills.length > 0 && (
            <section className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                キーワード
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {(experience.companyUrl || experience.links?.length) && (
            <section className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                関連リンク
              </h4>
              <ul className="space-y-2 text-sm">
                {experience.companyUrl && (
                  <li>
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      公式サイト
                      <Icons.externalLink className="h-4 w-4" />
                    </a>
                  </li>
                )}
                {experience.links?.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <Icons.externalLink className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div>
            <Button asChild variant="ghost" size="sm" className="px-0">
              <Link href={`/experience/${experience.id}`}>
                詳細ページを見る
                <Icons.chevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceDetailDrawer;
