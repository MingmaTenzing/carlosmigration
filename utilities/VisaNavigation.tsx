import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};
function VisaNavigation({}: Props) {
    const path = usePathname();
  return (
    <div className="  lg:w-[320px] ">
      <Link
        href="/"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/studentvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Student Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/studentvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/skilledvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Skilled Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/skilledvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/familyvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Family Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/familyvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/employersponsoredvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Employer Sponsored Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/employersponsoredvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${
            path == "/visas/businessvisa" ? "text-white" : " "
          }`}
        >
          {" "}
          Business Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/businessvisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
      <Link
        href="/"
        className=" h-[60px] group  justify-between relative hover:text-white  bg-gray-100 p-2 flex items-center "
      >
        <h2
          className={` z-10 ${path == "/visas/othervisa" ? "text-white" : " "}`}
        >
          {" "}
          Other Visa{" "}
        </h2>
        <ChevronRightIcon className=" w-5 z-10" />

        <span
          className={`left-0  group-hover:right-0 w-0 h-full group-hover:w-full transition-all ease-linear duration-300  absolute   bg-orange ${
            path == "/visas/othervisa" ? "bg-orange   w-full" : " "
          }`}
        ></span>
      </Link>
    </div>
  );
}
export default VisaNavigation;
