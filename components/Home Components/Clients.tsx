import Image from "next/image";
import clients from "../../assests/Clients.jpg";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

type Props = {};
function Clients({}: Props) {
  return (
    <div className=" bg-[#1b182f] p-4 py-20   space-y-10 lg:space-y-0 lg:space-x-10 lg:flex lg:justify-center lg:items-center ">
      <div className=" space-y-4 lg:w-1/3" >
        <h2 className=" text-white font-bold text-center lg:text-start text-3xl md:text-4xl lg:text-5xl  ">
          Connecting with <span className=" text-orange"> Clients</span> &{" "}
          <span className=" text-orange">Students</span>
        </h2>

        <p className=" lg:text-lg text-white lg:text-start text-center">
          {" "}
          I specialize in connecting with clients and students worldwide,
          solving their visa, course, career, and immigration concerns. No
          matter where you are, I offer tailored solutions and guidance,
          leveraging my expertise in international migration laws.Your success
          is of utmost importance. Let&apos;s embark on a smooth journey towards your
          desired future together.
        </p>
      </div>
      <div className=" m-4">
        <Image
          src={clients}
          alt="Connecting with Clients and Students"
          width={1443}
          height={835}
          className=" rounded-lg  lg:w-[600px]" />
        
      </div>
    </div>
  );
}
export default Clients;
