import betterWorld from "../public/images/album-better-world-out-there.jpg";
import flatCreek from "../public/images/album-flat-creek-blues.jpg";
import heavyBlues from "../public/images/album-heavy-blues.jpg";
import oneNation from "../public/images/one-nation-under-the-blues_cover-3000px.jpg";
import stellaBlues from "../public/images/album-stella-blues.jpg";
import tennesseeBlues from "../public/images/album-tennessee-blues.jpg";
import universalBlues from "../public/images/album-universal-blues.jpg";
import worldBlues from "../public/images/album-world-blues.jpg";
import worldBluesSociety from "../public/images/album-world-blues-society.jpg";

export type Album = {
  url: string;
  imgSrc: any;
  title: string;
  year: string;
  trackCount: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youTubeMusicUrl?: string;
};

export const albums: Album[] = [
  {
    url: "",
    imgSrc: oneNation,
    title: "One Nation Under the Blues",
    year: "2023",
    trackCount: "15 tracks",
    spotifyUrl: "https://open.spotify.com/album/6QVFKYDH5C32RoAd4AQ8E2",
    appleMusicUrl:
      "https://music.apple.com/us/album/one-nation-under-the-blues/1682177226",
    youTubeMusicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_mo_JyallZQbert5igvje48SaiSyusk9Sk&feature=share",
  },
  {
    url: "",
    imgSrc: worldBluesSociety,
    title: "World Blues Society",
    year: "2021",
    trackCount: "12 tracks",
    spotifyUrl: "https://open.spotify.com/album/0LLRxjDsG7FV684dztDFjZ",
    appleMusicUrl:
      "https://music.apple.com/us/album/world-blues-society/1567153198",
    youTubeMusicUrl: "",
  },
  {
    url: "https://store.cdbaby.com/cd/keithscottblues",
    imgSrc: betterWorld,
    title: "Better World Out There",
    year: "2018",
    trackCount: "12 tracks",
    spotifyUrl: "https://open.spotify.com/album/7pgh3IVPkOXWlrOcbr4IoY",
    appleMusicUrl:
      "https://music.apple.com/us/album/better-world-out-there/1419881776",
    youTubeMusicUrl: "",
  },
  {
    url: "",
    imgSrc: stellaBlues,
    title: "Stella Blues",
    year: "2017",
    trackCount: "12 tracks",
    spotifyUrl: "",
    appleMusicUrl: "https://music.apple.com/us/album/stella-blues/1361884418",
    youTubeMusicUrl: "",
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott4",
    imgSrc: flatCreek,
    title: "Flat Creek Blues",
    year: "2014",
    trackCount: "10 tracks",
    spotifyUrl: "",
    appleMusicUrl:
      "https://music.apple.com/us/album/flat-creek-blues/1356770449",
    youTubeMusicUrl: "",
  },

  {
    url: "https://store.cdbaby.com/cd/keithscott32",
    imgSrc: universalBlues,
    title: "Universal Blues",
    year: "2011",
    trackCount: "10 tracks",
    spotifyUrl: "",
    appleMusicUrl: "https://music.apple.com/us/album/universal-blues/479949188",
    youTubeMusicUrl: "",
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott3",
    imgSrc: tennesseeBlues,
    title: "Tennessee Blues",
    year: "2011",
    trackCount: "10 tracks",
    spotifyUrl: "",
    appleMusicUrl: "https://music.apple.com/us/album/tennessee-blues/440325828",
    youTubeMusicUrl: "",
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott2",
    imgSrc: worldBlues,
    title: "World Blues",
    year: "2008",
    trackCount: "10 tracks",
    spotifyUrl: "",
    appleMusicUrl: "https://music.apple.com/us/album/world-blues/289852271",
    youTubeMusicUrl: "",
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott",
    imgSrc: heavyBlues,
    title: "Heavy Blues",
    year: "2001",
    trackCount: "12 tracks",
    spotifyUrl: "",
    appleMusicUrl: "",
    youTubeMusicUrl: "",
  },
];
