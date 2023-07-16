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
];

const socialMedia = {
  instagram: {
    handle: "",
    url: "",
  },
  facebook: {
    handle: "",
    url: "",
  },
  twitter: {
    handle: "",
    url: "",
  },
  spotify: {
    handle: "",
    url: "",
  },
  youTube: {
    handle: "",
    url: "",
  },
};

export { config, nav, socialMedia };
