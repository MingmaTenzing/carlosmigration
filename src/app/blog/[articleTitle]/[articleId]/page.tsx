"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import { useIntersectionObserver } from "usehooks-ts";
import { useRef } from "react";

import VisaNavigation from "../../../../../utilities/VisaNavigation";
import RecentBlogs from "../../../../../utilities/RecentBlogs";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import fallbackImg from "../../../../../assests/blogfallbackImg.png";
import { YouTubeEmbed } from "react-social-media-embed";
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
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const [showYoutubeURL, setshowYoutubeURL] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const isVisible = !!entry?.isIntersecting;

  const date = new Date(post?.created_at!);
  const fromattedDAted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  useEffect(() => {
    if (isVisible === true) {
      setshowYoutubeURL(true);
    }
  }, [isVisible]);

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
      {/** ARTICLE section */}
      <article className=" space-y-6 md:w-[80%] m-auto lg:w-[750px] d  ">
        <Image
          src={post?.article_img || fallbackImg}
          alt={post?.title!}
          width={800}
          height={500}
          className=" max-h-[500px] w-full  object-cover object-center rounded-lg"
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
        {/** CHECKS IF THE USER IS VIEWING THE END OF ARTICLE
         * SO WE CAN LAZY LOAD THE YOUTUBE VIDEO
         */}
        <span ref={ref}></span>
        {/*** */}

        {showYoutubeURL === true && post?.youtube_url !== undefined && (
          <div>
            <div className=" md:hidden">
              <YouTubeEmbed height={300} url={post?.youtube_url!} width={320} />
            </div>
            <div className=" hidden md:flex">
              <YouTubeEmbed height={450} url={post?.youtube_url!} width={650} />
            </div>
          </div>
        )}
      </article>

      {/*** SIDE BAR OPTIONS */}
      <div className=" mt-10 lg:mt-0 w-full lg:w-[300px] space-y-6">
        <RecentBlogs articleToNotInclude={post?.id!} />
        <VisaNavigation />
        {showYoutubeURL && (
          <div className=" ">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CHARLIESHUN"
              options={{ height: 600 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default BlogPost;
