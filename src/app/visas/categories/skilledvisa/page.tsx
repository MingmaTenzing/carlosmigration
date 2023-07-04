"use client";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Metadata } from "next";

import VisaNavigation from "../../../../../utilities/VisaNavigation";
import Image from "next/image";
import posterImg from "../../../../../assests/Carlos Castro Migration Lawyer.jpeg";
import HeroBackground from "../../../../../utilities/HeroBackground";
import bg from "../../../../assests/family visa.jpg";

type Props = {};
export const metadata: Metadata = {
  title: "Family Visa",
  description: " Carlos Castro Migration and Education Services",
};

function skilledVisa({}: Props) {
  return (
    <>
      {/** VISA INFORMATION BLOCK */}
      <div className=" space-y-5  ">
        <Image
          src={posterImg}
          width={750}
          height={420}
          alt="Student Visa Image"
          className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
        />
        <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
        Seize Your Skilled Visa Dreams with Carlos Castro, Your Trusted Migration Agent
        </h1>
        <p>
          Navigating the intricate world of visas and immigration can be a
          challenging and time-consuming process. From understanding the complex
          requirements to gathering the necessary documentation, every step is
          crucial to ensure a successful outcome. That's where Carlos Castro, a
          highly skilled and experienced migration agent, comes in. With his
          extensive knowledge and personalized approach, Carlos Castro is
          dedicated to simplifying your visa journey and ensuring a seamless
          transition to your desired destination.
        </p>

        <p>
          With a wealth of experience in assisting individuals from various
          backgrounds and nationalities, Carlos Castro has established himself
          as a trusted migration agent. Whether you are aiming to obtain a 189,
          491, 485, 190 visa, or any other visa subclass, Carlos Castro has the
          expertise to guide you through the intricate processes involved.
        </p>
      
      </div>
    </>
  );
}
export default skilledVisa;
