import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandMedium,
  IconWorld,
} from "@tabler/icons-react";

const links = [
  {
    title: "Website",
    icon: <IconWorld className="h-full w-full text-muted-foreground" />,
    href: "https://tempwallets.com",
  },
  {
    title: "X (Twitter)",
    icon: <IconBrandX className="h-full w-full text-muted-foreground" />,
    href: "https://x.com/tempwallets",
  },
  {
    title: "Telegram",
    icon: <IconBrandTelegram className="h-full w-full text-muted-foreground" />,
    href: "https://t.me/tempwallets",
  },
  {
    title: "Medium",
    icon: <IconBrandMedium className="h-full w-full text-muted-foreground" />,
    href: "https://medium.com/@tempwallets",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-muted-foreground" />,
    href: "https://github.com/tempwallets",
  },
];

const FooterSocialDock = () => {
  return (
    <div className="flex justify-center">
      <FloatingDock items={links} />
    </div>
  );
};

export default FooterSocialDock;
