"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import { TikTokEmbed } from "react-social-media-embed";

import VisaNavigation from "../../../../../utilities/VisaNavigation";
import RecentBlogs from "../../../../../utilities/RecentBlogs";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

interface article {
  article_img: string | null;
  author: string | null;
  author_img: string | null;
  created_at: string | null;
  id: string;
  para: string[] | null;
  subtitle: string | null;
  title: string | null;
  youtube_url: string | null;
}

async function getArticle(route: string) {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", route);
  return data;
}

function BlogPost() {
  const route: string = useParams().articleId;

  const [post, setPost] = useState<article>();
  const [loading, setLoading] = useState<boolean>(false)
  const date = new Date(post?.created_at!);
  const fromattedDAted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  useEffect(() => {
    setLoading(true);
    async function fetchArticle() {
      const article = await getArticle(route);
      if (article) {
        setPost(article[0]);
        setLoading(false);
      }
    }
    fetchArticle();
  }, []);

  return (
    <div className=" lg:flex lg:w-[1200px] m-auto lg:space-x-10  p-4">

      {
        loading? (      <div className=" animate-pulse md:w-[80%] m-auto  ">
        <div className="w-full md:w-[full] m-auto h-[300px] lg:h-[400px] bg-gray-500 rounded-lg"></div>
       <div className=" space-y-4 mt-4">
        <div className=" w-full h-4 bg-gray-400"></div>
        <div className=" w-[90%] h-3 bg-gray-400"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        <div className=" w-[80%%] h-2 bg-gray-300"></div>
        </div>
      </div>
) : (  
<div className=" space-y-6 md:w-[80%] m-auto lg:w-[750px]   ">
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
  <div className=" flex  items-center  justify-between  ">
    <div className=" flex  space-x-2 items-center">
      <Image
        src={post?.author_img!}
        alt={post?.author!}
        width={200}
        height={200}
        className="  w-[50px] h-[50px] rounded-full object-center object-cover"
      />

      <p> {post?.author}</p>
    </div>
    <p className=" text-sm  text-gray-400 italic">{fromattedDAted}</p>
  </div>

  <div className=" space-y-5">
    {post?.para?.map((content, index) => (
      <p key={index}>{content} </p>
    ))}
  </div>
  {post?.youtube_url && (
    <div>
      <div className=" md:hidden">
        <YouTubeEmbed height={300} url={post.youtube_url} width={320} />
      </div>
      <div className=" hidden md:flex">
        <YouTubeEmbed height={450} url={post.youtube_url} width={650} />
      </div>
    </div>
  )}
</div>)
      }








    

      {/*** SIDE BAR OPTIONS */}
      <div className=" mt-10 lg:mt-0 w-full lg:w-[300px] space-y-6">
        <RecentBlogs articleToNotInclude={post?.id!} />
        <VisaNavigation />
        <div className=" ">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="CHARLIESHUN"
            options={{ height: 600 }}
          />
        </div>
      </div>
    </div>
  );
}
export default BlogPost;
