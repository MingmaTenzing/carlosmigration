'use client'
import { useEffect, useState } from "react";
import { getPost } from "../../../sanity/sanity.query"
import { Post } from "../../../sanity/sanity.types"

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
    <div>page</div>
  )
}
export default page