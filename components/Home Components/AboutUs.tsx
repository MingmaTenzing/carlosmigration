'use client'
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Carlos from "../../assests/Carlos Charlie Castro.jpg";
import dots from "../../assests/dots.png";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

type Props = {};
function AboutUs({}: Props) {
  useEffect(() => {
   Aos.init(); 
  }, [])
  return (
    <div className=" z-20 md:flex md:justify-center md:items-center relative   mt-20">
      <div className=" md:w-1/2 space-y-4 md:space-y-6 p-4">
        <div className=" space-y-3">
          <h3 data-aos="fade-up"  data-aos-once="true"  data-aos-duration="600" className=" md:text-base uppercase text-orange text-sm   font-semibold">
            Get to know me
          </h3>
          <h1 data-aos="fade-up"  data-aos-once="true"  data-aos-duration="700" className="  font-bold text-2xl md:text-3xl lg:text-4xl">
            Carlos Castro: Expert Migration Agent and International Student
            Advisor{" "}
          </h1>
          <h2 data-aos="fade-up"  data-aos-once="true"  data-aos-duration="800" className=" text-sm text-orange  italic ">
            Your Migration Journey Begins Here
          </h2>
        </div>

        <div>
          <p data-aos="fade-up"  data-aos-once="true"  data-aos-duration="900" className=" md:text-lg">
            I&apos;m Carlos Castro, an expert migration agent and international
            student advisor. I ensure a smooth journey for your migration and
            education goals abroad.
          </p>
        </div>
        <div className=" space-y-3 lg:space-y-0 lg:flex lg:space-x-10 md:text-lg">
          <div data-aos="fade-up"  data-aos-once="true"  data-aos-duration="1000" className=" space-y-3">
            <div className=" items-center space-x-4 flex">
              <CheckIcon className=" w-6 text-orange" />
              <p className=" font-semibold">Free consultation</p>
            </div>
            <div data-aos="fade-up"  data-aos-once="true"  data-aos-duration="1000" className=" items-center space-x-4 flex">
              <CheckIcon className=" w-6 text-orange" />
              <p className=" font-semibold">Easy & fast process</p>
            </div>
          </div>

          <div data-aos="fade-up"  data-aos-once="true"  data-aos-duration="1000" className="  space-y-3">
            <div className=" items-center space-x-4 flex">
              <CheckIcon className=" w-6 text-orange" />
              <p className=" font-semibold"> Affordable Fees</p>
            </div>
            <div  data-aos="fade-up"  data-aos-once="true"  data-aos-duration="1000" className=" items-center space-x-4 flex">
              <CheckIcon className=" w-6 text-orange" />
              <p className=" font-semibold"> Expert immigration agents</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-left"  data-aos-once="true"  data-aos-duration="900" className=" flex justify-center ">
        <Image
          src={Carlos}
          alt="Carlos Castro"
          width={312}
          height={400}
          className=" md:min-w-[400px]"
        />
      </div>
      <Image
      data-aos="fade-up"  data-aos-once="true"  data-aos-duration="1000"
        src={dots}
        width={119}
        height={247}
        alt="dots"
        className=" hidden lg:flex absolute -bottom-[280px] left-40"
      />
    </div>
  );
}
export default AboutUs;
