import { Heading } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";


export default function ReportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col">
        <div className="">
          <Heading styles={{color: "text-gray-950"}}>
            Reports
          </Heading>
          <div className="flex gap-4">
            <Link href="/">
              <Heading size="h2" styles={{weight: "font-medium", color: "text-gray-950"}}>
                At a Glance
              </Heading>
            </Link>
            <Link href="/">
              <Heading size="h2" styles={{weight: "font-medium", color: "text-gray-950"}}>
                History
              </Heading>
            </Link>
          </div>
        </div>
        {children}
    </div>
  );
}
