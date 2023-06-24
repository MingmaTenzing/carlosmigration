import Image from 'next/image'
import Nav from '../../components/Home Components/Nav'
import Hero from '../../components/Home Components/Hero'
import Services from '../../components/Home Components/Services'
import AboutUs from '../../components/Home Components/AboutUs'
import Offering from '../../components/Home Components/Offering'
import Clients from '../../components/Home Components/Clients'
import Reviews from '../../components/Home Components/Reviews'
import BookAppointment from '../../components/Home Components/BookAppointment'
import RecentBlogs from '../../components/Home Components/RecentBlogs'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services  />
      <AboutUs />
      <Offering />
      <Clients />
      <Reviews />
      <RecentBlogs />
      
     
    </main>
  )
}
