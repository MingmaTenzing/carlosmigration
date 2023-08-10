
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skilled Visa",
  description: "A skilled visa in Australia is designed for individuals who possess specific skills, qualifications, and work experience in occupations that are in demand in the Australian job market. "
 
}

export default function VisaLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
     
        {children}
      </section>
    )
  }