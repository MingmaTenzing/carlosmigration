import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  return client.fetch(groq`*[_type =="post" && slug.current=="achieving-your-dreams-how-to-secure-sponsorship-in-australia"][0] {
        publishedAt,
        _id,
        title,
          "slug": slug.current,
          body,
          subtitle
    }`);
}
