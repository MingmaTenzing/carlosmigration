
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subclass 407",
  description: "Subclass 407 visa is an Australian temporary work visa designed for individuals who want to participate in occupational training, professional development, or workplace-based learning activities in Australia."
 
}

export default function Subclass407Layout({
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