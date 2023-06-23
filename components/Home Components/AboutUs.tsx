import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Carlos from "../../assests/Carlos Charlie Castro.jpg"
import dots from "../../assests/dots.png"
type Props = {};
function AboutUs({}: Props) {
  return (
    <div className=" z-20 md:flex md:justify-center md:items-center relative   mt-20">
      <div className=" md:w-1/2 space-y-4 md:space-y-6 p-4">
        <div className=" space-y-3">
          <h3 className=" md:text-base uppercase text-orange text-sm   font-semibold">
            Get to know me
          </h3>
          <h1 className="  font-bold text-2xl md:text-3xl lg:text-4xl">
            Carlos Castro: Expert Migration Agent and International Student
            Advisor{" "}
          </h1>
          <h2 className=" text-sm text-orange  italic ">
            Your Migration Journey Begins Here
          </h2>
        </div>

        <div>
          <p className=" md:text-lg">
            I'm Carlos Castro, an expert migration agent and international
            student advisor. I ensure a smooth journey for your migration and
            education goals abroad.
          </p>
        </div>
        <div className=" space-y-3 lg:space-y-0 lg:flex lg:space-x-10 md:text-lg">
            <div  className=" space-y-3">

          <div className=" items-center space-x-4 flex">
            <CheckIcon className=" w-6 text-orange" />
            <p className=" font-semibold">95% success rates</p>
          </div>
          <div className=" items-center space-x-4 flex">
            <CheckIcon className=" w-6 text-orange" />
            <p className=" font-semibold">Free consultation</p>
          </div>
          <div className=" items-center space-x-4 flex">
            <CheckIcon className=" w-6 text-orange" />
            <p className=" font-semibold">Easy & fast process</p>
          </div>
            </div>

            <div className="  space-y-3">

          <div className=" items-center space-x-4 flex">
            <CheckIcon className=" w-6 text-orange" />
            <p className=" font-semibold"> Affordable Fees</p>
          </div>
          <div className=" items-center space-x-4 flex">
            <CheckIcon className=" w-6 text-orange" />
            <p className=" font-semibold"> Expert immigration agents</p>
          </div>
          <div className=" items-center space-x-4 flex">
            <CheckIcon className=" w-6 text-orange" />
            <p className=" font-semibold"> Over 30 years experience</p>
          </div>
            </div>
        </div>
      </div>

      <div className=" flex justify-center ">
        <Image src={Carlos} alt="Carlos Castro" width={312} height={400}  className=" md:min-w-[400px]"/>
      </div>
      <Image src={dots} width={119} height={247} alt="dots" className=" hidden lg:flex absolute -bottom-[280px] left-40" />
    </div>
  );
}
export default AboutUs;
