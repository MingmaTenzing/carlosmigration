import Image from "next/image";
import bg from "../../../assests/Contact Background.jpg";

type Props = {};
function Contact({}: Props) {
  return (
    <div>
      <div className="  overflow-hidden w-full h-[280px]  border relative">
        <div className=" space-y-2 lg:space-y-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-center text-orange z-30">
            Contact
          </h1>
          <h2 className=" text-2xl text-white font-semibold md:text-xl ">
            It's your turn to change your{" "}
            <span className=" text-orange">future.</span>{" "}
          </h2>
        </div>

        <Image
          src={bg}
          alt="Contact Background Image"
          width={640}
          height={247}
          className="  w-full h-full object-cover"
        />
        <span className=" bg-[#201c2c] h-full w-full top-0  left-0 bg-opacity-90 absolute "></span>
      </div>

      {/** CONTACT FORM */}
      <div className=" p-4 mt-4">
        <div className=" space-y-3">
          <p className=" text-sm font-semi uppercase text-orange">
            How Can i help you
          </p>
          <h2 className=" font-bold text-3xl"> Write a Message</h2>
        </div>
      </div>
      <form className="  space-y-4  flex flex-col justify-center items-center ">
        <div className=" md:flex md:space-y-0 md:space-x-2 space-y-3">
          <div>
            <input
              className="  h-[60px]  p-2  min-w-[300px] outline-none bg-gray-100 rounded-lg "
              type="text"
              required
              placeholder="Your Name"
            ></input>
          </div>
          <div>
            <input
              className="  h-[60px] p-2   min-w-[300px] outline-none bg-gray-100 rounded-lg "
              type="email"
              required
              placeholder="Your Eamil Address"
            ></input>
          </div>
        </div>
        <div>
          <textarea placeholder=" Enter your Message" className=" p-2  md:w-[602px] bg-gray-100 outline-none   min-w-[300px] rounded-lg h-[300px]" />
        </div>
        <button className=" font-semibold bg-orange text-white p-4 rounded-lg px-6 hover:scale-105 transition-all ease-linear duration-150 hover:shadow-lg ">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
