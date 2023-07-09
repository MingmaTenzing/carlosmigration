import Image from "next/image";
import posterImg from "../../../../../../assests/subclass400.jpg";

type Props = {};
function subclass400({}: Props) {
  return (
    <div className=" space-y-5">
      <Image
        src={posterImg}
        width={750}
        height={420}
        alt="Student Visa Image"
        className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
      />

      <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
        Your Golden Ticket to Australia: A Motivational Guide to the 400 Visa
        Application Process
      </h1>
      <p>
        Introduction: Dreaming of exploring the Land Down Under? The Australian
        400 visa could be your golden ticket to experience the wonders of
        Australia. In this article, we'll provide you with an easy-to-understand
        overview of the 400 visa, its eligibility criteria, conditions,
        requirements, and the steps to apply. Remember, Carlos from Golden
        Ticket Migration is here to guide you through the process and make your
        Australian dream a reality.
      </p>
      <h2 className=" font-semibold text-xl md:text-2xl ">Overview</h2>
      <p>
        The 400 visa, also known as the Temporary Work (Short Stay Specialist)
        visa, allows you to work in Australia on a temporary basis for up to six
        months. It is designed for individuals who have specialized skills or
        knowledge and are invited by an Australian organization to contribute to
        a specific project or event.
      </p>
      <h2 className=" font-semibold text-xl md:text-2xl ">Eligibility: To be eligible for the 400 visa, you must:</h2>
      <ul className=" space-y-3">
        <li>
          1. Have specialized skills, knowledge, or experience relevant to the
          project or event in Australia.
        </li>
        <li>
          2. Be invited or sponsored by an Australian organization that is
          responsible for the project or event.{" "}
        </li>
        <li>3. Meet health and character requirements.</li>
      </ul>
      <h2 className=" font-semibold text-xl md:text-2xl ">
        Conditions: While onf the 400 visa, you must adhere to the following
        conditions
      </h2>
      <ul className=" space-y-3">
        <li>
          1. Engage only in the work or activities specified in your visa
          application.
        </li>
        <li>
          2. Leave Australia before the visa expires or within the permitted
          stay duration.
        </li>
        <li>
          3. Maintain valid health insurance during your stay in Australia.
        </li>
        <li>4. Comply with all Australian laws and regulations.</li>
      </ul>
    </div>
  );
}
export default subclass400;
