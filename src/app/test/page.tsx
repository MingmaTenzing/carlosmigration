'use client'
import { useEffect, useState } from "react";
import { getPost } from "../../../sanity/sanity.query"
import { Post } from "../../../sanity/sanity.types"
import post from "../../../schemas/post";

type Props = {}
 function page({}: Props) {
    const [posts, setPosts] = useState<Post[]>();
    useEffect(() => {
        async function getData() {

            const posts: Post[] = await getPost();
      setPosts(posts)
        }
        getData();

    }, [])
    console.log(posts)
  
  return (
    <div>{
        posts?.map((post) => <div key={post._id}> {post.title} </div>)}</div>
  )
}
export default page