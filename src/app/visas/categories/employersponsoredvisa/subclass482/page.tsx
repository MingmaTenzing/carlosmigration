"use client";
import { Metadata } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import posterImg from "../../../../../../assests/subclass408bg.jpg";

type Props = {};

function Subclass482({}: Props) {
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
        Unlock Your Australian Dream with the 482 Visa - Let Carlos and Golden
        Ticket Migration Be Your Guide!
      </h1>
      <p>
        : Are you ready to embark on an exciting journey in Australia? Look no
        further because Carlos and the expert team at Golden Ticket Migration
        are here to help you unlock your Australian dream! With the Temporary
        Skill Shortage Visa, also known as the 482 Visa, you can live and work
        in Australia while pursuing your goals and building a brighter future.
        Let&apos; dive into the details and see how you can make this incredible
        opportunity a reality!
      </p>
      <h2 className="  font-semibold text-xl md:text-2xl">Overview</h2>
      <p>
        The 482 Visa is a temporary visa that allows you to live in Australia
        and work full-time for a sponsoring employer in a nominated occupation.
        This visa is designed to address skill shortages in the country, giving
        you the chance to contribute your talents and expertise.
      </p>
      <h2 className="  font-semibold text-xl md:text-2xl">Eligibility</h2>
      <ul className=" space-y-3">
        <li>
          1. <span className=" font-semibold">Job Offer:</span> You must have a
          job offer from an Australian employer who is willing to sponsor you.
        </li>
        <li>
          2. <span className=" font-semibold">Work Experience:</span> You need
          at least two years of experience in the position you are nominated
          for.
        </li>
        <li>
          3. <span className=" font-semibold">Genuine Intention:</span> You must
          demonstrate a genuine intention to work in the nominated position in
          Australia.
        </li>
        <li>
          4. <span className=" font-semibold">Qualifications:</span> Your
          qualifications should be relevant to the nominated position.
        </li>
        <li>
          5. <span className=" font-semibold">Health Insurance:</span> You must
          make adequate arrangements for health insurance.
        </li>
        <li>
          6.{" "}
          <span className=" font-semibold">
            6. Health, Character, and English Requirements:{" "}
          </span>{" "}
          You need to meet the health, character, and English language
          requirements set by the Australian government.
        </li>
      </ul>

      <h2 className="  font-semibold text-xl md:text-2xl">Conditions</h2>
      <p>
        Once you obtain the 482 Visa, there are certain conditions you must
        adhere to:
      </p>
      <ul className=" space-y-3">
        <li>
          1. Approved Work: You can only work in the occupation for which your
          visa was approved. If you want to work in a different occupation, you
          must apply for a new TSS visa.
        </li>
        <li>
          2. Employer Limitations: You can only work for the employer who
          nominated you, with a few limited exceptions.
        </li>
        <li>
          3. Employment Continuity: You should not cease employment for a period
          exceeding 60 consecutive days.
        </li>
        <li>
          4. Mandatory Licenses and Registrations: You must hold any mandatory
          licenses, registrations, or memberships required for your nominated
          occupation.
        </li>
        <li>
          5. Compliance: You must comply with all conditions and requirements
          related to your occupation&apos; licenses, registrations, or memberships.
        </li>
      </ul>
      <h2 className="  font-semibold text-xl md:text-2xl">Steps to Apply</h2>
      <p>Applying for the 482 Visa involves a few essential steps:</p>
      <ul className=" space-y-3">
        <li>
          1. Consultation: Book a consultation with Carlos and the team at
          Golden Ticket Migration. We will assess your eligibility and guide you
          through the process.
        </li>
        <li>
          2. Sponsorship Application: Your employer will need to submit a
          sponsorship application on your behalf.
        </li>
        <li>
          3. Nomination Application: Your employer will nominate you for a
          skilled position, providing necessary details and documents.
        </li>
        <li>
          4. Visa Application: Once the nomination is approved, you can submit
          your visa application, including all the required information and
          supporting documents.
        </li>
        <li>
          5. Document Submission: Ensure that you submit all the necessary
          documents promptly to avoid any delays in the application process.
        </li>
        <li>
          6. Follow-up and Updates: Stay in touch with Carlos and our team to
          receive updates on your application&apos; progress.
        </li>
        <p>
          Now is the time to take action and embark on your Australian
          adventure! Book a consultation with Carlos and Golden Ticket Migration
          today to kick-start your journey towards obtaining the 482 Visa. Our
          expert guidance and support will ensure a smooth and successful
          application process, bringing you one step closer to realizing your
          dreams in Australia. Don&apos; let this golden opportunity slip away—reach
          out to us now!
        </p>
        <p>
          Remember, Carlos and Golden Ticket Migration are here to make your
          dreams come true in Australia. Let&apos; work together to unlock your
          Australian dream!
        </p>
      </ul>
    </div>
  );
}
export default Subclass482;
