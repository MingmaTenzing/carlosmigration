'use client'
import Image from "next/image"
import bg from "../../../assests/Visa Background.jpg"
import familyvisa from "../../../assests/family visa.jpg"
import {  useRouter } from "next/navigation"
import studentVisa from '../../../assests/student visa.jpg'
import nurse from "../../../assests/Nurse.jpg"
import employer from "../../../assests/Employer.jpg"
import business from "../../../assests/Business.jpg"
import tourist from "../../../assests/tourist.jpg"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import HeroBackground from "../../../utilities/HeroBackground"


type Props = {}
function Visas({}: Props) {
    const router = useRouter();
  return (
    <div>
        <HeroBackground title="Visa Services" subTitle="Get the best services across all visa categories" bg={bg} />

      <div id="VISA SERVICES CONTAINER" className=" mt-10 flex md:justify-center md:flex-row md:flex-wrap flex-col items-center">
            {/** OFFERING  */}
            <div onClick={() => router.push("/visas/categories/studentvisa")} className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={studentVisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
              
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Student Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
           
           <div className=" flex space-x-1 items-center hover:text-orange">
            <ChevronRightIcon className="w-5 " />
            <p>Read More</p>
           </div>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
            {/** OFFERING  */}
            <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={nurse}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Skilled Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
           
           <div className=" flex space-x-1 items-center hover:text-orange">
            <ChevronRightIcon className="w-5 " />
            <p>Read More</p>
           </div>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
            {/** OFFERING  */}
            <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={familyvisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Family Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
           
           <div className=" flex space-x-1 items-center hover:text-orange">
            <ChevronRightIcon className="w-5 " />
            <p>Read More</p>
           </div>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
            {/** OFFERING  */}
            <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={employer}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Employer Sponsored Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
           
           <div className=" flex space-x-1 items-center hover:text-orange">
            <ChevronRightIcon className="w-5 " />
            <p>Read More</p>
           </div>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
            {/** OFFERING  */}
            <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={business}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Business Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
           
           <div className=" flex space-x-1 items-center hover:text-orange">
            <ChevronRightIcon className="w-5 " />
            <p>Read More</p>
           </div>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
            {/** OFFERING  */}
            <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={tourist}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Other Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
           
           <div className=" flex space-x-1 items-center hover:text-orange">
            <ChevronRightIcon className="w-5 " />
            <p>Read More</p>
           </div>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
      </div>
    </div>
  )
}
export default Visas