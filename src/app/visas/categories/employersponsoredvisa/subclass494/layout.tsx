
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subclass 494",
  description: "Subclass 494 visa is an Australian skilled work visa that falls under the Regional Employer Sponsored category."
 
}

export default function Subclass494Layout({
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