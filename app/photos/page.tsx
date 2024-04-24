import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { Metadata } from "next";
import { promises as fs } from "fs";
import { manifest } from "./manifest";
import path from "path";

const sizeOf = require("image-size");

const folder = "photos";

export const metadata: Metadata = {
  title: "Photos",
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
      <section className="max-w-3xl py-8 mx-auto text-center">
        <BannerHeadline>Photos</BannerHeadline>
      </section>
      {images && <MasonryGallery images={images} manifest={manifest} />}
    </Main>
  );
};

export default GalleryPage;
