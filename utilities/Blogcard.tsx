import { Blog } from "@/app/blog/page";
import { create } from "domain";
import Image from "next/image";

type Props = {};
function Blogcard({ title, article_img, created_at, author }: Blog) {
  const date = new Date(created_at!)
 const fromattedDAted = date.toLocaleDateString('en-US', { year:'numeric', month:"long",day:'2-digit'})
  
  return (
    <div>
      <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200  m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
        <div className=" relative w-full overflow-hidden h-[45%]">
          <Image
            src={article_img!}
            width={340}
            height={250}
            alt="Services Image"
            className=" h-full w-full group-hover:scale-110  transition-all ease-linear duration-200  object-cover"
          />
          <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
        <div   className="  absolute right-4 -bottom-2 w-[120px]  text-center    h-[40px] p-1 text-sm rounded-md  bg-orange text-white"> {fromattedDAted} </div>
        </div>
        <div className=" space-y-4 p-4">
          <h3 className=" font-semibold text-lg ">{title} </h3>
          <div className=" text-sm flex space-x-2">
            <p>{author} </p>
          </div>
          <div className="  hover:text-orange">Read More</div>
        </div>

        <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear   duration-200 rounded-full bg-orange z-10"></span>
        <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
      </div>
    </div>
  );
}
export default Blogcard;
