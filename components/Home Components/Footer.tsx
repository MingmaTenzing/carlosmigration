import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../assests/Carlos Logo.png";
import fb from "../../assests/facebook.png";
import twitter from "../../assests/twitter.png";
import tiktok from "../../assests/tiktok.png";
type Props = {};
function Footer({}: Props) {
  return (
    <div className=" bg-[#1b182f] mt-10  p-4 py-10">
      <div className=" space-y-6 md:space-y-0 md:p-10 md:flex md:justify-around">
        <div>
          <Image
            src={logo}
            width={100}
            height={100}
            alt=" Carlos Logo"
            className=" invert   w-[160px]"
          />
        </div>
        <div className=" items-center flex space-x-3">
          <EnvelopeIcon className=" w-6 text-orange" />
          <div>
            <h3 className=" text-gray-400 font-light">Email Address</h3>
            <p className=" font-semibold text-white">needhelp@carlos.com</p>
          </div>
        </div>

        <div className=" items-center flex space-x-3">
          <PhoneIcon className=" w-6 text-orange" />
          <div>
            <h3 className=" text-gray-400 font-light">Call Now</h3>
            <p className=" font-semibold text-white">03343403403</p>
          </div>
        </div>
      </div>

      <div className="lg:justify-center  md:flex md:p-10 md:space-x-20  mt-4 space-y-8 md:space-y-0">
        <div className=" lg:flex space-y-4 lg:space-x-4 lg:space-y-0">
          <div className=" space-y-4">
            <h3 className=" text-lg font-semibold text-white">About</h3>
            <p className=" md:w-[300px] text-gray-400 font-light ">
              Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div className=" flex space-x-2">
              <Image
                src={fb}
                alt="Carlos Castro Facebook"
                width={80}
                height={20}
                className=" invert w-10 p-2   bg-black  bg-opacity-10 rounded-full "
              />
              <Image
                src={twitter}
                alt="Carlos Castro Facebook"
                width={80}
                height={20}
                className=" invert w-10 p-2   bg-black  bg-opacity-10 rounded-full "
              />
              <Image
                src={tiktok}
                alt="Carlos Castro Facebook"
                width={80}
                height={20}
                className=" invert w-10 p-2   bg-black  bg-opacity-10 rounded-full "
              />
            </div>
          </div>
          <div className=" space-y-3">
            <h3 className=" text-lg font-semibold text-white">Links</h3>
            <div className=" space-y-2 font-light text-gray-400">
              <p>Our Project</p>
              <p>About us</p>
              <p>Our Mission</p>
              <p>Meet the Team</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        {/** EXPLORE AND NEWSLETTER */}
        <div className=" lg:space-y-0 lg:flex lg:space-x-4 space-y-8">
          <div className=" space-y-3">
            <h3 className=" text-lg font-semibold text-white">Explore</h3>
            <div className=" space-y-2 font-light text-gray-400">
              <p>Site Map</p>
              <p>Help Center</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className=" space-y-3">
            <h3 className=" text-lg font-semibold text-white">Newsletter</h3>
            <div className=" space-y-2 font-light text-gray-400">
             <input className=" outline-none bg-transparent  border-b  md:w-full w-[70%]" placeholder="Enter your Email Address "></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
