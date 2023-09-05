"use client";
import { ReactNode, useEffect, useState } from "react";
import { getPosts } from "../../../sanity/sanity.query";
import { Post } from "../../../sanity/sanity.types";
import client from "../../../sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../../sanity/urlbuilder";

type Props = {};

function Test({}: Props) {
  const [posts, setPosts] = useState<Post>();
  useEffect(() => {
    async function getData() {
      const posts: Post = await getPosts();
      setPosts(posts);
    }
    getData();
  }, []);

  const components: PortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <Image
            src={urlFor(value).url()}
            alt="image"
            width={400}
            height={300}
          />
        );
      },
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a className=" underline" href={value?.href} target={target}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div>
      {posts && <PortableText value={posts.body} components={components} />}
    </div>
  );
}
export default Test;
