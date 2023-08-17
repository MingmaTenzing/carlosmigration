"use client";

import Image from "next/image";
import bg from "../../../assests/Contact Background.jpg";
import { PhoneIcon } from "@heroicons/react/24/outline";
import threads from "../../../assests/threads-app-icon.png";
import igicon from "../../../assests/ig.png";
import twitterIcon from "../../../assests/twitter.png";
import tiktokIcon from "../../../assests/tiktok.png";
import HeroBackground from "../../../utilities/HeroBackground";
import { FormEvent, useEffect, useRef, useState } from "react";
import youtube from "../../../assests/icons8-youtube.svg";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

type Props = {};
function Contact({}: Props) {
  const form = useRef(null);

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fa3719s",
        process.env. NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        form.current!,
        "d3k0Sn8LdDyA8MPmb"
      )
      .then(
        (result) => {
          toast.success("Your Message has been sent");
        },
        (error) => {
          toast.error(
            "There was an error sending your message. Please try again later."
          );
        }
      );
    toast.dismiss();
  }
  return (
    <div>
      <HeroBackground
        title="Contact"
        subTitle="It's your turn to change your future"
        bg={bg}
      />
      <Toaster />

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
          <form
            ref={form}
            onSubmit={sendMessage}
            className="  space-y-4  flex flex-col justify-center items-center  "
          >
            <div className=" space-y-3">
              <div>
                <input
                  className="  h-[60px]  p-2  min-w-[300px] md:w-[400px] outline-none bg-gray-100 rounded-lg "
                  type="text"
                  required
                  name="user_name"
                  placeholder="Your Name"
                ></input>
              </div>
              <div>
                <input
                  className="  h-[60px] p-2   min-w-[300px] md:w-[400px] outline-none bg-gray-100 rounded-lg "
                  type="email"
                  required
                  name="user_email"
                  placeholder="Your Eamil Address"
                ></input>
              </div>
            </div>
            <div>
              <textarea
                placeholder=" Enter your Message"
                name="message"
                className=" p-2  bg-gray-100 outline-none   min-w-[300px] md:w-[400px] rounded-lg h-[300px]"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className=" font-semibold bg-orange text-white p-4 rounded-lg px-6 hover:scale-105 transition-all ease-linear duration-150 hover:shadow-lg "
            >
              Submit
            </button>
          </form>
        </div>

        {/** CALL NOW SECTION WITH LOCATION AND DETAILS */}
        <div className="">
          <div  className=" text-sm w-[90%] md:w-[320px] m-auto h-[400px]  rounded-lg  border">
            <div className="  flex items-center space-x-4 justify-center h-[30%]  rounded-t-lg bg-orange">
              <PhoneIcon className=" w-8 text-white" />
              <div className=" text-base font-semibold text-white">
                <h2 className=" uppercase">Call Now</h2>
                <p className=" font-semibold">+61 425 481 703</p>
              </div>
            </div>
            <div className=" space-y-8 p-4 ">
              <div className=" space-y-4 text-gray-600">
                <div className= " flex space-x-2">
                  <p>Email: </p>
                  <p>carlos@goldenticketmigration.com </p>
                </div>

                <p>Migration Agent Registration Number (MARN): 2318194</p>
              </div>

              <div className=" flex space-x-3">
                <Link href="https://twitter.com/charlieshun" target="_blank">
                  <Image
                    src={twitterIcon}
                    alt="Socials Image"
                    width={100}
                    height={100}
                    className="  w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200     bg-gray-300"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/charlieshun/"
                  target="_blank"
                >
                  <Image
                    src={igicon}
                    alt="Socials Image"
                    width={100}
                    height={100}
                    className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                  />
                </Link>

                <Link
                  href="https://www.threads.net/@charlieshun"
                  target="_blank"
                >
                  <Image
                    src={threads}
                    alt="Socials Image"
                    width={100}
                    height={100}
                    className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@charlieshun"
                  target="_blank"
                >
                  <Image
                    src={tiktokIcon}
                    alt="Socials Image"
                    width={100}
                    height={100}
                    className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/charlieshun"
                  target="_blank"
                >
                  <Image
                    src={youtube}
                    alt="Socials Image"
                    width={100}
                    height={100}
                    className=" w-10 rounded-full p-2  hover:invert hover:scale-105 transition-all ease-linear duration-200    bg-gray-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
