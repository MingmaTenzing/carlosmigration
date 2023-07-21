import { Blog } from "@/app/blog/page";
import { create } from "domain";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};
function Blogcard({ id,title, article_img, created_at, para, author }: Blog) {
  const date = new Date(created_at!)
 const fromattedDAted = date.toLocaleDateString('en-US', { year:'numeric', month:"long",day:'2-digit'})
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/blog/${id}`)}>
      <div className="    hover:border-[#282C35]  bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200  m-1 relative group overflow-hidden md:max-w-[240px]  lg:max-w-[270px] border ">
        <div className=" relative w-full overflow-hidden h-[45%]">
          <Image
            src={article_img!}
            width={340}
            height={250}
            alt="Services Image"
            className=" h-full w-full group-hover:scale-110  transition-all ease-linear duration-200  object-cover"
          />
          <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
        </div>
        <div className=" space-y-4 p-4">
          <h2 className=" font-semibold text-lg ">{title} </h2>
          <div className=" text-sm flex text-gray-400 space-x-2">
          <p className=" "> {para![1].substring(0,200)}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Blogcard;
