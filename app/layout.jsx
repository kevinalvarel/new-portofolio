import { Poppins, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";

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
  title: "Kevin Alvarel | Portofolio",
  description: "Portofolio Muhammad Kevin Alvarel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jost.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
