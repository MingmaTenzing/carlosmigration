import BookAppointment from "./BookAppointment"

type Props = {}
function RecentBlogs({}: Props) {
  return (
    <div className=" py-40 relative">
        <div className=" space-y-4 flex flex-col  items-center">
            <span className=" text-orange">News & Updates</span>
            <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl">Recent Blogs Posts</h2>


        </div>

        <div className=" absolute w-full -top-[140px] z-20 ">
            <BookAppointment />
        </div>
    </div>
  )
}
export default RecentBlogs