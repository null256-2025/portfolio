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
    username: "NULL256",
    icon: Icons.X,
    link: "https://x.com/Null256x",
  },
  {
    name: "LinkedIn",
    username: "小森貴文",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/%E8%B2%B4%E6%96%87-%E5%B0%8F%E6%A3%AE-53b079376/",
  },
  {
    name: "note",
    username: "null256",
    icon: Icons.note,
    link: "https://note.com/null256",
  },
  // {
  //   name: "YouTube",
  //   username: "@your_id",
  //   icon: Icons.youtube,
  //   link: "https://www.youtube.com/@your_id",
  // },
  // {
  //   name: "Github",
  //   username: "@your_id",
  //   icon: Icons.gitHub,
  //   link: "https://github.com/your_id",
  // },
  {
    name: "facebook",
    username: "小森貴文",
    icon: Icons.facebook,
    link: "https://www.facebook.com/profile.php?id=100011713711762",
  }
];
