import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "X",
    username: "@your_id",
    icon: Icons.X,
    link: "https://x.com/your_id",
  },
  {
    name: "LinkedIn",
    username: "your_id",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/your_id",
  },
  {
    name: "note",
    username: "your_id",
    icon: Icons.post,
    link: "https://note.com/your_id",
  },
  {
    name: "YouTube",
    username: "@your_id",
    icon: Icons.youtube,
    link: "https://www.youtube.com/@your_id",
  },
  {
    name: "Github",
    username: "@your_id",
    icon: Icons.gitHub,
    link: "https://github.com/your_id",
  },
];
