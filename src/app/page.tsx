import Hero from "../../components/Home Components/Hero";
import AboutUs from "../../components/Home Components/AboutUs";
import Offering from "../../components/Home Components/Offering";
import Clients from "../../components/Home Components/Clients";
import Reviews from "../../components/Home Components/Reviews";
import RecentBlogs from "../../components/Home Components/RecentBlogs";
import HeroServices from "../../components/Home Components/HeroServices";
import { Metadata } from "next";
import Webinars from "../../components/Home Components/Webinars";


export const metadata: Metadata = {
  title: "Carlos Castro Migration",
  description: " Carlos Castro Migration and Education Services",
  

}

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
