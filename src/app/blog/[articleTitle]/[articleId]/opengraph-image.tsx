import { ImageResponse } from "next/server";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import { Blog } from "../../page";


export const runtime = "edge";
export const contentType = "image/png";

export const size = {
  width: 1200,
  height: 630,
};

type Props = {
  params: { articleTitle: string; articleID: string };
};
export default async function Image({ params }: Props) {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", params.articleID);

    
    if (data) {
        const article = data[0];
        return new ImageResponse(
            <img src={article.article_img!} alt={article.title!} />
        )
    }


  return new ImageResponse(
    (
      <div className=" flex justify-center bg-black">
        <div className=" text-white font-bold">TESTING IN THE WORLD OF DARK</div>
      </div>
    )
  );
}
