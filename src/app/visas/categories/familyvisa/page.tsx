"use client";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Metadata } from "next";

import VisaNavigation from "../../../../../utilities/VisaNavigation";
import Image from "next/image";
import posterImg from "../../../../../assests/Family bg.jpg";
import HeroBackground from "../../../../../utilities/HeroBackground";
import bg from "../../../../assests/family visa.jpg";

type Props = {};
export const metadata: Metadata = {
  title: "Family Visa",
  description: " Carlos Castro Migration and Education Services",
};

function familyVisa({}: Props) {
  return (
    <>
      {/** VISA INFORMATION BLOCK */}
      <div className="space-y-5  ">
        <Image
          src={posterImg}
          width={750}
          height={420}
          alt="Family Visa Image"
          className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
        />
        <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
          Love Conquers All: Your Journey to a Life of Happiness and
          Togetherness in Australia
        </h1>
        <p>
          Are you ready to take the leap of love and create a beautiful future
          with your partner in Australia? At Carlos' Migration and Education
          Services, we understand the power of love and the importance of being
          together. Let us guide you through the process of obtaining partner
          visas, tailored to your unique relationship, with the expertise of
          Golden Ticket Migration.
        </p>

        <h2 className=" font-semibold text-xl md:text-2xl ">Overview</h2>
        <p>
          Partner visas offer a pathway for couples to unite in Australia,
          whether through marriage, de facto relationships, or being a partner
          of a New Zealand citizen living in Australia. Depending on your
          specific circumstances, different options are available to you.
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl ">
          Eligibility & Conditions
        </h2>
        <p>
          To be eligible for partner visas, certain requirements must be met:
        </p>
        <ul className=" space-y-3">
          <li>
            <span className=" font-semibold">
              Fiancé (Prospective Marriage) Visa:{" "}
            </span>{" "}
            This visa allows entry to Australia with work rights for 9 months,
            during which you are expected to get married and apply for the
            onshore 820/801 visa.
          </li>
          <li>
            <span className=" font-semibold">Partner Visa:</span> You can apply
            for this visa if you have evidence of being in a marriage or de
            facto relationship for at least 12 months, or have formally
            registered your de facto relationship.
          </li>
          <li>
            <span className=" font-semibold">
              {" "}
              Partners of New Zealand Citizens:
            </span>{" "}
            As the partner of a New Zealand citizen living in Australia, you may
            be eligible for a temporary 5-year partner visa.
          </li>
          <li>
            The application process involves two stages: the provisional visa
            and the permanent residency application. The staged process is in
            place to ensure the authenticity of relationships.
          </li>
        </ul>
        <h2 className=" font-semibold text-xl md:text-2xl ">Conditions</h2>
        <p>
          Once you have your student visa, there are a few conditions you must
          abide by. These include maintaining full-time enrollment in your
          chosen course, making satisfactory academic progress, and maintaining
          adequate health insurance coverage throughout your stay in Australia.
          It&apos;s important to adhere to these conditions to ensure a smooth
          and successful academic journey.
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl ">Conditions</h2>
        <p>
          To apply for a student visa, you will need to gather a few documents.
          These typically include:
        </p>
        <ul className=" space-y-2">
          <li>
            1. Proof of enrollment: A letter of acceptance from your chosen
            educational institution.
          </li>
          <li>
            2. Financial documents: Evidence of sufficient funds to cover your
            tuition fees and living expenses.
          </li>
          <li>
            3. English proficiency: Results of an approved language test
            demonstrating your language skills.
          </li>
          <li>
            4. Genuine Temporary Entrant (GTE) statement: A written statement
            explaining your intentions to study in Australia temporarily.
          </li>
          <li>
            5. Health insurance: Proof of Overseas Student Health Cover (OSHC)
            for the duration of your stay.
          </li>
        </ul>

        <h2 className=" font-semibold text-xl md:text-2xl ">Steps To Apply</h2>
        <ul className=" space-y-2">
          <li>
            1. Consult Carlos at Golden Ticket Migration: Carlos and his team
            are experts in student visa applications. They will guide you
            through the process, answer your questions, and ensure you submit a
            strong and compelling application.
          </li>
          <li>
            2. Gather the required documents: Collect all the necessary
            documents mentioned earlier. Make sure they are complete,
            up-to-date, and meet the visa requirements.
          </li>

          <li>
            3. Complete the online application: Visit the official Australian
            Government&apos;s Department of Home Affairs website and fill out
            the student visa application form accurately. Double-check all the
            information before submitting.
          </li>
          <li>
            4. Pay the application fee: The visa application process involves a
            fee, which can be paid online through various payment methods.
          </li>
          <li>
            5. Submit your application: Once you&apos;ve completed the form and
            paid the fee, submit your application online. Keep a copy of the
            receipt and any other relevant documents for your records.
          </li>
          <li>
            6. Await a decision: The Department of Home Affairs will assess your
            application and notify you of their decision. This may take some
            time, so be patient.
          </li>
        </ul>

        <p>
          Carlos and Golden Ticket Migration: Carlos and the Golden Ticket
          Migration team are here to be your trusted partners throughout the
          entire student visa application process. They have extensive
          experience, a deep understanding of the Australian visa system, and a
          commitment to helping you achieve your dreams. Reach out to them, and
          together, you can pave your way to an extraordinary educational
          journey in Australia!
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl "> Conclusion</h2>

        <p>
          Don&apos;t let your dreams of studying in Australia remain just
          dreams. Take action today and embark on an exciting adventure of
          learning, growth, and cultural exploration. Trust Carlos and Golden
          Ticket Migration to guide you through the student visa application
          process, ensuring you have the best chance of success. Your golden
          ticket awaits - grab it now and unlock the door to a brighter future
          Down Under!
        </p>
      </div>
    </>
  );
}
export default familyVisa;
