import { ImageResponse } from "next/server";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import australia from "../../../../../assests/Australia.jpg";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
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
        <div tw="flex w-1/2 h-full items-center pl-10">
          <img
            tw="  w-[500px] absolute  left-0  z-10 "
            src="https://byeilculfqugwxetgrkj.supabase.co/storage/v1/object/public/article%20images/public/map.png"
          />
          <h1 tw="text-[40px] font-bold  z-20">
          {params.articleTitle}
          </h1>
        </div>

        <img
          tw=" h-[400px] absolute  right-10 p-4 rounded-full"
          src="https://byeilculfqugwxetgrkj.supabase.co/storage/v1/object/public/article%20images/authors/Carlos%20Castro%20Profile.jpg"
        />
      </div>
    )
  );
  // ImageResponse JSX element
}
