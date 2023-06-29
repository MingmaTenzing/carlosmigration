import { StarIcon } from "@heroicons/react/24/solid";
import reviews from "../../reviews";
import Image from "next/image";
import userPhoto from "../../assests/user.jpg";
import ReviewBlock from "../../utilities/ReviewBlock";
import map from "../../assests/map1.png"
import BookAppointment from "./BookAppointment";


export interface review {
  id: number;
  reviewText: string;
  user: string;
  position: string;
  photoURL: any;
}

function Reviews() {
  
  return (
    <div className=" overflow-hidden  z-20 relative p-4 bg-gray-100 py-20  pb-40">
      <div className=" z-10 flex flex-col items-center space-y-2">
        <h3 className=" uppercase text-sm text-orange">Reviews</h3>
        <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl">
          What They&apos;re Saying
        </h2>
      </div>

      <div className=" z-10 flex lg:w-[1050px] lg:m-auto overflow-x-scroll scrollbar-hide ">
          {reviews.map((review) => (
         
              <ReviewBlock review={review} key={review.id} />

       
          ))}
     

      </div>
      <div className=" flex justify-center">
        <span className=" font-bold text-gray-300 text-5xl">....</span>
      </div>

      <Image src={map} alt="Map image" width={1894} height={819} className="  -z-10 top-0 left-1/2 -translate-x-1/2 md:min-w-[1200px]   absolute" />
  
    </div>
  );
}
export default Reviews;
