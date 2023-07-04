"use client";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Metadata } from "next";

import VisaNavigation from "../../../../../utilities/VisaNavigation";
import Image from "next/image";
import posterImg from "../../../../../assests/Carlos Castro Migration Lawyer.jpeg";
import HeroBackground from "../../../../../utilities/HeroBackground";
import bg from "../../../../assests/family visa.jpg";
import Link from "next/link";

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
          Seize Your Skilled Visa Dreams with Carlos Castro, Your Trusted
          Migration Agent
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

        <h2 className=" text-xl md:text-2xl">
          Detail Information of Skilled Subclass visas
        </h2>

        <div className=" flex flex-col  space-y-3">
          <Link href="/"  className=" underline text-blue-800">189 Visa: A Pathway to Permanent Residency</Link>
          <Link href="/" className=" underline text-blue-800">491 Visa: A Gateway to Regional Opportunities</Link>
          <Link href="/" className=" underline text-blue-800">485 Visa: Building Your Post-Study Career</Link>
          <Link href="/" className=" underline text-blue-800">
            190 Visa: State Nomination for Skilled Professionals
          </Link>
          <Link href="/" className=" underline text-blue-800">Other Skilled Visa</Link>
        </div>
      </div>
    </>
  );
}
export default skilledVisa;
