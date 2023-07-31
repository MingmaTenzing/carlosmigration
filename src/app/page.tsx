import Hero from "../../components/Home Components/Hero";
import AboutUs from "../../components/Home Components/AboutUs";
import Offering from "../../components/Home Components/Offering";
import Clients from "../../components/Home Components/Clients";
import Reviews from "../../components/Home Components/Reviews";
import RecentBlogs from "../../components/Home Components/RecentBlogs";
import HeroServices from "../../components/Home Components/HeroServices";
import { Metadata } from "next";
import Webinars from "../../components/Home Components/Webinars";
import { supabase } from "../../components/supabase/supabaseclient";

export const metadata: Metadata = {
  title: "Carlos Castro Migration",
  description: " Carlos Castro Migration and Education Services",
};

async function getArticles() {
  const { data: Blogs, error } = await supabase.from("Blogs").select("*");
  if (Blogs) {
    return Blogs?.sort(
      (a, b) =>
        new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime()
    );
  }

  if (error) {
    console.log(error);
  }
}

getArticles();
export default function Home() {
  return (
    <div>
      <Hero />
      <HeroServices />
      <AboutUs />
      <Offering />
      <Clients />
      <Webinars />
      <Reviews />
      <RecentBlogs />
    </div>
  );
}
