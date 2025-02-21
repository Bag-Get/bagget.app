'use client'

import React from "react";
import { Heading } from "@/components/ui/typography"
import Link from "next/link";
import { IconButton, Icons } from "@/components/ui/icons";
import { notFound, usePathname } from 'next/navigation'
import { distributions } from "@/data/distributionData";
import { DateFormat } from "@/components/utility/dateFormat";
import { CTA } from "@/components/ui/button";


export default function DistributionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // TODO: refractor to use useRouter();
  const pathname = usePathname()
  const pathID = pathname.split("/")
  const distributionID = pathID[pathID.length - 1]

  const distribution = distributions.filter((dist) => dist.id === distributionID)

  if(!(pathname === "/distributions" || pathname === "/distributions/history") && !distribution[0]) {
    notFound()
  }

  return (
    <main className="flex-1 flex flex-col">
        <div className="bg-emerald-900 h-32 p-6 flex w-full justify-between items-center">
            <div className="flex flex-col gap-5">
                {pathname === "/distributions" || pathname === "/distributions/history" ? 
                  <Heading styles={{weight: "font-semibold"}}>
                    Distributions
                  </Heading>
                : 
                <div className="flex gap-3">
                  <Heading styles={{weight: "font-semibold"}}>
                    {distribution[0].pantry}:
                  </Heading>
                  <DateFormat date={distribution[0].date } isHeading headingSize="h1"/>
                </div>
                
                }
                <div className="flex gap-5">
                    <Link href="/distributions">
                        <Heading size="h3" styles={pathname === "/distributions" ? {weight: "font-medium"} : {weight: "font-medium", color: "text-gray-300 text-opacity-50"}}>
                            Upcoming
                        </Heading>
                    </Link>
                    <Link href="/distributions/history">
                        <Heading size="h3" styles={pathname === "/distributions/history" ? {weight: "font-medium"} : {weight: "font-medium", color: "text-gray-300 text-opacity-50"}}>
                            History
                        </Heading>
                    </Link>
                </div>
            </div>
            {pathname === "/distributions" || pathname === "/distributions/history" ? 
                <Link href="/">
                  <IconButton icon="CirclePlus" size="lg" align="right" iconColor="#030712">
                    <Heading size="h2" styles={{color: "text-gray-950", weight: "font-semibold"}}>
                      Create
                    </Heading>
                  </IconButton>
                </Link>
              : 
              <div className="flex gap-5 items-center">
                  <CTA redirect="/" style="light-big">
                    <Heading size="h2" styles={{color: "text-gray-950", weight: "font-semibold"}}>
                      Start Distribution
                    </Heading>
                  </CTA>
                  <CTA redirect="/" style="light-border">
                    <Icons name="Pencil" color="#ecfccb" size='lg'/>
                  </CTA>
                </div>
              
            }
            
        </div>
        {children}
    </main>
  );
}
