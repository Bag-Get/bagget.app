import { Heading } from "@/components/ui/typography"
import { IconButton } from "@/components/ui/icons"

export default function Home() {
  
  return (
    <div className="grid grid-cols-2">
      <section className="bg-sky-100 col-span-2 p-10 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Quick Actions
        </Heading>
        <div className="flex gap-6">
          {/* TODO: add redirect links to this and use a map to loop through static buttons */}
          <IconButton icon="CalendarDays" style="alt" size="lg" align="right">
            <Heading size="h2" styles={{weight: "font-semibold"}}>
              Upcoming Distribution
            </Heading>
          </IconButton>
          <IconButton icon="CalendarDays" size="lg" align="right" iconColor="#030712">
            <Heading size="h2" styles={{color: "text-gray-950", weight: "font-semibold"}}>
              Upcoming Distribution
            </Heading>
          </IconButton>
        </div>
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
