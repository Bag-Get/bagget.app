import Link from 'next/link'
import { Heading, Text } from "@/components/ui/typography"
import { IconButton, Icons } from "@/components/ui/icons"
import { quickActionLinks } from "@/data/links";

export default function Home() {
  
  return (
    <div className="grid grid-cols-2">
      <section className="bg-sky-100 col-span-2 p-10 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Quick Actions
        </Heading>
        <QuickActions />
      </section>
      <section>
        recent activities
      </section>
      <section>
        upcoming
      </section>
    </div>
  );
}

function QuickActions() {
  return(
    <div className="flex gap-6">
      {quickActionLinks.map((action, i) => {
        if (i === 0) {
          return (
            <Link href={action.link} key={i}>
              <IconButton icon={action.icon} style="alt" size="lg" align="right">
                <Heading size="h2" styles={{weight: "font-semibold"}}>
                  {action.name}
                </Heading>
              </IconButton>
            </Link>
          )
        } else {
          return (
            <Link href={action.link} key={i}>
              <IconButton icon={action.icon} size="lg" align="right" iconColor="#030712">
                <Heading size="h2" styles={{color: "text-gray-950", weight: "font-semibold"}}>
                  {action.name}
                </Heading>
              </IconButton>
            </Link>
          )
        }
      })}
    </div>
  )
}

