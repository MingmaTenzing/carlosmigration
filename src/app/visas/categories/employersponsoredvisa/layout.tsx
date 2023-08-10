
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Employer Sponsored Visa",
  description: "These visas are designed to address specific labor shortages and allow employers to bring in skilled workers when they cannot find suitable employees within the Australian workforce."
 
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