"use client";
import { Metadata } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import posterImg from "../../../../../../assests/Subclass407.jpg";

type Props = {};

function Subclass407({}: Props) {
  return (
    <div className=" space-y-5">
      <Image
        src={posterImg}
        width={750}
        height={420}
        alt="Student Visa Image"
        className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
      />

      <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
        Unlock New Opportunities with the Australian 407 Visa: Your Golden
        Ticket to Adventure!
      </h1>
      
    </div>
  );
}
export default Subclass407;
