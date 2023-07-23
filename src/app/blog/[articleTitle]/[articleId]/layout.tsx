import { Metadata } from "next";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import { title } from "process";
import { Blog } from "../../page";
import { unescape } from "querystring";
import RecentBlogs from "../../../../../utilities/RecentBlogs";
import VisaNavigation from "../../../../../utilities/VisaNavigation";

type Props = {
  params: { articleTitle: string; articleID: string };
};

export async function generateMetadata({ params }: Props) {
  const removeSpaces = unescape(params.articleTitle);

  return {
    title: removeSpaces,
    description: "Carlos Castro Migration Blog Article",
  };
}

export default function ContactLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { articleId: string };
}) {
  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className=" ">{children}</div>
    </section>
  );
}
