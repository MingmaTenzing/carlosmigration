"use client";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Metadata } from "next";

import VisaNavigation from "../../../../../utilities/VisaNavigation";
import Image from "next/image";
import posterImg from "../../../../../assests/Employer.jpg";
import HeroBackground from "../../../../../utilities/HeroBackground";
import bg from "../../../../assests/family visa.jpg";
import Link from "next/link";

type Props = {};
export const metadata: Metadata = {
  title: "Family Visa",
  description: " Carlos Castro Migration and Education Services",
};

function employersponsoredVisa({}: Props) {
  return (
    <>
      {/** VISA INFORMATION BLOCK */}
      <div className=" space-y-5 ">
        <Image
          src={posterImg}
          width={750}
          height={420}
          alt="Student Visa Image"
          className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
        />
        <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
          Navigating Employer-Sponsored Visa Options in Australia: An In-Depth
          Look at Subclasses 400, 408, 407, 482, and 494
        </h1>
        <p>
          Australia has long been an attractive destination for skilled
          professionals seeking career growth and diverse opportunities. With
          its robust economy and welcoming environment, the country offers a
          range of visa options for international workers. Among these,
          employer-sponsored visas hold significant appeal, enabling individuals
          to secure employment with Australian companies and contribute to the
          nation's thriving industries. In this article, we delve into the
          intricacies of several prominent employer-sponsored visa subclasses:
          400, 408, 407, 482, and 494. By exploring their eligibility criteria,
          conditions, and application procedures, aspiring visa applicants can
          gain a comprehensive understanding of these pathways and make informed
          decisions about their professional journey in Australia. Whether
          you're a prospective employee or an employer seeking to sponsor
          skilled talent, this guide will serve as a valuable resource to
          navigate the complexities of employer-sponsored visas in Australia.
        </p>
        <h2 className=" text-xl md:text-2xl">
          Detail Information of Subclass visas
        </h2>
        <div className=" flex flex-col  space-y-3">
          <Link href="/visas/categories/employersponsoredvisa/subclass400" className=" underline text-blue-800">
            Subclass 400
          </Link>
          <Link href="/" className=" underline text-blue-800">
            Subclass 408{" "}
          </Link>
          <Link href="/" className=" underline text-blue-800">
            Subclass 407{" "}
          </Link>
          <Link href="/" className=" underline text-blue-800">
            Subclass 482
          </Link>
          <Link href="/" className=" underline text-blue-800">
            Subclass 494
          </Link>
        </div>
      </div>
    </>
  );
}
export default employersponsoredVisa;
