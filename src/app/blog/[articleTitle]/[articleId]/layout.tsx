import { supabase } from "../../../../../components/supabase/supabaseclient";
import { unescape } from "querystring";
import replacementImg from "../../../../../assests/Replace Image.jpg";
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

export async function generateMetadata({ params }: Props) {
  const removeSpaces = unescape(params.articleTitle);
  const article = await getArticle({ params });

  if (!article || article.length === 0) {
    const opengraph = { images: replacementImg };
    return {
      title: removeSpaces,
      description: "Carlos Castro Migration Blog Article",
      opengraph: {
        ...opengraph,
        title: removeSpaces,
      },
    };
  }

  const openGraphImage = { images: [article[0].article_img] };

  return {
    title: removeSpaces,
    description: "Carlos Castro Migration Blog Article",
    opengraph: {
      ...openGraphImage,
      title: removeSpaces,
    },
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
