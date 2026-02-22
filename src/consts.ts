interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

export const SITE: Site = {
  website: "https://prashant-me.vercel.app/",
  author: "Prashant Bhushan",
  profile: "https://prashant-me.vercel.app/about",
  desc: "Law & tech enthusiast from Jaunpur, India. Learning, building and figuring it out.",
  title: "Prashant Bhushan",
  ogImage: "prashant-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/prashantb2400/prashant.me/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Asia/Kolkata",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/prashantb2400",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/knightofslights",
    label: "Twitter",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  RSS: "rss",
  Email: "mail",
};
