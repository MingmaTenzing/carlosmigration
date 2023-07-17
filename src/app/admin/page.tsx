"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { SyncLoader } from "react-spinners";
import { CheckIcon } from "@heroicons/react/24/outline";
import { supabase } from "../../../components/supabase/supabaseclient";

type Props = {};
function Admin({}: Props) {
  const [authorName, setAuthorName] = useState<string>("");

  const [articleSubtitle, setArticleSubtitle] = useState<string>();
  const [isArticlePublishing, setIsArticlePublishing] =
    useState<boolean>(false);
  const [authorProfileImg, setauthorProfileImg] = useState<string>(
    "https://byeilculfqugwxetgrkj.supabase.co/storage/v1/object/public/article%20images/authors/Carlos%20Castro%20Profile.jpg?t=2023-07-17T01%3A58%3A45.536Z"
  );
  const [articlePublished, setArticlePublished] = useState<boolean>(false);
  const [article_title, setArticleTitle] = useState<string>("");
  const [articleParas, setArticleParas] = useState<string[]>([]);
  const [articleImg, setArticleImg] = useState<File>();
  const [imgTitle, setImgTitle] = useState<string>("");
  const [ImageUploading, setImageUploading] = useState<boolean>(false);
  const [isUploadingComplete, setIsUploadingComplete] =
    useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  console.log(imgTitle, article_title, authorName, articleImg);
  console.log(articleParas);

  {
    /** ARTICLE ADDING FUNCTION */
  }
  async function addArticle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsArticlePublishing(true);
    const { data, error } = await supabase
      .from("Blogs")
      .insert([
        {
          title: article_title,
          subtitle: articleSubtitle,
          author: authorName,
          created_at: new Date().toISOString(),
          para: articleParas,
          article_img: imageURL,
          author_img: authorProfileImg,
        },
      ])
      .select();
    if (data) {
      setIsArticlePublishing(false);
      setArticlePublished(true);
    }
    if (error) {
      console.log(error);
    }
  }
  {
    /** ****** */
  }

  async function uploadImg(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setImageUploading(true);
    const { data, error } = await supabase.storage
      .from("article images")
      .upload(`public/${imgTitle}`, articleImg!, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data?.path) {
      console.log(data.path);
      setImageUploading(false);
      setIsUploadingComplete(true);
      setImageURL(
        `https://byeilculfqugwxetgrkj.supabase.co/storage/v1/object/public/article%20images/${data.path}`
      );
    }
    if (error?.message === "The resource already exists") {
      window.alert(
        "The image with the similar name already exists please rename the image and try again"
      );
      setImageUploading(false);
    }
  }

  function handleImg(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null) {
      setArticleImg(e.target.files[0]);
    }
  }

  function addParagraph() {
    if (paragraph === "") {
      return window.alert("Please add a paragraph first!.");
    }
    articleParas.push(paragraph);
    setParagraph("");
  }

  return (
    <div className=" lg:w-[1200px] m-auto p-4 py-20">
      <div className=" font-bold  text-2xl  uppercase ">
        It&apos;s time to add articles
      </div>

      <form className=" my-6" onSubmit={uploadImg}>
        <div className=" mt-10 space-y-2">
          <div>
            <p className=" text-lg font-semibold">Article Image Title</p>

            <input
              required
              type="text "
              onChange={(e) => setImgTitle(e.target.value)}
              className="border outline-none p-4 w-full"
            ></input>
          </div>
          <div>
            <p className=" text-lg font-semibold">Article Image</p>
            <input
              required
              type="file"
              onChange={handleImg}
              className=" border outline-none p-4 w-full"
            />
          </div>
          <div className=" flex items-center space-x-2">
            <button className=" bg-orange text-white p-4" type="submit">
              {" "}
              Upload Image{" "}
            </button>
            {ImageUploading && <SyncLoader color="#36d7b7" />}
            {isUploadingComplete && (
              <CheckIcon className=" text-green-500 w-10" />
            )}
          </div>
        </div>
      </form>
      <form onSubmit={addArticle} className="  space-y-10">
        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Title of Article</p>
          <input
            required
            type="text"
            onChange={(event) => setArticleTitle(event.target.value)}
            placeholder="e.g: BEST COURSES FOR INTERNATIONAL STUDENTS"
            className=" border outline-none p-4 w-full"
          />
        </div>
        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Subtitle of Article</p>
          <input
            required
            type="text"
            onChange={(event) => setArticleSubtitle(event.target.value)}
            placeholder="e.g: The right course can lead to a brighter future"
            className=" border outline-none p-4 w-full"
          />
        </div>
        {/** PARAGRAPHS OF ARTICLE */}
        <div>
          <p className=" text-lg font-semibold">Paragraphs</p>

          <textarea
            value={paragraph}
            className=" border outline-none w-full h-[200px]"
            onChange={(e) => setParagraph(e.target.value)}
          />
          <div
            onClick={addParagraph}
            className=" cursor-pointer hover:bg-black  transition-all  ease-linear duration-100 font-semibold w-[200px] text-white bg-orange p-4"
          >
            Add Paragraph
          </div>
        </div>

        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Author</p>
          <input
            type="text"
            required
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="e.g: BEST COURSES FOR INTERNATIONAL STUDENTS"
            className=" border outline-none p-4 w-full"
          />
        </div>
        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Author Profile Image URL </p>
          <p className=" text-sm text-red-500">
            This link is a default author profile image. Only change the link if
            the author is different or you want to change the picture.{" "}
          </p>
          <input
            type="text"
            required
            defaultValue={authorProfileImg}
            onChange={(e) => setauthorProfileImg(e.target.value)}
            placeholder="e.g: BEST COURSES FOR INTERNATIONAL STUDENTS"
            className=" border outline-none p-4 w-full"
          />
        </div>

        <div className=" space-y-2">
          <p className=" text-lg font-semibold">Article Image URL</p>
          <input
            type="text"
            required
            value={imageURL}
            placeholder="Upload the image and it will fill up automatically"
            className=" border outline-none p-4 w-full"
          />
        </div>
        <div className=" flex space-x-2 items-center">
          <button
            type="submit"
            className=" hover:bg-black transition-all ease-linear duration-100 p-4 bg-orange text-white font-semibold"
          >
            PUBLISH ARTICLE !!
          </button>
          {isArticlePublishing && <SyncLoader color="#36d7b7" />}
          {articlePublished && <CheckIcon className=" text-green-500 w-10" />}
        </div>
      </form>

      <h2 className=" my-10 text-2xl md:text-3xl lg:text-4xl font-bold">
        PARAGRAPH PREVIEW
      </h2>
      <div className=" space-y-4">
        {articleParas.map((article, index) => (
          <div key={index}>{article}</div>
        ))}
      </div>
    </div>
  );
}
export default Admin;
