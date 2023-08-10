
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Best Migration Services across Australia provided by Carlos Castro - HereisCarlos."
 
}

export default function ServicesLayout({
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