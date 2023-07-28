import { supabase } from "../../../../../components/supabase/supabaseclient";
import { unescape } from "querystring";
import replacementImg from "../../../../../assests/Replace Image.jpg";
type Props = {
  params: { articleTitle: string; articleID: string };
};

export async function generateMetadata({ params }: Props) {
  const removeSpaces = unescape(params.articleTitle);
  return {
    title: removeSpaces,
    description: "Carlos Castro Migration Immigration News and Information",
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
