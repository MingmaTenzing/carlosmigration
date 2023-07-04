'use client'
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};
function VisaNavigation({}: Props) {
    const path = usePathname();
  return (
    <div className="  lg:w-[320px] ">
      <Link
        href="/visas/categories/studentvisa"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/categories/studentvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Student Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/categories/studentvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/visas/categories/skilledvisa"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/categories/skilledvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Skilled Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/categories/skilledvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/visas/categories/familyvisa"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/categories/familyvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Family Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/categories/familyvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/visas/categories/employersponsoredvisa"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/categories/employersponsoredvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Employer Sponsored Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/categories/employersponsoredvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/visas/categories/businessvisa"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/categories/businessvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Business Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/categories/businessvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/visas/categories/othervisa"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${path == "/visas/categories/othervisa" ? "text-white" : " "}`}
        >
          {" "}
          Other Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/categories/othervisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
    </div>
  );
}
export default VisaNavigation;
