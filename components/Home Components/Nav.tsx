"use client";
import Image from "next/image";
import logo from "../../assests/Carlos Logo.png";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {};
function Nav({}: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = openModal ? "hidden" : "auto";
    }
  }, [openModal]);
  return (
    <div className="shadow-md  relative  z-100">
      <div className="  m-auto  lg:w-[1200px] lg:p-10 md:p-8  p-4 flex items-center justify-between">
        <div className=" flex ">
          <Link href="/">
            <Image
              src={logo}
              alt="Carlos Castro Logo"
              width={200}
              height={200}
              className="  w-[120px] lg:w-[200px] lg:mr-20"
            />
          </Link>
        </div>
        <div className=" flex ">
          <Bars3Icon
            className=" lg:hidden w-6"
            onClick={() => setOpenModal(true)}
          />
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
              href="/blog"
              className=" text-gray-500 hover:text-black transition-all ease-linear duration-150"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                type: "fade",
                stiffness: 500,
              },
            }}
            exit={{ x: 100, opacity: 0 }}
            className="  p-4 absolute   h-[100vh] w-[250px] right-0 bg-gray-100 top-0  z-50"
          >
            <div className="   flex justify-end">
              <XMarkIcon
                className=" w-10 cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className=" flex flex-col items-center justify-center space-y-4 h-full">
              <Link
                onClick={() => setOpenModal(!openModal)}
                href="/"
                className=" hover:text-orange"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpenModal(!openModal)}
                href="/visas"
                className=" hover:text-orange"
              >
                Visas
              </Link>
              <Link
                onClick={() => setOpenModal(!openModal)}
                href="/services"
                className=" hover:text-orange"
              >
                Services
              </Link>
              <Link
                onClick={() => setOpenModal(!openModal)}
                href="/contact"
                className=" hover:text-orange"
              >
                Contact
              </Link>
              <Link
                onClick={() => setOpenModal(!openModal)}
                href="/blog"
                className=" hover:text-orange"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Nav;
