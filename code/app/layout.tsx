import type { Metadata } from "next";
import { ABeeZee } from "next/font/google"; 
import { Black_Ops_One } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import clsx from "clsx";
//import Footer from '@/components/Footer';


const blackOpsOne = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-blackopsone",
});

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-abeezee",
});


export const metadata: Metadata = {
  title: 
    { 
      template: 'LJETNA LIGA | %s',
      default: 'LJETNA LIGA',
    },
  description: "V ljetna liga općine Hrvace",
  icons: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
          abeezee.variable, blackOpsOne.variable,
        )}
        >
      <NavBar />
        {children}
      </body>
    </html>
  );
}
