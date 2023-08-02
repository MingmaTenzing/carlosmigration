"use client";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  subtitle: string;
};
function WebinarItem({ image, title, subtitle }: Props) {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <div className="m-2 ">
      <div ref={hoverRef} className="group relative  overflow-hidden">
        <Image
          src={image}
          alt=" PTE TEST Preparation"
          width={600}
          height={500}
          className=" h-[400px] md:w-[320px]  lg:w-[270px] md:h-[500px] object-cover"
        />
        <span className=" absolute   bg-gradient-to-t from-black to-transparent top-0 left-0  w-full h-full  z-10 "></span>
        <div className="  space-y-3 w-full absolute bottom-0 z-20 p-4">
          <div className=" w-full  group-hover:opacity-0 opacity-1 absolute bottom-10  transition-all duration-200 ease-linear">
            {" "}
            <div className=" w-1/2 h-1 bg-orange  rounded-lg" />
            <p className=" text-white  text-2xl font-bold">{title}</p>
          </div>

          <AnimatePresence>
            {isHover && (
              <motion.div
                initial={{ y: 200 }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                }}
                exit={{
                  y: 200,
                  transition: {
                    duration: 0.6,
                  },
                }}
                className="  "
              >
                {" "}
                <div className=" w-1/2 h-1 bg-orange  rounded-lg" />
                <p className=" text-white  text-2xl font-bold">{title}</p>
                <p className=" text-white">{subtitle}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
export default WebinarItem;
