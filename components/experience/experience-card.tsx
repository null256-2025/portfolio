"use client";

import Image from "next/image";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ExperienceDetailDrawer from "@/components/experience/experience-detail-drawer";
import { ExperienceInterface } from "@/config/experience";

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-4 sm:p-6 transition-all duration-300">
      <div className="flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2 sm:line-clamp-1">
                {experience.position}
              </h3>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {getDurationText(experience.startDate, experience.endDate)}
              </span>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
            {experience.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                +{experience.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 flex justify-end">
        <ExperienceDetailDrawer experience={experience}>
          <Button
            variant="outline"
            size="sm"
            className="rounded-lg w-full sm:w-auto"
          >
            詳細を見る
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Button>
        </ExperienceDetailDrawer>
      </div>
    </div>
  );
};

export default ExperienceCard;
