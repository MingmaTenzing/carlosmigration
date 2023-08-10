
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subclass 482",
  description: "Subclass 482 visa, also known as the Temporary Skill Shortage (TSS) visa, is an Australian work visa designed to allow employers to sponsor skilled foreign workers to fill labor shortages in the Australian job market."
 
}

export default function Subclass482Layout({
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