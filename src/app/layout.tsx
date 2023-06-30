import Nav from "../../components/Home Components/Nav";
import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Carlos Castro Migration",
  description: " Carlos Castro Migration and Educatoin Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
