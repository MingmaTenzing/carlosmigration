

import Image from "next/image";
import posterImg from "../../../../../assests/Family bg.jpg";


type Props = {};


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
          with your partner in Australia? At Carlos Migration and Education
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
      
      </div>
    </>
  );
}
export default familyVisa;
