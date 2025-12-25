"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
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
  return startYear === endYear ? startYear : `${startYear} - ${endYear}`;
};

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const startDiff = b.startDate.getTime() - a.startDate.getTime();
    if (startDiff !== 0) {
      return startDiff;
    }
    const endA =
      a.endDate === "Present" ? Number.MAX_SAFE_INTEGER : a.endDate.getTime();
    const endB =
      b.endDate === "Present" ? Number.MAX_SAFE_INTEGER : b.endDate.getTime();
    return endB - endA;
  });

  return (
    <div className="space-y-6">
      {sortedExperiences.map((experience, index) => {
        const thumbnailSrc =
          experience.thumbnailUrl || experience.heroImage || experience.logo;
        const isRemoteThumbnail =
          typeof thumbnailSrc === "string" && thumbnailSrc.startsWith("http");

        return (
          <AnimatedSection
            key={experience.id}
            delay={0.1 * (index + 1)}
            direction="up"
          >
            <div className="relative flex gap-4">
            <div className="relative flex w-6 flex-col items-center">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-foreground" />
              {index !== sortedExperiences.length - 1 && (
                <span className="mt-3 h-full w-px bg-border" />
              )}
            </div>
            <Link
              href={`/experience/${experience.id}`}
              className="flex-1 rounded-lg border bg-background p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {thumbnailSrc && (
                  <div className="relative aspect-video w-28 sm:w-32 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                    {isRemoteThumbnail ? (
                      <img
                        src={thumbnailSrc}
                        alt={experience.company}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={thumbnailSrc}
                        alt={experience.company}
                        fill
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-cover"
                      />
                    )}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                      {getDurationText(
                        experience.startDate,
                        experience.endDate
                      )}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {experience.position}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {experience.description[0]}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
};

export default Timeline;
