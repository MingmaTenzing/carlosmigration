import { StarIcon } from "@heroicons/react/24/solid";
import userPhoto from "../assests/user.jpg";
import Image from "next/image";
import { review } from "../components/Home Components/Reviews";

interface props {
  review: review;
}

function ReviewBlock({ review }: props) {
  return (
    <div className=" m-4 space-y-4 flex flex-col justify-center bg-white p-6 min-w-[320px] min-h-[360px] border rounded-lg">
      <div className=" flex">
        <StarIcon className=" w-6   text-yellow-400" />
        <StarIcon className=" w-6  text-yellow-400" />
        <StarIcon className=" w-6  text-yellow-400" />
        <StarIcon className=" w-6  text-yellow-400" />
        <StarIcon className=" w-6  text-yellow-400" />
      </div>
      <p className=" italic">{review.reviewText}</p>
      <div className=" flex items-center space-x-4">
        <Image
          src={review.photoURL}
          alt="Review User Photo"
          width={100}
          height={100}
          className=" w-[90px] h-[90px] object-cover rounded-full"
        />
        <div>
          <h3 className=" font-bold  text-lg  text-reviewText ">
            {review.user}
          </h3>
          <p className=" uppercase ">{review.position}</p>
        </div>
      </div>
    </div>
  );
}
export default ReviewBlock;
