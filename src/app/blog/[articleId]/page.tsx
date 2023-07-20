"use client";
import { useParams } from "next/navigation";
import { supabase } from "../../../../components/supabase/supabaseclient";
import { useEffect, useState } from "react";
import { Database } from "../../../../supabase";
import Image from "next/image";

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
  const path = useParams();
  const route: string = path.articleId;
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
      <div>
        <Image
          src={post?.article_img!}
          alt={post?.title!}
          width={800}
          height={500}
        />
        <div>
          <div className=" flex space-x-2 items-center text-gray-500">
            <p>Author: {post?.author}</p>
            <p>{fromattedDAted}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogPost;
