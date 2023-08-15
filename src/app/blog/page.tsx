"use client";
import HeroBackground from "../../../utilities/HeroBackground";
import img from "../../../assests/blogbg.jpg";
import { useEffect, useState } from "react";
import { supabase } from "../../../components/supabase/supabaseclient";
import { Database } from "../../../supabase";
import Blogcard from "../../../utilities/Blogcard";
type Props = {};

export interface Blog {
  title: string | null;
  para: string[] | null;
  id: string | null;
  created_at: string | null;
  author: string | null;
  article_img: string | null;
  subtitle: string | null;
}

function Blog({}: Props) {
  const [Articles, setArticles] = useState<Blog[]>();
  const [sortedArticles, setSortedArticles] = useState<Blog[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const loadingArray: number[] = new Array(20).fill(0);

  useEffect(() => {
    setLoading(true);
    async function getArticles() {
      const { data: Blogs, error } = await supabase.from("Blogs").select("*");
      if (Blogs) {
        setArticles(
          Blogs?.sort(
            (a, b) =>
              new Date(b.created_at!).getTime() -
              new Date(a.created_at!).getTime()
          )
        );

        setLoading(false);
      }

      
    }

    getArticles();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="  w-[100%] justify-center p-4 lg:p-6 flex  m-auto   flex-wrap ">
          {loadingArray.map((_, index) => (
            <div
              key={index}
              className=" w-[300px] lg:w-[270px] h-[300px] m-1 border"
            >
              <div className=" h-1/2 bg-gray-400 animate-pulse"></div>
              <div className=" animate-pulse">
                <div className=" h-4 bg-gray-500 w-[90%]  mt-4" />
                <div className=" h-3 bg-gray-500 w-[80%]  mt-4" />
                <div className=" h-2 bg-gray-500 w-[70%]  mt-4" />
                <div className=" h-2 bg-gray-500 w-[70%]  mt-4" />
                <div className=" h-2 bg-gray-500 w-[70%]  mt-4" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="     w-[100%] justify-center p-4 lg:p-6 flex  m-auto   flex-wrap ">
          {Articles?.map((article) => (
            <Blogcard
              author={article.author}
              key={article.id}
              id={article.id}
              article_img={article.article_img}
              title={article.title}
              para={article.para}
              created_at={article.created_at}
              subtitle={null}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Blog;
