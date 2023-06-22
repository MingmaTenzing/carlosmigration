"use client";
import Image from "next/image";
import travel from "../../assests/travel.jpg";
import passport from "../../assests/passport.jpg";
import visa from "../../assests/visa application.jpg";
import { Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};
function Hero({}: Props) {
  const fadImages = [
    {
      src: travel,
      caption: "Immigration & Visa Services",
    },
    {
      src: passport,
      caption: "Apply for Quick Migration",
    },
    {
      src: visa,
      caption: "Solve your Visa Concerns",
    },
  ];
  return (
    <div className=" min-w-full">
      <Fade 
        
        transitionDuration={1400}
        duration={4000}
        autoplay={true}
        arrows={false}
        canSwipe={true}
      >
        {fadImages.map((fadeImage, index) => (
          <div className=" w-full relative" key={index}>
            <Image
              src={fadeImage.src}
              alt=" Carlos Castro Services"
              width={1200}
              height={800}
              className=" z-10 w-full  object-cover object-center h-[400px]  brightness-50 md:h-[500px] "
            />

<div className="z-20  absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">

            <h2 className="  font-bold text-white text-3xl md:text-5xl  lg:text-6xl  ">
              {fadeImage.caption}
            </h2>
            <button className=" bg-[#ff5857] text-white p-3 mt-4 rounded-lg hover:bg-[#444] text-sm px-4 transition-all ease-linear duration-150">Contact Now</button>
</div>

            <span className=" w-full h-full absolute top-0 left-0 opacity-90 z-10 bg-[#201c2c]"></span>
          </div>
        ))}
      </Fade>
    </div>
  );
}
export default Hero;
