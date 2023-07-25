import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import { manifest } from "./manifest";
import path from "path";

const sizeOf = require("image-size");

const folder = "photos";

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
        <BannerHeadline>Artwork</BannerHeadline>
      </section>
      <p className="text-center">Coming soon...</p>
      {/* {images && <MasonryGallery images={images} />} */}
    </Main>
  );
};

export default GalleryPage;
