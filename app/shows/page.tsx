import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import TourDatesList from "@/components/TourDatesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows",
};

const Shows = () => {
  return (
    <Main flushTop>
      <ParallaxHero
        altText="Some alt text"
        imageUrl={`/photos/salmon-roots-blues-2017.jpg`}
      />
      <Banner className="md:py-20">
        <BannerHeadline>Shows</BannerHeadline>
      </Banner>

      <section className="container">
        <TourDatesList />
      </section>
    </Main>
  );
};

export default Shows;
