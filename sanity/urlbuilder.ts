import imageUrlBuilder from '@sanity/image-url'
import client from "./sanity.client";

export function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }
