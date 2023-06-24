type Props = {}
function BookAppointment({}: Props) {
  return (
    <div className= "  flex justify-center">
        <div className="   flex flex-col p-6 items-center w-[80%] text-center space-y-4 rounded-lg bg-opacity-90 bg-orange ">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-white">Are you Looking for Visa Consultation?</h2>
            <button className="  p-4 rounded-lg font-semibold text-sm hover:bg-gray-600 hover:text-white transition-all ease-linear duration-200 uppercase bg-white text-black">Book Appointment</button>

        </div>
        
    </div>
  )
}
export default BookAppointment