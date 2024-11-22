"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from "@/components/ui/separator";
import { Heading, Text } from "@/components/ui/typography"
import { IconText } from "@/components/ui/icons"
import { operationLinks, peopleLinks, generalLinks } from "@/data/links"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export function NavBar() {

    const path: string = usePathname()

    const user = {
        profilePicture: "https://bagget.io/rohan-hs.webp",
        userName: "Rohan Kunchala",
        email: "rohan@bagget.io"
    }

    const userInitials = (user.userName.split(" ")[0][0] + user.userName.split(" ")[1][0]).toUpperCase()

    return (
        <nav className="h-screen row-span-2 bg-green-950 py-5 px-10">
            <div className="pb-4">
              <Heading>
                Pantry A
              </Heading>
              <Text size="md">
                Powered By Bag/Get
              </Text>
            </div>
            <Separator />
            <div className="py-10 flex flex-col gap-10">
              <section className="flex flex-col gap-3">
                <Text size="sm" styles={{weight: 'font-thin'}}>
                  Operations
                </Text>
                <div className="flex flex-col gap-4 justify-start items-start">
                  {operationLinks.map((operations, i) => (
                    <Link href={operations.link} key={i}>
                        <IconText icon={operations.icon} iconColor={path === operations.link ? '#fde68a' : undefined}>
                            <Heading size="h3" styles={path === operations.link ? {color: `text-yellow-200`} : undefined}> 
                                {operations.name}
                            </Heading>
                        </IconText>
                    </Link>
                  ))}
                </div>
              </section>
              <section className="flex flex-col gap-3">
                <Text size="sm" styles={{weight: 'font-thin'}}>
                  Your People
                </Text>
                <div className="flex flex-col gap-4 justify-start items-start">
                  {peopleLinks.map((people, i) => (
                    <Link href={people.link} key={i}>
                        <IconText icon={people.icon} iconColor={path === people.link ? '#fde68a' : undefined}>
                            <Heading size="h3" styles={path === people.link ? {color: `text-yellow-200`} : undefined}>
                                {people.name}
                            </Heading>
                        </IconText>
                    </Link>
                  ))}
                </div>
              </section>
              <section className="flex flex-col gap-3">
                <Text size="sm" styles={{weight: 'font-thin'}}>
                  General
                </Text>
                <div className="flex flex-col gap-4 justify-start items-start">
                  {generalLinks.map((general, i) => (
                    <Link href={general.link} key={i}>
                        <IconText icon={general.icon} iconColor={path === general.link ? '#fde68a' : undefined}>
                            <Heading size="h3" styles={path === general.link ? {color: `text-yellow-200`} : undefined}>
                                {general.name}
                            </Heading>
                        </IconText>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
            <Separator />
            <div className="py-10 flex flex-col gap-6">
              <Text size="sm">
                Welcome back,
              </Text>
              <div className="flex justify-start items-center gap-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.profilePicture} alt={`${user.userName} profile picture`} />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <Text size="md" styles={{weight: "font-medium"}}>
                    {user.userName}
                  </Text>
                  <Text size="sm" styles={{weight: "font-light", color: "text-gray-300"}}>
                    {user.email}
                  </Text>
                </div>
              </div>
            </div>
          </nav>
    )
}