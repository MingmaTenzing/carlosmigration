import { BeakerIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import passport from "../../assests/passport.png"
import paper from "../../assests/paper.png"
import ticket from "../../assests/ticket-flight.png"

type Props = {}
function Services({}: Props) {
  return (
    <div className=' p-4 md:justify-center md:flex-row md:flex-wrap flex flex-col items-center'>
        <div className='group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] h-[200px] border  flex space-x-8'>
            <div>

            <Image src={passport} alt='Services Image' width={200} height={200} className='  z-20 grayscale-0 invert  w-20' />
            </div>
            <div className=' z-30 flex flex-col   justify-center  space-y-2'>
                <h2 className=' font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200'>Apply for Online Visa</h2>
                <p> Lorem ipsum is dolo sit amet, conse ctetur.</p>
            </div>

            <span className='  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full'></span>
        
        <span className=' rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]'></span>
        </div>
        <div className='group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] h-[200px] border  flex space-x-8'>
            <div>

            <Image src={passport} alt='Services Image' width={200} height={200} className='  z-20 grayscale-0 invert  w-20' />
            </div>
            <div className=' z-30 flex flex-col   justify-center  space-y-2'>
                <h2 className=' font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200'>Apply for Online Visa</h2>
                <p> Lorem ipsum is dolo sit amet, conse ctetur.</p>
            </div>

            <span className='  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full'></span>
        
        <span className=' rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]'></span>
        </div>
        <div className='group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] h-[200px] border  flex space-x-8'>
            <div>

            <Image src={ticket} alt='Services Image' width={200} height={200} className='  z-20 grayscale-0 invert  w-20' />
            </div>
            <div className=' z-30 flex flex-col   justify-center  space-y-2'>
                <h2 className=' font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200'>Apply for Online Visa</h2>
                <p> Lorem ipsum is dolo sit amet, conse ctetur.</p>
            </div>

            <span className='  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full'></span>
        
        <span className=' rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]'></span>
        </div>
        <div className='group rounded-lg  z-40 overflow-hidden relative p-4 m-4 cursor-pointer w-[340px] h-[200px] border  flex space-x-8'>
            <div>

            <Image src={paper} alt='Services Image' width={200} height={200} className='  z-20 grayscale-0 invert  w-20' />
            </div>
            <div className=' z-30 flex flex-col   justify-center  space-y-2'>
                <h2 className=' font-bold  text-xl  hover:text-orange transition-all ease-linear duration-200'>Apply for Online Visa</h2>
                <p> Lorem ipsum is dolo sit amet, conse ctetur.</p>
            </div>

            <span className='  -z-10  -left-[60px] -top-4 absolute w-[120px] h-[120px]  bg-gray-300  transition-all ease-linear duration-300  group-hover:bg-[#ff5c54] rounded-full'></span>
        
        <span className=' rounded-lg top-0  -left-[32px] w-0 h-0 opacity-0 group-hover:opacity-100  group-hover:w-full group-hover:h-full transition-all ease-linear  duration-300  absolute border  border-[#ff5c54]'></span>
        </div>
    </div>
  )
}
export default Services