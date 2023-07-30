import PTE from "../../assests/PTE.jpg";
import IELTS from "../../assests/IELTS.jpg";
import OpenBusiness from "../../assests/Opening_Business.jpg";
import Networking from "../../assests/NETWORKING.jpg";

import WebinarItem from "../../utilities/WebinarItem";
type Props = {};
function Webinars({}: Props) {
  return (
    <div className=" my-20 ">
      <div className=" flex space-y-2 justify-center text-center flex-col items-center">
        <h3 className=" uppercase text-sm text-orange">
          Helping you even further{" "}
        </h3>
        <h2 className=" font-bold text-2xl  md:text-3xl lg:text-4xl">
          Webinar and Immigration Training
        </h2>
      </div>

      <div className=" p-4  md:flex flex-wrap justify-center">
        {/** WEBINAR BLOCK */}
        <WebinarItem
          image={PTE}
          title="PTE Coaching"
          subtitle="Your Path to Language Success! Personalized guidance. Expert instructors. Guaranteed results."
        />
        <WebinarItem
          image={IELTS}
          title="IELTS Preparation"
          subtitle="Excel in English! Expert guidance. Personalized approach. Achieve your dream score."
        />
        <WebinarItem
          image={OpenBusiness}
          title="Opening a Business"
          subtitle="We Propel Your Business to Success! Expert guidance tailored to your needs. Achieve greatness together."
        />
        <WebinarItem
          image={Networking}
          title="Networking"
          subtitle="We Connect You to Endless Opportunities! Unlock your potential through meaningful networking."
        />
      </div>
    </div>
  );
}
export default Webinars;
