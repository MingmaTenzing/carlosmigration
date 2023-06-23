import Image from "next/image";
import familyvisa from "../../assests/family visa.jpg";
import workVisa from "../../assests/work visa.jpg"
import studentVisa from "../../assests/student visa.jpg"
import touristVisa from "../../assests/tourist.jpg"
type Props = {};
function Offering({}: Props) {
  return (
    <div className=" lg:pt-40   py-20 bg-gray-100  p-4 lg:mt-32 mt-20">
      <div className=" flex flex-col  items-center text-center">
        <h3 className=" text-orange uppercase font-semibold text-sm">
          {" "}
          what i offer
        </h3>
        <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl">
          Providing Value for Visa Categories
        </h2>
      </div>

      <div className=" mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center items-center">

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
            <button className="  p-3 bg-orange text-sm rounded-lg text-white hover:bg-[#444] transition-all ease-linear dura">Contact Now</button>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}

        {/** OFFERING  */}
        <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={workVisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Work Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
            <button className="  p-3 bg-orange text-sm rounded-lg text-white hover:bg-[#444] transition-all ease-linear dura">Contact Now</button>

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
            <h3 className=" font-bold text-2xl ">Student Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
            <button className="  p-3 bg-orange text-sm rounded-lg text-white hover:bg-[#444] transition-all ease-linear dura">Contact Now</button>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}
        {/** OFFERING  */}
        <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
          <div className=" relative w-full h-[45%]">
            <Image
              src={touristVisa}
              width={340}
              height={250}
              alt="Services Image"
              className=" h-full w-full  object-cover"
            />
            <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
          </div>
          <div className=" space-y-4 p-4">
            <h3 className=" font-bold text-2xl ">Tourist Visa</h3>
            <p>
              Sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
              eque porro.
            </p>
            <button className="  p-3 bg-orange text-sm rounded-lg text-white hover:bg-[#444] transition-all ease-linear dura">Contact Now</button>

          </div>

          <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
          <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
       
        </div>
          {/** OFFERING  */}


        
      </div>
    </div>
  );
}
export default Offering;
