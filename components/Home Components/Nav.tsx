import Image from "next/image"
import logo from "../../assests/Carlos Logo.png"
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from "next/link"


type Props = {}
function Nav({}: Props) {
  return (
    <main className="  ">
    <div className=" m-auto  lg:w-[1200px] lg:p-10 md:p-8  p-4 flex items-center justify-between">
        <div className=" flex ">

        <Image src={logo} alt="Carlos Castro Logo" width={200} height={200} className="  w-[120px] lg:w-[200px] lg:mr-20" />
        
        </div>
        <div className=" flex ">
            <Bars3Icon className=" lg:hidden w-6" />
            <div className=" hidden lg:flex space-x-10">

        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        </div>

        </div>
    </div>
    </main>
  )
}
export default Nav