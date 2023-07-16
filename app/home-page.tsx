"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import { motion } from "framer-motion";
import QuoteSlider from "@/components/QuoteSlider";
import Link from "next/link";
import TourDates from "@/components/TourDates";
import useTourDates from "@/hooks/use-tour-dates";
import oneNation from "../public/images/one-nation-under-the-blues_cover-3000px.jpg";
import Image from "next/image";

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

export default function Home() {
  const tourDates = useTourDates();

  return (
    <>
      <Main flushTop>
        {/* <ParallaxHero
          imageUrl="/images/keith-bw_onutb-cover-bg.png"
          // headline="Keith Scott and the Electric Blues Junkies"
          altText="Yo Mama"
          // subHeadline="Some random subheadline content can go here to describe something"
          // Button={<Button cb={() => console.log("yo")}>Get Started</Button>}
        /> */}
        <Banner className="">
          <Image src={oneNation} alt="Album Cover" className="mb-10" />
          <BannerHeadline>New Album Out Now</BannerHeadline>
          <p>
            Pick up the latest release by Keith Scott and the Electric Blues
            Junkies
          </p>

          <Button classes="mt-6" cb={() => console.log("yo")}>
            Buy Now
          </Button>
        </Banner>

        <Banner className="text-white bg-black">
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

        <section className="container">
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2">
            <QuoteSlider />
            <div>
              <h3 className="mb-3 text-2xl font-semibold uppercase">
                Tour Dates
              </h3>
              <TourDates tourDates={tourDates.slice(0, 2)} />
              <Link href="/tour" className="button">
                View All Dates
              </Link>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
}
