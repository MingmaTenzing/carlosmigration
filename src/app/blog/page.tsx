"use client"
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
        setArticles(Blogs);
       
      }
      if (error) {
        console.log(error);
      }

    }
    
    getArticles();
  }, []);
  console.log(Articles)
  return (
    <div>
      <HeroBackground
        bg={img}
        title="Blog"
        subTitle="All the immigration news and information in one place"
      />

      <div className=" flex flex-wrap lg:w-[1200px]">
        {
          Articles?.map((article) => <Blogcard author={article.author} key={article.id} article_img={article.article_img} title={article.title} para={null} id={null} created_at={article.created_at} subtitle={null}   />)
        }
      </div>
    </div>
  );
}
export default Blog;
