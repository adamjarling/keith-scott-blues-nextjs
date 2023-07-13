import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

type ParallaxVideoProps = {
  headline: string;
  videoUrl: string;
  altText: string;
  subHeadline?: string;
};

const MotionImage = motion(Image);

const ParallaxVideo: React.FC<ParallaxVideoProps> = ({
  headline,
  videoUrl,
  altText,
  subHeadline,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0", "50%"]);

  return (
    <div className="relative w-full h-[45vh] md:h-[75vh] overflow-hidden">
      <motion.video
        style={{ y }}
        className="absolute top-0 bottom-0 object-cover min-h-full left-100"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4"></source>
      </motion.video>
      <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>
      <motion.div className="absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          {headline}
        </h1>
        {subHeadline && (
          <p className="text-lg text-white md:text-xl">{subHeadline}</p>
        )}
      </motion.div>
    </div>
  );
};

export default ParallaxVideo;
