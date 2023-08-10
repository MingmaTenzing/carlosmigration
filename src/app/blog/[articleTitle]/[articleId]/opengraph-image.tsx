import { ImageResponse } from "next/server";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import australia from "../../../../../assests/Australia.jpg";
import { unescape } from "querystring";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Australian Immigration News and Information"
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
type Props = {
  params: { articleTitle: string; articleID: string };
};

// Image generation
export default async function Image({ params }: Props) {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections

      <div tw="   relative z-100 flex w-full h-full justify-between items-center bg-[#fefefe] ">
        <img tw=""
          src={`https://byeilculfqugwxetgrkj.supabase.co/storage/v1/object/public/article%20images/public/${params.articleTitle}`}
        />
        <img  tw='absolute  bottom-0 right-10  w-[300px] object-cover' src= "https://byeilculfqugwxetgrkj.supabase.co/storage/v1/object/public/article%20images/authors/og" />
      </div>
    )
  );
  // ImageResponse JSX element
}
