import { Poppins, Jost } from "next/font/google";
import "../globals.css";

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
  title: "Kevin Alvarel | Certificates",
  description:
    "Kevin is a software developer specializing in web development and design. Explore his projects, skills, and contact information.",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
