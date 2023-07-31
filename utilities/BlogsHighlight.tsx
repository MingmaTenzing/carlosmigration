"use client";
import Image from "next/image";
import fallbackImg from "../assests/blogfallbackImg.png";
import { useRouter } from "next/navigation";

type Props = {
  image: string | null;
  author: string | null;
  date: string | null;
  title: string | null;
  id: string;
};
function BlogsHighlight({ image, title, author, date, id }: Props) {
  const router = useRouter();
  const time = new Date(date!);
  const fromattedDAted = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const trimmedTitle = title?.substring(0, 50);
  return (
    <div onClick={() => router.push(`/blog/${title}/${id}`)}>
      <div className="   bg-white hover:shadow-lg cursor-pointer lg-hover:scale-110 transition-all ease-linear duration-200 cu m-4 relative group overflow-hidden w-[340px] h-[400px] border rounded-lg">
        <div className=" relative w-full overflow-hidden h-[45%]">
          <Image
            src={image || fallbackImg}
            width={340}
            height={250}
            alt="Services Image"
            className=" h-full w-full group-hover:scale-110  transition-all ease-linear duration-150  object-cover"
          />
          <span className=" bg-[#201c2c] h-full w-full absolute  top-0 left-0 opacity-0 group-hover:opacity-60 transition-all ease-linear duration-300 "></span>
        </div>
        <div className=" space-y-4 p-4">
          <h2 className=" font-bold text-2xl ">{trimmedTitle}... </h2>
          <div className=" flex justify-between">
            <div className=" w-1/2 text-sm flex flex-col space-y-2">
              <p>{author}</p>
              <p>Read More</p>
            </div>
            <p className=" text-sm">{fromattedDAted}</p>
          </div>
        </div>

        <span className="  -bottom-10 -right-10 absolute group-hover:w-[100px] group-hover:h-[100px] w-0 h-0 transition-all ease-linear  duration-300 rounded-full bg-orange z-10"></span>
        <span className="  -bottom-10 -right-10 absolute w-[100px] h-[100px] rounded-full bg-gray-400"></span>
      </div>
    </div>
  );
}
export default BlogsHighlight;
