import { useState } from "react";
import { supabase } from "../components/supabase/supabaseclient";
import { Blog } from "@/app/blog/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  articleToNotInclude: string;
};

function RecentBlogs({ articleToNotInclude }: Props) {
  const [recentArticles, setRecentArticles] = useState<Blog[]>();
  const router = useRouter();
  async function getRecentArticles() {
    const { data: Blogs, error } = await supabase
      .from("Blogs")
      .select("*")
      .neq("id", articleToNotInclude)
      .range(0, 4);
    setRecentArticles(Blogs!);
  }

  getRecentArticles();

  return (
    <div className=" bg-[#f1f0f7] p-8 border rounded-lg space-y-6 lg:w-[300px]">
      <h2 className=" font-bold text-lg">Recent Blogs</h2>
      {recentArticles?.map((article) => (
        <div
          key={article.id}
          onClick={() => router.push(`/blog/${article.title}/${article.id}`)}
          className=" cursor-pointer overflow-hidden"
        >
          <div className=" flex items-center space-x-2">
            <Image
              src={article.article_img!}
              alt={article.title!}
              width={100}
              height={100}
              className=" rounded-lg w-24 h-20 object-cover"
            />
            <div className=" ">
              <p className=" text-[12px] text-[#73727c]">
                {" "}
                By: {article.author}
              </p>
              <h3 className="  hover:text-orange truncate font-semibold text-[#1b182f] text-sm">
                {article.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RecentBlogs;
