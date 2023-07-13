import Image from "next/image";
import bioPic from "public/images/IMG_1133.jpg";

const AboutPage = async () => {
  return (
    <>
      {/* <PageTitleBanner>Me</PageTitleBanner> */}
      <div className="container">
        <p className="pt-0 text-justify">
          I live and work in Chicago, USA as an artist and educator. My
          artmaking and teaching practices are both exciting and challenging. I
          work intently to understand these challenges as seeds for personal
          growth, and am in a constant state of learning. The people and street
          art in Chicago and cities around the world inspire my photography,
          paintings and collages. A regular hot yoga practice helps keep me
          mentally and physically fit, and provides additional insights for
          creative work. I share an apartment with my musician partner Adam, and
          loving cat, Topanga, on a street which overlooks Lake Michigan. We can
          hear the waves when our windows are open.
        </p>
        <p className="pt-0 text-justify">
          My artmaking process and teaching practice are interconnected and
          inform one another. I work with an eclectic group of students from all
          around the city of Chicago and in one of the most ethnically diverse
          neighborhoods and schools in our city. I prioritize utilizing their
          input, feedback, questions and personal stories as ingredients for
          building engaging and innovative curriculum. This is an integral part
          of the collaborative artistic partnership between students and myself;
          helping students to develop their own ideas and to make real-world
          connections through the messy process of making art. I work hard to
          build trusting relationships with students in order to create an
          environment where they feel comfortable to play with art materials and
          their own unique ideas. Students often comment about how the class is
          their favorite part of the day, a dedicated space and time for them to
          freely experiment with projects they&apos;ve actively helped to shape.
          I&apos;ve been teaching visual art in public schools for the past 10
          years.
        </p>

        <Image src={bioPic} alt="Casey Murtaugh" />
      </div>
    </>
  );
};

export default AboutPage;
