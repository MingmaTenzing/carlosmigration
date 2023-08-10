
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subclass 400",
  description: "Find the Best Visa For You - HereisCarlos"
 
}

export default function Subclass400Layout({
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