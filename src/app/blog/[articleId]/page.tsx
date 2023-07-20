"use client";
import { useParams } from "next/navigation";
import { supabase } from "../../../../components/supabase/supabaseclient";
import { useEffect, useState } from "react";
import { Database } from "../../../../supabase";


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
  const [post, setPost] = useState<article>();
  const path = useParams();
  const route: string = path.articleId;

  useEffect(() => {
    async function fetchArticle() {
      const article = await getArticle(route);
      if (article) {
        setPost(article[0]);
      }
    }

    fetchArticle();
  }, []);

  return <div>
    {
      post?.author
    }
  </div>;
}
export default BlogPost;
