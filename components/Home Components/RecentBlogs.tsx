import Image from "next/image";
import BookAppointment from "./BookAppointment";
import studentVisa from "../../assests/student visa.jpg";

type Props = {};
function RecentBlogs({}: Props) {
  return (
    <div className=" py-40 relative">
      <div className=" space-y-4 flex flex-col  items-center">
        <span className=" text-orange">News & Updates</span>
        <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl">
          Recent Blogs Posts
        </h2>
      </div>
      <div className=" flex flex-col  items-center md:flex-row md:justify-center md:flex-wrap">
        {/** OFFERING  */}
        <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full overflow-hidden h-[45%]">
            <Image
              src={studentVisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full group-hover:scale-110  transition-all ease-linear duration-150  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">
              Top reasons for australian working visa rejection
            </h3>
            <div className=" text-sm flex space-x-2">
              <p>Carlos Castro </p>
              <p>2 comments</p>
            </div>
            <div>
                Read More
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
              src={studentVisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">
              Top reasons for australian working visa rejection
            </h3>
            <div className=" text-sm flex space-x-2">
              <p>Carlos Castro </p>
              <p>2 comments</p>
            </div>
            <div>
                Read More
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
              src={studentVisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">
              Top reasons for australian working visa rejection
            </h3>
            <div className=" text-sm flex space-x-2">
              <p>Carlos Castro </p>
              <p>2 comments</p>
            </div>
            <div>
                Read More
            </div>
          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
        </div>
        {/** OFFERING  */}
      </div>

      <div className=" absolute w-full -top-[140px] z-20 ">
        <BookAppointment />
      </div>
    </div>
  );
}
export default RecentBlogs;
