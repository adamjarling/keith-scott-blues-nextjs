import { BsApple, BsSpotify, BsYoutube } from "react-icons/bs";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import { Metadata } from "next";
import ParallaxHero from "@/components/ParallaxHero";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Discography",
};

function IconWrapper({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl border-0"
    >
      {children}
    </a>
  );
}

const Discography = () => {
  return (
    <Main flushTop={false}>
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
                <div className="flex items-center w-full space-x-4">
                  {album.spotifyUrl && (
                    <IconWrapper url={album.spotifyUrl}>
                      <BsSpotify />
                    </IconWrapper>
                  )}
                  {album.youTubeMusicUrl && (
                    <IconWrapper url={album.youTubeMusicUrl}>
                      <BsYoutube />
                    </IconWrapper>
                  )}
                  {album.appleMusicUrl && (
                    <IconWrapper url={album.appleMusicUrl}>
                      <BsApple />
                    </IconWrapper>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Discography;
