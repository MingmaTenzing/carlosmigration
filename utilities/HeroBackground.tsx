import Image, { StaticImageData } from "next/image"

interface details{
    bg: StaticImageData,
    title: string, 
    subTitle: string,
}

type Props = {}
function HeroBackground({bg, title, subTitle}: details) {
  return (
    <div>
         <div className="  overflow-hidden min-w-full h-[320px]   relative">
        <div className=" space-y-2 lg:space-y-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-center text-orange z-30">
         {title}
          </h1>
          <p className=" font-semibold text-white  text-lg md:text-xl lg:text-2xl">{subTitle}</p>
        </div>

        <Image
          src={bg}
          alt="Contact Background Image"
          width={640}
          height={247}
          className="  w-full h-full object-cover"
        />
        <span className=" bg-[#201c2c] h-full w-full top-0  left-0 bg-opacity-90 absolute "></span>
      </div>
    </div>
  )
}
export default HeroBackground