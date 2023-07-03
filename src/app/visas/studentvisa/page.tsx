
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import students from "../../../../assests/Students Background Image.jpg";
import bg from "../../../../assests/Visa Background.jpg";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import VisaNavigation from "../../../../utilities/VisaNavigation";
import HeroBackground from "../../../../utilities/HeroBackground";
type Props = {};
function StudentVisa({}: Props) {
  const path = usePathname();


  return (
    <>
      <div>
       <HeroBackground bg={bg} title="Student Visa" subTitle="Get the best services across all visa categories" />
      </div>

      {/** BODY */}

      <div className=" lg:flex lg:space-x-10 lg:justify-center md:p-8 p-4">
      {/** NAVIGATION BOX */}
      <VisaNavigation />

        {/** VISA INFORMATION BLOCK */}
        <div className=" lg:w-1/2 space-y-5 mt-10 lg:mt-0 ">
          <Image
            src={students}
            width={750}
            height={420}
            alt="Student Visa Image"
            className=" w-[750px] lg:w-full h-[420px] object-cover object-center"
          />
          <h1 className=" font-bold text-2xl md:text-3xl lg:text-4xl">
            Grab Your Golden Ticket to Study in Australia: A Motivating Guide to
            Student Visas
          </h1>
          <p>
            Are you dreaming of studying in Australia? It&apos;s time to turn that
            dream into reality! With its top-notch universities, diverse
            culture, and stunning landscapes, Australia offers an incredible
            educational experience. But before you embark on this exciting
            journey, you need to secure a student visa. Don&apos;t worry, we&apos;re here
            to guide you through the process and introduce you to Carlos, your
            golden ticket to success through Golden Ticket Migration!
          </p>

          <h2 className=" font-semibold text-xl md:text-2xl ">Overview</h2>
          <p>
            A student visa is your key to unlocking the door to world-class
            education in Australia. It allows you to pursue your chosen course
            while immersing yourself in a vibrant and multicultural environment.
            So let&apos;s dive into the details and discover how you can make thiss
            happen!
          </p>
          <h2 className=" font-semibold text-xl md:text-2xl ">Eligibility</h2>
          <p>
            To be eligible for a student visa, you need to meet certain
            criteria. Firstly, you must have been accepted into a registered
            course at an Australian educational institution. This could be a
            university, vocational training, English language course, or even a
            school. Additionally, you must demonstrate that you have sufficient
            funds to cover your tuition fees, living expenses, and travel costs.
            Finally, you must prove your proficiency in English by taking an
            accepted language test, such as IELTS or TOEFL.
          </p>
          <h2 className=" font-semibold text-xl md:text-2xl ">Conditions</h2>
          <p>
            Once you have your student visa, there are a few conditions you must
            abide by. These include maintaining full-time enrollment in your
            chosen course, making satisfactory academic progress, and
            maintaining adequate health insurance coverage throughout your stay
            in Australia. It&apos;s important to adhere to these conditions to ensure
            a smooth and successful academic journey.
          </p>
          <h2 className=" font-semibold text-xl md:text-2xl ">Conditions</h2>
          <p>
            To apply for a student visa, you will need to gather a few
            documents. These typically include:
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

          <h2 className=" font-semibold text-xl md:text-2xl ">
            Steps To Apply
          </h2>
          <ul className=" space-y-2">
            <li>
              1. Consult Carlos at Golden Ticket Migration: Carlos and his team
              are experts in student visa applications. They will guide you
              through the process, answer your questions, and ensure you submit
              a strong and compelling application.
            </li>
            <li>
              2. Gather the required documents: Collect all the necessary
              documents mentioned earlier. Make sure they are complete,
              up-to-date, and meet the visa requirements.
            </li>

            <li>
              3. Complete the online application: Visit the official Australian
              Government&apos;s Department of Home Affairs website and fill out the
              student visa application form accurately. Double-check all the
              information before submitting.
            </li>
            <li>
              4. Pay the application fee: The visa application process involves
              a fee, which can be paid online through various payment methods.
            </li>
            <li>
              5. Submit your application: Once you&apos;ve completed the form and
              paid the fee, submit your application online. Keep a copy of the
              receipt and any other relevant documents for your records.
            </li>
            <li>
              6. Await a decision: The Department of Home Affairs will assess
              your application and notify you of their decision. This may take
              some time, so be patient.
            </li>
          </ul>

          <p>
            Carlos and Golden Ticket Migration: Carlos and the Golden Ticket
            Migration team are here to be your trusted partners throughout the
            entire student visa application process. They have extensive
            experience, a deep understanding of the Australian visa system, and
            a commitment to helping you achieve your dreams. Reach out to them,
            and together, you can pave your way to an extraordinary educational
            journey in Australia!
          </p>
          <h2 className=" font-semibold text-xl md:text-2xl "> Conclusion</h2>

          <p>
            Don&apos;t let your dreams of studying in Australia remain just dreams.
            Take action today and embark on an exciting adventure of learning,
            growth, and cultural exploration. Trust Carlos and Golden Ticket
            Migration to guide you through the student visa application process,
            ensuring you have the best chance of success. Your golden ticket
            awaits - grab it now and unlock the door to a brighter future Down
            Under!
          </p>
        </div>


        {/** TWITTER TIMELINE */}
        <div className=" hidden lg:flex">

        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="CHARLIESHUN"
  options={{height: 800, width:320}}
/>
        </div>
      </div>
    </>
  );
}
export default StudentVisa;
