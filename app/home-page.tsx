"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import QuoteSlider from "@/components/QuoteSlider";
import TourDatesMinimal from "@/components/TourDatesMinimal";
import bannerPhoto from "../public/photos/IMG_20231210_211032_629.jpg";
import newAlbum from "../public/images/album-state-street-blues.png";
import { useRouter } from "next/navigation";
import useTourDates from "@/hooks/use-tour-dates";
import bluesMattersCover from "../public/images/2025-blues-matters-cover.jpeg";

const listenButtons = [
  {
    label: "YouTube Music",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_l2vD6sPLtKYd28k0jA_auFf5YClfFaoRU&si=CCBNmPHJs-tazTQ0",
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/album/5thBaF0Bmmr93GADooXjgj?si=y9OcVKq-TLWUQ7OYktvT_w",
  },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/album/back-to-state-street/1825256377",
  },
];

const videos = [
  {
    title: "Sherwood Sessions - Keith Live and Acoustic",
    src: "https://www.youtube.com/embed/OIOip4ld5w4",
  },
  {
    title: "Live at the Salmon Arm Roots & Blues Festival",
    src: "https://www.youtube.com/embed/WNt21ZHD608?list=PL4jAzqdtu1-NEabFhfCweYRoddTTdShW7",
  },
  {
    title: "Live Keith Scott and the Electric Blues Junkies",
    src: "https://www.youtube.com/embed/dS1sN1douxs",
  },
  {
    title: "Messin Around",
    src: "https://www.youtube.com/embed/nWHVi0lvxek",
  },
];

const bluesSocieties = [
  {
    name: "Washington Blues Society",
    link: "https://wablues.org/",
    logo: "",
  },
  {
    name: "Memphis Blues Society",
    link: "https://www.memphisbluessociety.com/",
    logo: "",
  },
];

export default function Home() {
  const tourDates = useTourDates();
  const router = useRouter();

  return (
    <>
      <Main>
        <div className="animate-snapIn">
          <Image src={bannerPhoto} alt="Keith on stage" className="mb-2" />
          <p className="mb-10 text-sm text-center text-gray-500">
            Photo by Debby Sereda
          </p>
        </div>

        <section className="container max-w-screen-lg mb-10">
          <p>
            From humble beginnings to worldwide recognition, Keith Scott's
            journey as a blues and rock guitarist is nothing short of
            extraordinary. With his parents' support and Muddy Waters'
            inspiration, Scott honed his skills and confidence, eventually
            catching the attention of blues legends like Hip Linkchain and Jimmy
            Dawkins.
          </p>{" "}
          <p>
            As he toured the globe, Scott's unique style and soulful sound
            gained momentum, paving the way for his solo career and the
            development of his signature 'heavy blues' style. With a discography
            spanning decades and a tireless work ethic, Scott continues to leave
            his mark on the music industry, entertaining audiences everywhere he
            goes.
          </p>
        </section>

        <Banner>
          <BannerHeadline>New Album Out Now</BannerHeadline>
          <p className="px-3">
            Listen to the latest release by Keith Scott and the Electric Blues
            Junkies
          </p>
          <div className="flex flex-col items-center justify-center w-full mt-6 md:flex-row">
            {listenButtons.map((button) => (
              <Button
                key={button.label}
                classes="md:mr-5 mb-5 md:mb-0"
                cb={() => router.push(button.url)}
              >
                {button.label}
              </Button>
            ))}
          </div>
          <Image
            src={newAlbum}
            alt="Keith on stage"
            className="w-full h-auto max-w-sm mx-auto mt-5 border-4 border-black shadow-lg md:max-w-2xl"
          />
          <div className="pt-10">
            <p>
              As featured in the December 2025 issue of{" "}
              <a
                href="https://www.facebook.com/bluesmattersmagazine"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blues Matters Magazine
              </a>{" "}
              UK!
            </p>
            <a
              href="https://www.facebook.com/bluesmattersmagazine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={bluesMattersCover}
                alt="Keith on stage"
                className="w-full h-auto max-w-sm mx-auto mt-5 border-4 border-black shadow-lg md:max-w-3xl"
              />
            </a>
          </div>
        </Banner>

        <Banner className="text-white bg-black">
          <div className="container relative mb-10 md:mb-16">
            <iframe
              className="w-full aspect-video"
              src="https://player.vimeo.com/video/715335299?h=abb0300b6f&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>

            <p className="hidden md:block">
              <a href="https://vimeo.com/715335299">
                Keith Scott - Lonesome Blues
              </a>{" "}
              from{" "}
              <a href="https://vimeo.com/mediamadegreat">Media Made Great</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <BannerHeadline>Videos</BannerHeadline>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {videos.map((video) => {
              return (
                <div key={video.title}>
                  <h3 className="mb-3 text-2xl font-semibold uppercase">
                    {video.title}
                  </h3>
                  <iframe
                    className="w-full aspect-video"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </Banner>

        <section className="max-w-4xl px-3 pt-10 pb-20 mx-auto lg:pt-20">
          <QuoteSlider />
        </section>

        <section className="container">
          <div className="flex flex-col items-center justify-center w-full">
            <BannerHeadline>Tour</BannerHeadline>
            <div className="pt-10 pb-5">
              <TourDatesMinimal tourDates={tourDates.slice(0, 3)} />
            </div>

            <Button classes="mb-10" cb={() => router.push("/shows")}>
              View All Tour Dates
            </Button>
          </div>
        </section>

        <section className="py-10 text-white bg-black">
          <BannerHeadline>Blues Societies</BannerHeadline>
          <div className="grid grid-cols-1 gap-5 py-5 text-center lg:grid-cols-2">
            {bluesSocieties.map((bs) => (
              <Link
                href={bs.link}
                key={bs.name}
                className="text-2xl text-white uppercase border-none"
              >
                {bs.name}
              </Link>
            ))}
          </div>
        </section>
      </Main>
    </>
  );
}
