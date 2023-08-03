'use client'
import { StarIcon } from "@heroicons/react/24/solid";
import reviews from "../../reviews";
import Image from "next/image";
import userPhoto from "../../assests/user.jpg";
import ReviewBlock from "../../utilities/ReviewBlock";
import map from "../../assests/map1.png"
import BookAppointment from "./BookAppointment";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export interface review {
  id: number;
  reviewText: string;
  user: string;
  position: string;
  photoURL: any;
}

function Reviews() {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div className="   z-20 relative p-4 bg-gray-100 py-20  pb-40">
      <div className=" z-10 flex flex-col items-center space-y-2">
        <h3  data-aos="fade-up"  data-aos-once="true" data-aos-duration="600" className=" uppercase text-sm text-orange">Reviews</h3>
        <h2  data-aos="fade-up"  data-aos-once="true" data-aos-duration="700" className=" font-bold text-2xl md:text-3xl lg:text-4xl">
          What They&apos;re Saying
        </h2>
      </div>

      <div  data-aos="fade-up"  data-aos-once="true" data-aos-duration="900" className=" z-10 flex lg:w-[1050px] lg:m-auto overflow-x-scroll scrollbar-hide ">
          {reviews.map((review) => (
         
              <ReviewBlock review={review} key={review.id} />

       
          ))}
     

      </div>
      <div className=" flex justify-center">
        <span className=" font-bold text-gray-300 text-5xl">....</span>
      </div>

      <Image src={map} alt="Map image" width={1894} height={819}    className="  -z-10 -top-[100px] left-1/2 -translate-x-1/2 md:min-w-[1200px] hidden md:flex absolute" />
  
    </div>
  );
}
export default Reviews;
