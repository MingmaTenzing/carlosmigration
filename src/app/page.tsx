"use client";
import Hero from "../../components/Home Components/Hero";
import AboutUs from "../../components/Home Components/AboutUs";
import Offering from "../../components/Home Components/Offering";
import Clients from "../../components/Home Components/Clients";
import Reviews from "../../components/Home Components/Reviews";
import RecentBlogs from "../../components/Home Components/RecentBlogs";
import HeroServices from "../../components/Home Components/HeroServices";
import Nav from "../../components/Home Components/Nav";
import Head from "next/head";


export const metadata = {
  title: "Carlos Castro Migration",
  description: " Carlos Castro Migration and Education Services",
};

console.log(metadata.title)
export default function Home() {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
      </Head>
   
      <Hero />
      <HeroServices />
      <AboutUs />
      <Offering />
      <Clients />
      <Reviews />
      <RecentBlogs />
    </div>
  );
}
