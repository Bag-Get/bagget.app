import { IconButton } from "@/components/ui/icons";
import { Heading } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";


export default function ReportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="flex flex-col">
        <div className="bg-emerald-900 h-32 p-6 flex w-full justify-between items-center">
            <div className="flex flex-col gap-5">
                <Heading styles={{weight: "font-semibold"}}>
                    Reports
                </Heading>
                <div className="flex gap-5">
                    <Link href="/">
                        <Heading size="h3" styles={{weight: "font-medium"}}>
                            At a Glance
                        </Heading>
                    </Link>
                    <Link href="/">
                        <Heading size="h3" styles={{weight: "font-medium", color: "text-gray-300 text-opacity-50"}}>
                            History
                        </Heading>
                    </Link>
                </div>
            </div>
            <Link href="/">
              <IconButton icon="CirclePlus" size="lg" align="right" iconColor="#030712">
                <Heading size="h2" styles={{color: "text-gray-950", weight: "font-semibold"}}>
                  Create
                </Heading>
              </IconButton>
            </Link>
        </div>
        {children}
    </main>
  );
}
