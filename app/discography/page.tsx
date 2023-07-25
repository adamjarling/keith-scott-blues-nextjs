import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import { albums } from "@/data/albums";

const Discography = () => {
  return (
    <Main flushTop={true}>
      <ParallaxHero
        altText="Some alt text"
        imageUrl={`/images/keith-bw_onutb-cover-bg.png`}
      />
      <Banner>
        <BannerHeadline>Discography</BannerHeadline>
      </Banner>

      <section className="container my-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {albums.map((album) => (
            <div key={album.title} className="flex flex-col">
              <Image src={album.imgSrc} alt={album.title} />
              <div className="space-y-3">
                <h3 className="mt-5 mb-2 text-2xl font-semibold uppercase">
                  {album.title}
                </h3>
                <div>{album.year}</div>
                <div>{album.trackCount}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Discography;
