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

  useEffect(() => {
    async function getArticles() {
      const { data: Blogs, error } = await supabase.from("Blogs").select("*");
      if (Blogs) {
         const sortedArticles = Blogs.sort(
        (a, b) =>
          new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime()
      );
      console.log(sortedArticles)
        setArticles(Blogs);
      }
      if (error) {
        console.log(error);
      }
    }

    getArticles();

  }, []);
  return (
    <div>
      <div className=" overflow-auto    w-full flex  m-auto p-4 flex-wrap ">
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
    </div>
  );
}
export default Blog;
