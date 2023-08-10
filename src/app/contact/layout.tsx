
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Carlos Castro Migration - HereisCarlos"
 
}

export default function ContactLayout({
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