"use client";
import Image from "next/image";
import BookAppointment from "./BookAppointment";
import BlogsHighlight from "../../utilities/BlogsHighlight";
import { supabase } from "../supabase/supabaseclient";
import { useEffect, useState } from "react";
import { getArticles } from "../../utilities/getArticles";
import { Blog } from "@/app/blog/page";
import Aos from "aos";
import 'aos/dist/aos.css';
type Props = {};

function RecentBlogs({}: Props) {
  const [sortedArticles, setSortedArticles] = useState<Blog[]>();
  useEffect(() => {
    Aos.init()
    
    async function getDAta() {
      const articles = await getArticles();
      setSortedArticles(
        articles?.sort(
          (a, b) =>
            new Date(b.created_at!).getTime() -
            new Date(a.created_at!).getTime()
        )
      );
    }
    getDAta();
  }, []);

  return (
    <div className=" py-40 relative">
      <div className=" space-y-4 flex flex-col  items-center">
        <span data-aos="fade-up"  data-aos-once="true" data-aos-duration="600"  className=" text-orange">News & Updates</span>
        <h2  data-aos="fade-up"  data-aos-once="true" data-aos-duration="700"  className=" font-bold text-2xl md:text-3xl lg:text-4xl">
          Recent Blogs Posts
        </h2>
      </div>
      <div data-aos="fade-up"  data-aos-once="true" data-aos-duration="1000"  className=" flex flex-col  items-center md:flex-row md:justify-center md:flex-wrap">
      {sortedArticles
        ?.map((article) => (
          <BlogsHighlight
            image={article.article_img}
            title={article.title}
            author={article.author}
            date={article.created_at}
            key={article.id}
            id = {article.id}
          />
        ))
        .slice(0, 4)}
        </div>
      <div className=" absolute w-full -top-[140px] z-20 ">
        <BookAppointment />
      </div>
    </div>
  );
}
export default RecentBlogs;
