
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subclass 408",
  description: "Find the Best Visa For You"
 
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