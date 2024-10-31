import { Separator } from "@/components/ui/separator";
import { Heading, Text } from "@/components/ui/typography"
import { IconText } from "@/components/ui/iconText"
import { operationLinks, peopleLinks, generalLinks } from "@/data/navLinks"

export default function Home() {
  return (
    <div className="w-screen grid grid-cols-[400px_1fr] grid-rows-[75px_1fr]">
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
            <Heading size="h3" styles={{weight: 'font-thin'}}>
              Operations
            </Heading>
            <div className="flex flex-col gap-4 justify-start items-start">
              {operationLinks.map((operations, i) => (
                <IconText icon={operations.icon} key={i}>
                  <Heading size="h2" >
                    {operations.name}
                  </Heading>
                </IconText>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-3">
            <Heading size="h3" styles={{weight: 'font-thin'}}>
              Your People
            </Heading>
            <div className="flex flex-col gap-4 justify-start items-start">
              {peopleLinks.map((people, i) => (
                <IconText icon={people.icon} key={i}>
                  <Heading size="h2" >
                    {people.name}
                  </Heading>
                </IconText>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-3">
            <Heading size="h3" styles={{weight: 'font-thin'}}>
              General
            </Heading>
            <div className="flex flex-col gap-4 justify-start items-start">
              {generalLinks.map((general, i) => (
                <IconText icon={general.icon} key={i}>
                  <Heading size="h2" >
                    {general.name}
                  </Heading>
                </IconText>
              ))}
            </div>
          </section>
        </div>
        <Separator />
      </nav>
      <div className="bg-emerald-900">
        <p>search bar</p>
      </div>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <p>b!</p>
      </main>
    </div>
  );
}
