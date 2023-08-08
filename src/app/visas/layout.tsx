
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Visas",
  description: "Find the Best Australian Visa that suits your needs"
 
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