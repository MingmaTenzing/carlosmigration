'use client'
import Image from "next/image";
import logo from "../../assests/Carlos Logo.png";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};
function Nav({}: Props) {
  const router = useRouter();
  return (
    <div className="shadow-md  ">
      <div className="  m-auto  lg:w-[1200px] lg:p-10 md:p-8  p-4 flex items-center justify-between">
        <div className=" flex ">
          
            <Image
              src={logo}
              alt="Carlos Castro Logo"
              width={200}
              height={200}
              className="  w-[120px] lg:w-[200px] lg:mr-20"
              onClick={() => router.push("/")}
            />
         
        </div>
        <div className=" flex ">
          <Bars3Icon className=" lg:hidden w-6" />
          <div className=" hidden lg:flex space-x-10">
            <Link
              href="/visas"
              className=" text-gray-500 hover:text-black transition-all ease-linear duration-150"
            >
              Visas
            </Link>
            <Link
              href="/services"
              className=" text-gray-500 hover:text-black transition-all ease-linear duration-150"
            >
              Services
              
            </Link>
            <Link
              href="/contact"
              className=" text-gray-500 hover:text-black transition-all ease-linear duration-150"
            >
              Contact
            </Link>
            <Link
              href="/"
              className=" text-gray-500 hover:text-black transition-all ease-linear duration-150"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
