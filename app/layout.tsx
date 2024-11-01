import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { NavBar } from "../components/ui/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bag/Get",
  description:
    "Bag/Get the all-in-one solution for food pantries",
  authors: [
    { name: "Rohan Kunchala" },
    { name: "Cesar Rojas" },
    { name: "Alan Cortez", url: "https://alancortez.dev/" },
  ],
  creator: "Alan Cortez",
  keywords: [
    "Bag/Get",
    "Bagget",
    "Alan Cortez",
    "Rohan Kunchala",
    "Cesar Rojas",
    "alleviating food insecurity",
    "Food Bank Solutions",
    "Food Pantry Solutions",
    "Pantry Solutions",
    "Engineering Social Justice",
    "Engineering Social Justice 1st place",
    "CSUF Engineering Social Justice",
    "CSU, Fullerton Engineering Social Justice",
    "SCAR Day",
    "CSUF SCAR Day",
    "CSU, Fullerton SCAR Day",
    "CSU, Fullerton SCAR Day 1st place",
    "San Jose Sunstone 2023 3rd place winners",
    "Sunstone 2023 3rd place winners",
    "Sunstone 2023",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen grid grid-cols-[400px_1fr] grid-rows-[auto_1fr]">
          <NavBar />
          <div className="bg-emerald-900 p-6 flex justify-end gap-6">
            <div className="w-96 flex gap-4">
              <Input type="search" placeholder="Navigate Bag/Get" />
              <Button type="submit" className="bg-lime-100 hover:bg-emerald-100"><Icons name="Search" color="#030712"/></Button>
            </div>
            <Button type="submit" className="bg-lime-100 hover:bg-emerald-100"><Icons name="Bell" color="#030712"/></Button>
          </div>
          <main className="h-full w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
