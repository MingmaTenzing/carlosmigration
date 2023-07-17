import Image from "next/image";
import posterImg from "../../../../../assests/businessvisa.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Visa Subclass 188",
  description:
    "Unlock Boundless Opportunities: Business Innovation and Investment Visa (subclass 188)",
};

type Props = {};

function businessVisa({}: Props) {
  return (
    <>
      {/** VISA INFORMATION BLOCK */}
      <div className=" space-y-5 ">
        <Image
          src={posterImg}
          width={750}
          height={420}
          alt="Student Visa Image"
          className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
        />
        <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
          Unlock Boundless Opportunities: Business Innovation and Investment
          Visa (subclass 188)
        </h1>
        <p>
          The subclass 188 visa is a temporary visa that allows you to invest in
          and live in Australia for four years. It&apos;s part of the Business
          Innovation and Investment Program, which is all about encouraging
          business-minded individuals like you to bring their talents and ideas
          to Australia.
        </p>

        <p>
          Now, let&apos;s talk about the different streams within this visa program:
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl ">
          Business Innovation Stream
        </h2>
        <p>
          This is for people with business skills who want to establish,
          develop, or manage a new or existing business in Australia. To be
          eligible, you need to achieve at least 65 points and be nominated by a
          state or territory government. It&apos;s important to be under 55 years old
          and meet specific business turnover and net assets requirements.
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl ">Investor Stream</h2>
        <p>
          If you&apos;re interested in making a designated investment of at least
          AUD1.5 million in an Australian state or territory and maintaining
          business and investment activity there, this stream is for you.
          Similar to the Business Innovation stream, you need to achieve at
          least 65 points and be nominated by a state or territory government.
          Age requirements and net assets requirements also apply.
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl ">
          Significant Investor Stream
        </h2>
        <p>
          Are you willing to invest at least AUD5 million into complying
          significant investments in Australia? This stream is designed for you.
          You can be nominated by a state or territory government or Austrade on
          behalf of the Australian government. This stream doesn&apos;t require
          points, but you need to invest in complying investment funds before
          your visa is granted.
        </p>
        <h2 className=" font-semibold text-xl md:text-2xl ">
          Premium Investor Stream
        </h2>
        <p>
          If you&apos;re ready to take it up a notch and invest at least AUD15
          million into complying premium investments in Australia, this stream
          is your golden opportunity. Austrade will reach out to suitable
          candidates on behalf of the Australian government for nomination.
        </p>

        <h2 className=" font-semibold text-xl md:text-2xl ">
          Entrepreneur Stream
        </h2>

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
          Are you an aspiring entrepreneur with a funding agreement of at least
          AUD200,000 from a third party? This stream is for those who have big
          ideas and want to develop a business or commercialize a product or
          service in Australia. You&apos;ll need to be nominated by a state or
          territory government.
        </p>

        <p>
          Now, let&apos;s talk about the steps to apply for this visa. First, you
          must submit an Expression of Interest (EOI) through SkillSelect. Then,
          you need to be nominated by an eligible government organization. Once
          you receive an invitation, you can proceed with your visa application.
        </p>
        <p>
          Remember, this is not just about starting a business in Australia;
          it&apos;s about embarking on a life-changing journey. And here&apos;s where
          Carlos comes in. He&apos;s your guide and mentor throughout this incredible
          process. Carlos will be there to support you, answer your questions,
          and help you navigate any challenges that may come your way. Think of
          him as your personal cheerleader, rooting for your success.
        </p>
        <p>
          So, what are you waiting for? Take action now! Reach out to Carlos and
          let the adventure begin. Your golden ticket to Australia and a world
          of possibilities awaits. Believe in yourself, embrace the unknown, and
          make that call to Carlos today. It&apos;s time to unlock your potential and
          create the life you&apos;ve always dreamed of.
        </p>
        <p>
          Remember, the only way to make your dreams a reality is by taking that
          first step. Start your journey to Australia, explore new horizons, and
          build a prosperous future for yourself and your family. Your
          entrepreneurial spirit is calling, and the Business Innovation and
          Investment Visa is your gateway to success.
        </p>
        <p>Go ahead, seize this opportunity, and let the world witness your incredible journey. Your golden ticket to Australia is waiting for you.</p>
      </div>
    </>
  );
}
export default businessVisa;
