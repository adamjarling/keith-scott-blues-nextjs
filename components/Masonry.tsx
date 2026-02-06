"use client";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

export type MasonryImage = {
  filename: string;
  height: number;
  width: number;
  orientation?: number;
  type: string;
};

interface MasonryManifest {
  [key: string]: {
    title?: string;
    description?: string;
  };
}

interface Props {
  images: MasonryImage[];
  manifest?: MasonryManifest;
}

function getInfo(src: string, manifest?: MasonryManifest) {
  if (!src || !manifest) return null;
  const arr = src.split("/");
  const fileName = arr[arr.length - 1];
  return manifest[fileName] ?? null;
}

export default function MasonryGallery({ images = [], manifest }: Props) {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const galleryImages = !manifest
    ? images
    : images.filter((i) => {
        const fileName = i.filename.slice(i.filename.lastIndexOf("/") + 1);
        return manifest.hasOwnProperty(fileName);
      });

  // Randomly sort galleryImages (stable across renders with useMemo if needed)
  const sortedImages = [...galleryImages].sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {sortedImages.map((image, index) => {
          const info = getInfo(image.filename, manifest);
          return (
            <div
              key={image.filename}
              className="mb-5 break-inside-avoid transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={image.filename}
                width={image.width}
                height={image.height}
                onClick={() => setPhotoIndex(index)}
                alt={info?.description ?? "Gallery image"}
                className="cursor-pointer w-full h-auto"
              />
              {info?.description && (
                <p className="pt-2 font-light tracking-wider text-center">
                  {info.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <Lightbox
        open={photoIndex >= 0}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        slides={sortedImages.map((i) => {
          const info = getInfo(i.filename, manifest);
          return {
            src: i.filename,
            key: i.filename,
            width: i.width,
            height: i.height,
            title: info?.title ?? "",
            description: info?.description ?? "",
          };
        })}
        plugins={[Captions]}
        captions={{
          descriptionTextAlign: "center",
        }}
      />
    </>
  );
}
