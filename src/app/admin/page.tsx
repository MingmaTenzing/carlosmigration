"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { supabase } from "../page";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";
import { Database } from "../../../supabase";
import { StaticImageData } from "next/image";

interface Blog {
  title: string | null;
  para: string[] | null;
  id: string | null;
  created_at: string | null;
  author: string | null;
  article_img: string | null;
}

type Props = {};
async function admin({}: Props) {
  const [Blogs, setBlogs] = useState<Blog[] | null>(null);
  const [authorName, setAuthorName] = useState<string>();
  const [article_title, setArticleTitle] = useState<string>();
  const [para, setPara] = useState<string[]>(["peace", "lover"]);
  const [articleImg, setArticleImg] = useState<FileList | null>(null);
  console.log(articleImg);
  const router = useRouter();
  console.log(Blogs);

  useEffect(() => {
    {
      /*** CHECKS USER IF IT'S LOGGED IN OR NOT, IF NOT LOGGED IN PUSHES TO LOGIN PAGE */
    }
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        console.log(user);
      } else {
        router.push("/admin/login");
      }
    }
    checkUser();

    {
      /** FETCHES ARTICLE ON EACH PAGE RENDER */
    }
    async function getArticles() {
      const { data, error } = await supabase.from("Blogs").select("*");
      if (data) {
        setBlogs(data);
      }
    }
    getArticles();
  }, []);
  {
    /******* */
  }

  {
    /** ARTICLE ADDING FUNCTION */
  }
  async function addArticle() {
    const { data, error } = await supabase
      .from("Blogs")
      .insert([
        {
          title: "Mingma Test ",
          author: "Mingma Tenzing Sherpa",
          created_at: new Date().toISOString(),
          para: ["this is ", "it keep grinding", "yess sirrrr"],
          article_img:
            "https://www.mingmatenzing.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.301ee3b4.jpg&w=3840&q=75"
        }
      ]).select();
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }
  {
    /** ****** */
  }

  return (
    <div className=" p-4 py-20">
      <div className=" font-bold  text-2xl  uppercase ">
        It's time to add articles
      </div>

      <form className=" my-6" onSubmit={() => uploadImage}>
        <div className=" mt-10 space-y-2">
          <p className=" text-lg font-semibold">Article Image</p>
          <input
            type="file"
            onChange={(e) => setArticleImg(e.target.files[0])}
            className=" border outline-none p-4 w-full"
          />
          <button className=" bg-orange text-white p-4" type="submit">
            {" "}
            Upload Image{" "}
          </button>
        </div>
      </form>
      <form className="  space-y-4">
        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Title of Article</p>
          <input
            type="text"
            placeholder="e.g: BEST COURSES FOR INTERNATIONAL STUDENTS"
            className=" border outline-none p-4 w-full"
          />
        </div>

        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Author</p>
          <input
            type="text"
            placeholder="e.g: BEST COURSES FOR INTERNATIONAL STUDENTS"
            className=" border outline-none p-4 w-full"
          />
        </div>
      </form>
    </div>
  );
}
export default admin;
