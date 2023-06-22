import Image from 'next/image'
import Nav from '../../components/Home Components/Nav'
import Hero from '../../components/Home Components/Hero'
import Services from '../../components/Home Components/Services'
import AboutUs from '../../components/Home Components/AboutUs'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services  />
      <AboutUs />
    </main>
  )
}
