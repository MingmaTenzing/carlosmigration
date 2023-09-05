import { Image, PortableTextBlock, Reference, Slug } from "sanity";

export type Post = {
    title: string;
    slug: string;
    publishedAt: Date; 
    _id:string;
    body: PortableTextBlock[];


}