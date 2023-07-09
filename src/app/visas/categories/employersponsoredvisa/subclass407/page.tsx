"use client";
import { Metadata } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import posterImg from "../../../../../../assests/Subclass407.jpg";

type Props = {};

function Subclass407({}: Props) {
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
        Unlock New Opportunities in Australia with the 407 Visa
      </h1>
      <p>
        Are you ready to expand your horizons, gain valuable experience, and
        enhance your skills in Australia? Look no further than the 407 visa!
        This is your golden ticket to embark on a journey of professional
        development and personal growth Down Under. At Carlos' Migration and
        Education Services, we're here to guide you every step of the way.
      </p>
      <h2 className="  font-semibold text-xl md:text-2xl">Overview</h2>
      <p>
        The 407 Training visa is designed for individuals who seek
        workplace-based training activities to improve their skills in their
        chosen occupation, field of study, or area of expertise. It's an
        incredible opportunity to gain hands-on experience, broaden your
        knowledge, and open doors to new career possibilities.
      </p>
      <h2 className="  font-semibold text-xl md:text-2xl">Eligibility:</h2>
      <p>To be eligible for the 407 visa, you must meet certain criteria:</p>

      <ol type="1" className=" space-y-3">
        <li>
          <span className=" font-semibold">Sponsorship:</span> You need to be
          sponsored by an approved Temporary Activities Sponsor, which can be an
          Australian organization, a foreign government agency, or a government
          agency in Australia.
        </li>

        <li>
          <span className=" font-semibold">Genuine Intention:</span> You should
          have a genuine intention to stay temporarily in Australia and
          participate in the nominated training, research position, or program.
        </li>
        <li>
          <span className=" font-semibold">Financial Support: </span> It's
          essential to demonstrate that you have adequate financial support to
          cover your expenses and support any accompanying family members during
          your stay in Australia.
        </li>
        <li>
          <span className="font-semibold">
            Health and Character Requirements:{" "}
          </span>{" "}
          You need to meet certain health and character requirements to ensure
          the safety and security of Australia.
        </li>
        <li>
          <span className=" font-semibold">Health Insurance: </span> You must
          have adequate arrangements for health insurance while you're in
          Australia.
        </li>
      </ol>
      <h2 className="  font-semibold text-xl md:text-2xl">Eligibility</h2>
      <p> Once you have the 407 visa, you'll enjoy several benefits:</p>
      <ul className=" space-y-3">
        <li>
          Duration: You can enter Australia at any time after your visa is
          granted and stay for the duration of the training, research position,
          or program.
        </li>
        <li>
          Training Activities: You'll have the opportunity to engage in the
          specific training or activity mentioned in your visa application.
        </li>
        <li>
          Travel Flexibility: You can travel to and from Australia as many times
          as you want until you have completed the program or your visa expires,
          whichever occurs first.
        </li>
      </ul>

      <h2 className="  font-semibold text-xl md:text-2xl">Eligibility</h2>
      <p>To successfully apply for the 407 visa, you'll need to:</p>
      <ul className=" space-y-3">
        <li>
          Secure a Sponsor: Carlos and our team at Golden Ticket Migration will
          assist you in finding an approved Temporary Activities Sponsor who
          aligns with your training goals and can sponsor you for the visa.
        </li>
        <li>
          Gather Documentation: We'll help you compile all the necessary
          documents, such as sponsorship details, training plans, financial
          statements, health insurance, and character certificates.
        </li>
        <li>
          Visa Application: We'll guide you through the visa application
          process, ensuring that all the required information is accurately
          provided.
        </li>
        <li>
          Compliance: During your stay in Australia, it's important to comply
          with the visa conditions, maintain your health insurance coverage, and
          fulfill any obligations as per the sponsorship agreement.
        </li>
      </ul>

      <h2 className="  font-semibold text-xl md:text-2xl">Take Action Now!</h2>
      <p>
        Don't miss out on this incredible opportunity to advance your career and
        experience the wonders of Australia. Contact Carlos' Migration and
        Education Services today and let us be your trusted guide in securing
        the 407 visa. Our team at Golden Ticket Migration will provide you with
        comprehensive assistance, making the application process smooth and
        stress-free.
      </p>
      <p>
        Remember, this is your chance to unlock new horizons, gain invaluable
        skills, and create a brighter future for yourself. Seize the
        opportunity, take action, and let Carlos and our team at Golden Ticket
        Migration pave the way to your Australian dreams!
      </p>
    </div>
  );
}
export default Subclass407;
