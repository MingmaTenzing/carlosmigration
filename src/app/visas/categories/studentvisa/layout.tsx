
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Visa",
  description: "A student visa in Australia allows international students to study full-time at an accredited educational institution in the country."
 
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