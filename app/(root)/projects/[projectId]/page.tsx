import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/images/profile.png";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const githubUsername = "namanbarkiya";

export default function Project({ params }: ProjectPageProps) {
  let project = Projects.find((val) => val.id === params.projectId);
  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div>
        <time
          dateTime={Date.now().toString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(project.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={"naman"}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{"Komori Takafumi"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={project.companyName}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<project.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
        {project.qrImg && (
          <div className="mt-6">
            <p className="mb-2 text-sm text-muted-foreground">
              {project.qrText ?? "以下のQRコードから実際にお試しできます！"}
            </p>
            <Image
              src={project.qrImg}
              alt={`${project.companyName} QR`}
              width={220}
              height={220}
              className="rounded-md border bg-muted"
              priority
            />
          </div>
        )}
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
          Page Info
        </h2>
        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
              <Icons.star className="h-5 w-5 mr-2" /> {page.title}
            </h3>
            {page.links && page.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-2">
                {page.links.map((link) => (
                  <Link
                    key={`${page.title}-${link.label}`}
                    href={link.url}
                    target="_blank"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icons.externalLink className="mr-1 h-4 w-4" />
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <div>
              <p>{page.description}</p>
              {page.heroImage && (
                <Image
                  src={page.heroImage}
                  alt={`${page.title} hero`}
                  width={720}
                  height={405}
                  className="my-4 rounded-md border bg-muted transition-colors"
                  priority
                />
              )}
              {page.imgArr.map((mediaSrc, ind) => {
                if (Array.isArray(mediaSrc)) {
                  return (
                    <div key={ind} className="flex gap-4 my-4">
                      {mediaSrc.map((src, i) => (
                        <div key={i} className="flex-1 relative">
                          <Image
                            src={src}
                            alt={src}
                            width={720}
                            height={405}
                            className="rounded-md border bg-muted transition-colors w-full h-auto"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  );
                }

                const isVideo = /\.(mp4|webm|ogg)$/i.test(mediaSrc);
                return isVideo ? (
                  <video
                    key={ind}
                    src={mediaSrc}
                    controls
                    width={720}
                    height={405}
                    className="my-4 rounded-md border bg-muted transition-colors"
                    preload="metadata"
                    playsInline
                  />
                ) : (
                  <Image
                    src={mediaSrc}
                    key={ind}
                    alt={mediaSrc}
                    width={720}
                    height={405}
                    className="my-4 rounded-md border bg-muted transition-colors"
                    priority
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
