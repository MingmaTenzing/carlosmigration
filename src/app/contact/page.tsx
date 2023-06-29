"use client";

import Image from "next/image";
import bg from "../../../assests/Contact Background.jpg";
import { PhoneIcon } from "@heroicons/react/24/outline";
import fbicon from "../../../assests/facebook.png";
import igicon from "../../../assests/ig.png";
import twitterIcon from "../../../assests/twitter.png";
import tiktokIcon from "../../../assests/tiktok.png";

type Props = {};
function Contact({}: Props) {
  return (
    <div>
      <div className="  overflow-hidden w-full h-[280px]  border relative">
        <div className=" space-y-2 lg:space-y-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-center text-orange z-30">
            Contact
          </h1>
          <h2 className=" text-2xl text-white font-semibold md:text-xl ">
            It&apos;s your turn to change your{" "}
            <span className=" text-orange">future.</span>{" "}
          </h2>
        </div>

        <Image
          src={bg}
          alt="Contact Background Image"
          width={640}
          height={247}
          className="  w-full h-full object-cover"
        />
        <span className=" bg-[#201c2c] h-full w-full top-0  left-0 bg-opacity-90 absolute "></span>
      </div>

      <div className=" p-4 mt-4">
        <div className=" md:text-center space-y-3">
          <p className=" text-sm font-semi uppercase text-orange">
            How Can i help you
          </p>
          <h2 className=" font-bold text-3xl"> Write a Message</h2>
        </div>
      </div>

      <div className=" mt-6 flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:justify-center md:space-x-6 md:items-start">
        {/** FORM AND CONTACT DETAILS */}
        <div>
          <form className="  space-y-4  flex flex-col justify-center items-center  ">
            <div className=" space-y-3">
              <div>
                <input
                  className="  h-[60px]  p-2  min-w-[300px] md:w-[400px] outline-none bg-gray-100 rounded-lg "
                  type="text"
                  required
                  placeholder="Your Name"
                ></input>
              </div>
              <div>
                <input
                  className="  h-[60px] p-2   min-w-[300px] md:w-[400px] outline-none bg-gray-100 rounded-lg "
                  type="email"
                  required
                  placeholder="Your Eamil Address"
                ></input>
              </div>
            </div>
            <div>
              <textarea
                placeholder=" Enter your Message"
                className=" p-2  bg-gray-100 outline-none   min-w-[300px] md:w-[400px] rounded-lg h-[300px]"
              />
            </div>
            <button className=" font-semibold bg-orange text-white p-4 rounded-lg px-6 hover:scale-105 transition-all ease-linear duration-150 hover:shadow-lg ">
              Submit
            </button>
          </form>
        </div>

        {/** CALL NOW SECTION WITH LOCATION AND DETAILS */}
        <div className="">
          <div className=" w-[320px] h-[340px]  rounded-lg overflow-hidden border">
            <div className=" flex items-center space-x-4 justify-center h-[30%] bg-orange">
              <PhoneIcon className=" w-8 text-white" />
              <div className=" font-semi text-white">
                <h2 className=" uppercase">Call Now</h2>
                <p className=" font-semibold">0420 45343 3434</p>
              </div>
            </div>
            <div className=" space-y-8 p-4 ">
              <div className=" space-y-4 text-gray-600">
                <p>carloscastro@support.com</p>
                <p>121 Hay Street, West Perth, Perth, Western Australia</p>
              </div>

              <div className=" flex space-x-3">
                <Image
                  src={fbicon}
                  alt="Socials Image"
                  width={100}
                  height={100}
                  className="  w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200     bg-gray-300"
                />
                <Image
                  src={igicon}
                  alt="Socials Image"
                  width={100}
                  height={100}
                  className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                />
                <Image
                  src={twitterIcon}
                  alt="Socials Image"
                  width={100}
                  height={100}
                  className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                />
                <Image
                  src={tiktokIcon}
                  alt="Socials Image"
                  width={100}
                  height={100}
                  className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
