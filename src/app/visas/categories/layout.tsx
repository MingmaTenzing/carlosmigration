'use client'
import { Metadata } from "next";
import VisaNavigation from "../../../../utilities/VisaNavigation";
import { TwitterTimelineEmbed } from "react-twitter-embed";



export default function VisaLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" lg:flex lg:space-x-10 lg:justify-center md:p-8 p-4">
      {/* Include shared UI here e.g. a header or sidebar */}

      <div className=" lg:w-[300px]">
        <VisaNavigation />
      </div>
      <div className=" lg:w-1/2 space-y-5 mt-10 lg:mt-0 ">{children}</div>
      {/** TWITTER TIMELINE */}
      <div className=" hidden lg:flex lg:w-[300px]">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CHARLIESHUN"
          options={{ height: 800, width: 320 }}
        />
      </div>
    </section>
  );
}
