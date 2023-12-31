import Image from "next/image";
import bg from "../../../assests/Services Bg.jpg";
import australia from "../../../assests/Australia.jpg";
import carlos from "../../../assests/Carlos Charlie Castro Photo.png";
import {
  AcademicCapIcon,
  ArrowRightCircleIcon,
  BriefcaseIcon,
  DocumentArrowUpIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  HeartIcon,
  HomeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import HeroBackground from "../../../utilities/HeroBackground";

type Props = {};
function page({}: Props) {
  return (
    <div>
     <HeroBackground title="Services" subTitle="" bg={bg} />

      <div className="  lg:w-[2/3] m-auto p-4 mt-10  flex justify-center items-center  ">
        <div className=" md:w-1/2 space-y-4">
          <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl">
            Providing You The <span  className=" text-orange">Best Services</span>
          </h2>
          <p className=" lg:text-lg">
            Welcome to the world of migration and education in Australia, where
            opportunities abound and dreams come true. I believe that every
            individual deserves a chance to soar high and build a successful
            future in the land down under.
          </p>

          <p className=" lg:text-lg">
            Are you ready to embark on a life-changing adventure? Let us be your
            trusted guide, helping you navigate the complexities of migration
            with expertise and care. With our comprehensive range of services,
            we&apos;re here to make your journey smooth, seamless, and successful.
          </p>
        </div>
        <div className=" hidden md:flex">
          <Image
            src={carlos}
            alt="Carlos Castro"
            width={720}
            height={1008}
            className=" w-[300px] lg:w-[400px]"
          />
        </div>
      </div>

      <div
        id="services"
        className="  flex flex-col items-center md:flex-row md:flex-wrap md:justify-center"
      >
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <DocumentArrowUpIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Visa Application
            </h2>
            <p>
              {" "}
              Obtaining the right visa is the key that unlocks the door to
              Australia.We&apos;ll be your unwavering support, ensuring a golden
              ticket to your Australian dream.
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <AcademicCapIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Education Consultation
            </h2>
            <p>
              {" "}
              We&apos;ll guide you through the maze of options, empowering you to
              make informed decisions about your educational journey.
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <DocumentCheckIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Skills Assessment
            </h2>
            <p>
              Our team will assist you in assessing your qualifications and work
              experience, ensuring that you meet the requirements set by
              Australian authorities.{" "}
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <BriefcaseIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Job Search Assistance
            </h2>
            <p>
              Our job search assistance program will equip you with the tools
              and knowledge you need to stand out from the competition
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <HeartIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Health Insurance Guidance
            </h2>
            <p>
              {" "}
              We&apos;ll guide you in selecting the right health insurance plan that
              meets your needs and complies with Australian regulations.{" "}
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <PaperAirplaneIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Predeparture Support
            </h2>
            <p>
              Moving to a new country can be overwhelming, but with Carlos
              Migration and Education, you&apos;ll never feel alone.{" "}
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <HomeIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Accomodation
            </h2>
            <p>
              {" "}
              Whether it&apos;s a shared apartment, a student dormitory, or a cozy
              family home, we&apos;ll help you settle into your new Australian life
              with ease.
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
        {/** SERVICES */}
        <div className="group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] lg:w-[350px] h-[300px] border  flex space-x-8">
          <div>
            <DocumentTextIcon className=" w-12 font-light z-20 invert" />
          </div>
          <div className=" z-30 flex flex-col   justify-center  space-y-2">
            <h2 className=" font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200">
              Australian CV
            </h2>
            <p>
              {" "}
              Our professional resume writers will highlight your skills,
              qualifications, and experiences in a way that resonates with
              Australian employers.
            </p>
          </div>

          <span className="  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full"></span>

          <span className=" rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]"></span>
        </div>

        {/** SERVICES */}
      </div>

      
    </div>
  );
}
export default page;
