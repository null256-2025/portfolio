import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Komori Takafumi Portfolio",
    short_name: "KOMORI　PORTFOLIO",
    description:
      "Komori Takafumi's portfolio for AI utilization, frontend development, and practical workshops.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "ai",
      "workshop",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
