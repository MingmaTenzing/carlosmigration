"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../../../components/supabase/supabaseclient";

interface article {
  article_img: string | null;
  author: string | null;
  author_img: string | null;
  created_at: string | null;
  id: string;
  para: string[] | null;
  subtitle: string | null;
  title: string | null;
}

async function getArticle(route: string) {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", route);
  return data;
}

function BlogPost() {
  const route = useParams().articleId;

  const [post, setPost] = useState<article>();
  const date = new Date(post?.created_at!);
  const fromattedDAted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  console.log(post);

  useEffect(() => {
    async function fetchArticle() {
      const article = await getArticle(route);
      setPost(article![0]);
    }
    fetchArticle();
  }, []);

  return (
    <div className=" p-4">
      {/** ARTICLE section */}
      <div className=" space-y-6 md:w-[80%] lg:w-[800px] m-auto">
        <Image
          src={post?.article_img!}
          alt={post?.title!}
          width={800}
          height={500}
          className=" max-h-[500px] object-cover object-center rounded-lg"
        />

        
        <div className=" space-y-3">
          <h1 className="  font-bold text-2xl md:text-3xl lg:text-4xl">
            {post?.title}
          </h1>
         
          <h2 className="  italic font-light">{post?.subtitle}</h2>

        </div>
        <div className=" flex jus items-center  justify-between  ">
      <div className=" flex  space-x-2 items-center">

        <Image src={post?.author_img!} alt={post?.author!} width={200} height={200} className="  w-[50px] h-[50px] rounded-full object-center object-cover" />
         
          <p> {post?.author}</p>
      </div>
          <p className=" -sm">{fromattedDAted}</p>

        </div>

        <div className=" space-y-5">
          {post?.para?.map((content, index) => (
            <p key={index}>{content} </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BlogPost;
