'use client'
import PTE from "../../assests/PTE.jpg";
import IELTS from "../../assests/IELTS.jpg";
import OpenBusiness from "../../assests/Opening_Business.jpg";
import Networking from "../../assests/NETWORKING.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';
import WebinarItem from "../../utilities/WebinarItem";
import { useEffect } from "react";
type Props = {};
function Webinars({}: Props) {
  useEffect(() => {Aos.init()},[])
  return (
    <div className=" z-10 my-20 ">
      <div className=" flex space-y-2 justify-center text-center flex-col items-center">
        <h3  data-aos="fade-up"  data-aos-once="true" data-aos-duration="600" className=" uppercase text-sm text-orange">
          Helping you even further{" "}
        </h3>
        <h2 data-aos="fade-up"  data-aos-once="true" data-aos-duration="800" className=" font-bold text-2xl  md:text-3xl lg:text-4xl">
          Webinar and Immigration Training
        </h2>
      </div>

      <div className=" p-4   md:flex flex-wrap justify-center  z-0">
        {/** WEBINAR BLOCK */}
        <div  data-aos="fade-up"  data-aos-once="true" data-aos-duration="600">

        <WebinarItem
       
          image={PTE}
          title="PTE Coaching"
          subtitle="Your Path to Language Success! Personalized guidance. Expert instructors. Guaranteed results."
        />
        </div>
        <div  data-aos="fade-up"  data-aos-once="true" data-aos-duration="800">
        <WebinarItem
          image={IELTS}
         
          title="IELTS Preparation"
          subtitle="Excel in English! Expert guidance. Personalized approach. Achieve your dream score."
        />

        </div>
        <div  data-aos="fade-up"  data-aos-once="true" data-aos-duration="1000">

        <WebinarItem
          image={OpenBusiness}
          title="Opening a Business"
          data-aos="fade-up"  data-aos-once="true" data-aos-duration="900"
          subtitle="We Propel Your Business to Success! Expert guidance tailored to your needs. Achieve greatness together."
        />
        </div>
        <div  data-aos="fade-up"  data-aos-once="true" data-aos-duration="1200">
          
        <WebinarItem
          image={Networking}
          title="Networking"
          data-aos="fade-up"  data-aos-once="true" data-aos-duration="1000"
          subtitle="We Connect You to Endless Opportunities! Unlock your potential through meaningful networking."
        />
        </div>
      </div>
    </div>
  );
}
export default Webinars;
