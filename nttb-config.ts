const siteTitle = "Keith Scott Blues - heavy blues musician Chicago USA";

const config = {
  OPEN_GRAPH: {
    description:
      "Remarkably versatile, Chicago-based blues/rock guitarist Keith Scott has been working his way methodically up through the blues' ranks since his parents bought him his first guitar at age 14 and his young ears heard Muddy Waters in 1980.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent(
          "/images/public/images/keith-bw_onutb-cover-bg.png"
        )}`,
      },
    ],
    locale: "en-US",
    siteName: siteTitle,
    title: siteTitle,
    type: "website",
    url: "https://keithscottblues.com",
  },
  SITE: {
    description:
      "Remarkably versatile, Chicago-based blues/rock guitarist Keith Scott has been working his way methodically up through the blues' ranks since his parents bought him his first guitar at age 14 and his young ears heard Muddy Waters in 1980.",
    title: siteTitle,
  },
};

const nav = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/shows",
    label: "Shows",
  },
  {
    href: "/discography",
    label: "Discography",
  },
  {
    href: "/photos",
    label: "Photos",
  },
  {
    href: "/art",
    label: "Art",
  },
];

const socialMedia = {
  instagram: {
    handle: "fishing_blues",
    url: "https://www.instagram.com/fishing_blues/",
  },
  facebook: {
    handle: "keith.scott.5454",
    url: "https://www.facebook.com/keith.scott.5454",
  },
  twitter: {
    handle: "",
    url: "",
  },
  spotify: {
    handle: "",
    url: "https://open.spotify.com/artist/6sBKh9xJYT905Ps9l2JMZR",
  },
  youTube: {
    handle: "keithscottblues",
    url: "https://www.youtube.com/@keithscottblues1167",
  },
};

export { config, nav, socialMedia };
