
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Family Visa",
  description: "Family visas in Australia are designed to allow eligible family members of Australian citizens, permanent residents, or eligible New Zealand citizens to live in Australia. "
 
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