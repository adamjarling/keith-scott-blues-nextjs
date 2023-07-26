import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import { manifest } from "./manifest";
import path from "path";
import { Metadata } from "next";

const sizeOf = require("image-size");

const folder = "art";

export const metadata: Metadata = {
  title: "Art",
};

const GalleryPage = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );

  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  return (
    <Main>
      <Banner>
        <BannerHeadline>Artwork</BannerHeadline>
      </Banner>
      <p className="pb-5 text-center">
        Hand drawn sketches by Keith Scott. Inspired by blues and fishing.
      </p>

      {images && <MasonryGallery images={images} manifest={manifest} />}
    </Main>
  );
};

export default GalleryPage;
