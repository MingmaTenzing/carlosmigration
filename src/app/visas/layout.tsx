import Nav from "../../../components/Home Components/Nav";
import "../../app/globals.css";

import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Visa Services",
  description: " Carlos Castro Migration and Education Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
