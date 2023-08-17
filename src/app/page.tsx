import AboutUs from "../../components/Home Components/AboutUs";
import Offering from "../../components/Home Components/Offering";
import Clients from "../../components/Home Components/Clients";
import Reviews from "../../components/Home Components/Reviews";
import RecentBlogs from "../../components/Home Components/RecentBlogs";
import HeroServices from "../../components/Home Components/HeroServices";
import { Metadata } from "next";
import Webinars from "../../components/Home Components/Webinars";
import { supabase } from "../../components/supabase/supabaseclient";
import Hero from "../../components/Home Components/Hero";

export const metadata: Metadata = {
  title: "HereIsCarlos - Expert Australian Migration Agent",
  description:
    "Navigate Australian Immigration with Expert Guidance | Welcome to HereIsCarlos.com - Your Trusted Australian Migration Agent. Streamline your visa application process with personalized advice and seamless support. Discover pathways to a new life in Australia. Get started now! ",
};

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
