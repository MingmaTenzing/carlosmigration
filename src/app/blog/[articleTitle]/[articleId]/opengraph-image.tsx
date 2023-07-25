import { ImageResponse } from "next/server";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import { Blog } from "../../page";

export const runtime = "edge";

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

  return new ImageResponse(
    (
      <div>
        <img src={data![0].article_img!} alt={data![0].title!} />
      </div>
    )
  );
}
