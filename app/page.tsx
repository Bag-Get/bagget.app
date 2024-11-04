import Link from 'next/link'
import { Heading, Text } from "@/components/ui/typography"
import { IconButton, Icons } from "@/components/ui/icons"
import { quickActionLinks } from "@/data/links";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { impactPreview } from "@/data/reports"
import { Button } from '@/components/ui/button';

export default function Home() {
  
  return (
    <div className="grid grid-cols-2">
      <section className="bg-sky-100 col-span-2 p-10 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Quick Actions
        </Heading>
        <QuickActions />
      </section>
      <section className="px-10 py-8 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Recent Activities
        </Heading>
        <YourImpact />
        <RecentAlerts />
      </section>
      <section className="px-10 py-8 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Upcoming
        </Heading>
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

function YourImpact() {
  return(
    <div>
      <Heading size='h2' styles={{color: "text-gray-800", weight: "font-medium"}}>
        Your Impact
      </Heading>
      <div className='flex my-5 gap-5'>
        {impactPreview.map((preview, i) => (
          <Card className="w-[350px] bg-blue-200" key={i}>
            <CardHeader>
              <CardTitle>{preview.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex justify-between items-center '>
                <div className='flex flex-col'>
                  <Heading styles={{color: "text-gray-950"}}>
                    {preview.num}
                  </Heading>
                  <Text size='md' styles={{color: "text-gray-800"}}>
                    Since {preview.date} days
                  </Text>
                </div>
                <Icons name={preview.icon} color="#1f2937" size='xl'/>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function RecentAlerts() {
  return (
    <div>
      <Heading size='h2' styles={{color: "text-gray-800", weight: "font-medium"}}>
        Recent Alerts
      </Heading>
      <Card className="min-h-[200px] my-5">
        <CardContent>
          <div className='flex flex-col'>
            
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <Button className="w-max px-10 py-7 bg-gradient-to-r from-emerald-950 to-green-900 hover:from-emerald-800 hover:to-green-800">
              Pluh
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
    
  )
}