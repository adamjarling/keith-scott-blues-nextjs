import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import casey from "@/public/images/IMG_0221.jpg";
import TourDatesList from "@/components/TourDatesList";

const showDates = [
  {
    date: "May 15 Wed",
    venue: "Lyric Theater",
    time: "8:00pm",
    location: "Birmingham, AL, United States",
    rsvp: "RSVP",
  },
  {
    date: "May 15 Wed",
    venue: "Lyric Theater",
    time: "8:00pm",
    location: "Birmingham, AL, United States",
    rsvp: "RSVP",
  },
  {
    date: "May 15 Wed",
    venue: "Lyric Theater",
    time: "8:00pm",
    location: "Birmingham, AL, United States",
    rsvp: "RSVP",
  },
];

const Shows = () => {
  return (
    <Main>
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
