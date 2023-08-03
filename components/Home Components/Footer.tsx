import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../assests/Carlos Logo.png";
import twitter from "../../assests/twitter.png";
import facebook from "../../assests/facebook.png";
import instagram from "../../assests/instagram.png";
import operaHouse from "../../assests/opera.png";
import Link from "next/link";
type Props = {};
function Footer({}: Props) {
  return (
    <div className="overflow-hidden z-20 relative mt-10  bg-[#1b182f] text-white p-4 py-10 md:py-20">
      <div className=" lg:w-[1200px] m-auto">
        <div className=" md:flex items-center  justify-around space-y-8 mb-10 ">
          <div>
            <Image
              src={logo}
              alt="Carlos Castro Logo"
              className=" invert w-40"
            />
          </div>
          <div className=" flex space-x-2 items-center">
            <EnvelopeOpenIcon className=" w-10 text-orange" />
            <div className=" flex flex-col">
              <p className=" uppercase text-gray-400">Email Address</p>
              <p>carlos@goldenticketmigration.com</p>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <PhoneIcon className=" w-10 text-orange" />

            <div className=" flex flex-col">
              <p className=" uppercase text-gray-400">Phone number</p>
              <p>+61 425 481 703</p>
            </div>
          </div>
        </div>

        {/** SECOND LINE */}

        <div className="   md:flex  md:justify-around space-y-6">
          {/** ABOUT */}
          <div className=" space-y-3 md:w-1/3">
            <p className=" text-gray-400 ">
              Achieve your dream goal of migrating to Australia with Carlos
              Castro. Follow me on socials to stay upto date with the latest
              news.
            </p>
            <p className=" text-gray-400 ">
              Migration Agent Registration Number (MARN): 2318194
            </p>
            <div className=" flex space-x-3">
              <Image
                src={twitter}
                className="   invert grayscale hover:scale-110 transition-transform ease-linear duration-200 cursor-pointer md:w-8   w-6"
                alt="Twitter Logo"
              />
              <Image
                src={facebook}
                className="    invert grayscale hover:scale-110 transition-transform ease-linear duration-200 cursor-pointer md:w-8 w-6"
                alt="Twitter Logo"
              />
              <Image
                src={instagram}
                className="    invert grayscale hover:scale-110 transition-transform ease-linear duration-200 cursor-pointer md:w-8 w-6"
                alt="Twitter Logo"
              />
            </div>
          </div>
          {/** Links */}
          <div className=" space-y-3 flex flex-col">
            <h2 className=" font-semibold text-lg">Links</h2>

            <Link href="/home" className=" text-gray-400">
              Home
            </Link>
            <Link href="/visas" className=" text-gray-400">
              Visas
            </Link>
            <Link href="/services" className=" text-gray-400">
              Services
            </Link>
            <Link href="/contact" className=" text-gray-400">
              Contact
            </Link>
          </div>
          <div className=" space-y-3 flex flex-col">
            <h2 className=" font-semibold text-lg">Explore</h2>
            <Link href="/blog" className=" text-gray-400">
              Blog
            </Link>
            <Link
              href="/visas/categories/studentvisa"
              className=" text-gray-400"
            >
              Student Visa
            </Link>
            <Link
              href="/visas/categories/employersponsoredvisa"
              className=" text-gray-400"
            >
              Employer Sponsored Visa
            </Link>
            <Link href="/visas/categories/othervisa" className=" text-gray-400">
              Work Visa
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={operaHouse}
          className=" invert  z-10 hidden md:flex absolute lg:w-[600px] -bottom-10 lg:-bottom-30 right-0 opacity-20"
          alt="Opera House Sydney "
        />
      </div>
    </div>
  );
}
export default Footer;
