import { Metadata } from "next";
import { supabase } from "../../../../../components/supabase/supabaseclient";
import { title } from "process";
import { Blog } from "../../page";
import { unescape } from "querystring";

type Props = {
  params: { articleTitle: string; articleID: string };
};

async function getArticle({ params }: Props) {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", params.articleID);
  return data;
}

export async function generateMetadata({params}: Props) {

    const removeSpaces = unescape(params.articleTitle)

    
  return {
    title: removeSpaces,
    description: 'Carlos Castro Migration Blog Article'
   
  };
}

export default function ContactLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </section>
  );
}
