import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";

const Discography = () => {
  return (
    <Main flushTop={true}>
      <ParallaxHero
        altText="Some alt text"
        imageUrl={`/images/keith-test.png`}
      />
      <Banner>
        <BannerHeadline>Discography</BannerHeadline>
      </Banner>

      <section className="container mb-10"></section>
    </Main>
  );
};

export default Discography;
