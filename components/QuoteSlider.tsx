import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";

const quotes = [
  {
    description: `Blues music is the essence of our culture.  It is derived from the roots of everything we participate in our lives, from relationships with our families, friends, and significant others.  The music is an understanding of our survival in this world and is tied into the rhythms of daily life....  `,
    author: "Keith Scott",
    caption: "Interview with Greece Blues Group Society",
  },
  {
    description: `...that is why people respond to blues even if they haven't heard the music before.  Blues inspires me to bring a different listening experience and a break from ordinary pop music.  I love to travel and perform for people that are not familiar with the art form.`,
    author: "Keith Scott",
    caption: "Interview with Greece Blues Group Society",
  },
  {
    description: `It was pretty incredible," he says. "After I got to Chicago, the next thing I know I am at the Checkerboard Lounge and Buddy Guy was there,
    just hanging around. Junior Wells was there and everybody was real
    friendly — and it wasn't commercialized at all.`,
    author: "Keith Scott",
    caption: "Memories on first gigging in Chicago",
  },
  {
    description: `I didn't think I'd be in a band until I met Muddy Waters and
    his band. Then I said, 'I want to be in a blues band.' They
    were just so stately and well-dressed, and they took their
    music so seriously. They seemed like they were gentlemen and
    they loved what they did.`,
    author: "Keith Scott",
    caption: "First time meeting Muddy Waters in Florida",
  },
];

const QuoteSlider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {quotes.map(({ description, author, caption }) => (
        <blockquote key={caption} className="text-2xl italic">
          {description}
          <cite className="block pt-3 not-italic text-gray-600">
            {author} - {caption}
          </cite>
        </blockquote>
      ))}
    </Carousel>
  );
};

export default QuoteSlider;
