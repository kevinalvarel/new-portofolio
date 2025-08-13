import { Poppins, Jost } from "next/font/google";
import "../globals.css";
import { NavbarPage } from "@/components/NavbarPage";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "500",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Kevin Alvarel | Project",
  description: "Portofolio Muhammad Kevin Alvarel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jost.variable} antialiased overflow-x-clip`}
      >
        <NavbarPage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
