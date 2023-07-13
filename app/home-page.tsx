"use client";

import Block from "@/components/Block";
import Grid from "@/components/Grid";
import ParallaxVideo from "@/components/ParallaxVideo";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <main>
        <ParallaxVideo headline="" videoUrl="/IMG_9825.mp4" altText="Hero" />

        <section className="py-8">
          <SectionHeader>Educator</SectionHeader>
          <Grid>
            <Block
              bgImgSrc="/images/F55EB057-558E-48AF-8B78-BAE112545477.JPG"
              altText="Process"
              href="/process"
              label="Process"
            />
            <Block
              bgImgSrc="/images/F55EB057-558E-48AF-8B78-BAE112545477.JPG"
              altText="Student artwork"
              href="/student-artwork"
              label="Student Artwork"
            />
            <Block
              bgImgSrc="/images/F55EB057-558E-48AF-8B78-BAE112545477.JPG"
              altText="Student with magnifying glass"
              href="/curriculum"
              label="Curriculum"
            />
          </Grid>
        </section>

        <SectionHeader>Artist</SectionHeader>
        <Grid cols={2}>
          <Block
            bgImgSrc="/images/F55EB057-558E-48AF-8B78-BAE112545477.JPG"
            altText="Process"
            href="/work"
            label="Work"
          />
          <Block
            bgImgSrc="/images/F55EB057-558E-48AF-8B78-BAE112545477.JPG"
            altText="Student artwork"
            href="/photos"
            label="Photos"
          />
        </Grid>
      </main>
    </>
  );
}
