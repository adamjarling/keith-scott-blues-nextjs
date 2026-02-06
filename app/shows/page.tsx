import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import TourDatesList from "@/components/TourDatesList";
import { getTourDates } from "@/lib/tour-dates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows",
};

export default async function Shows() {
  const tourDates = await getTourDates();

  return (
    <Main flushTop>
      <ParallaxHero
        altText="Keith Scott performing live"
        imageUrl="/photos/salmon-roots-blues-2017.jpg"
      />
      <Banner className="md:py-20">
        <BannerHeadline>Shows</BannerHeadline>
      </Banner>

      <section className="container">
        <TourDatesList tourDates={tourDates} />
      </section>
    </Main>
  );
}
