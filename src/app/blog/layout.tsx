import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Get all the latest news and information regarding Australian immigration and visa updates.'
}

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </section>
  );
}