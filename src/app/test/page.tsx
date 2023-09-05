"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../../../sanity/sanity.query";
import { Post } from "../../../sanity/sanity.types";
import post from "../../../schemas/post";
import { PortableText } from "@portabletext/react";
import client from "../../../sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { Image, PortableTextBlock, Reference } from "sanity";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

type Props = {};
function page({}: Props) {
  const [posts, setPosts] = useState<Post>();
  useEffect(() => {
    async function getData() {
      const posts: Post = await getPosts();
      setPosts(posts);
    }
    getData();
  }, []);
  console.log(posts?.body);
  function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }

  const ptComponents = {
    types: {
      image: ({ value }:SanityAsset) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img className=""
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)
              
             
              .url()}
          />
        );
      },
    },
  };

  return (
    <div>
      {posts && <PortableText value={posts.body} components={ptComponents} />}
    </div>
  );
}
export default page;
