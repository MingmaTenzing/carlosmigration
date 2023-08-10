
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subclass 408",
  description: "Subclass 408 visa is an Australian temporary visa that allows individuals to participate in various activities such as work, research, cultural exchange, or special events - HereisCarlos"
 
}

export default function Subclass408Layout({
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