"use client"

import Link from 'next/link'
import { Heading, Text } from "@/components/ui/typography"
import { IconButton, Icons } from "@/components/ui/icons"
import { quickActionLinks } from "@/data/links";
import { Card, CardContent, CardFooter, ImpactCard } from '@/components/ui/card';
import { dashboardPreview, alertsPreview } from "@/data/previewData"
import { CTA } from '@/components/ui/button';
import { ALERT_PREVIEW } from '@/data/types';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Home() {
  
  return (
    <main className="grid grid-cols-2">
      <section className="bg-sky-100 col-span-2 px-10 py-8 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Quick Actions
        </Heading>
        <QuickActions />
      </section>
      <section className="px-10 py-8 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Recent Activities
        </Heading>
        <ImpactCard impactMetrics={dashboardPreview}/>
        <RecentAlerts />
      </section>
      <section className="px-10 py-8 flex flex-col gap-4">
        <Heading styles={{color: "text-gray-950"}}>
          Upcoming
        </Heading>
        <UpcomingCalendar />
      </section>
    </main>
  );
}

// Recent Activities

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

function RecentAlerts() {
  return (
    <div>
      <Heading size='h2' styles={{color: "text-gray-800", weight: "font-medium"}}>
        Recent Alerts
      </Heading>
      <Card className="min-h-[200px] my-2">
        <CardContent className='my-5 max-h-[160px] overflow-y-scroll'>
          <div className='flex flex-col gap-3'>
            {alertsPreview.map((alert, i) => (
              <AlertCard alertInfo={alert} key={i}/>
            ))}
          </div>
        </CardContent>
        <CardFooter>
            <CTA redirect="/">
              <Text size='lg' styles={{weight: 'font-medium', color: 'text-lime-100'}}>
                View All Recent Activities
              </Text>
            </CTA>
        </CardFooter>
      </Card>
    </div>
    
  )
}

function AlertCard({alertInfo}: {alertInfo: ALERT_PREVIEW}) {
  return (
    <Link href={alertInfo.link} className='p-5 flex justify-between items-center bg-blue-200 rounded-2xl'>
      <div className='flex gap-3'>
        <Icons name={alertInfo.icon} size='xl' color='#030712'/>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <Heading size="h2" styles={{weight: "font-semibold", color: 'text-gray-950'}}>
              {alertInfo.title}
            </Heading>
            <Text size='sm' styles={{color: "text-gray-800"}}>
              {alertInfo.date}
            </Text>
          </div>
          <Text size='md' styles={{color: "text-gray-800"}}>
            {alertInfo.preview}
          </Text>
        </div>
      </div>
      <Icons name='CircleArrowRight' size='xl' color="#030712"/>
    </Link>
  )
}

// Upcoming

function UpcomingCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return(
    <>
      <div className='flex items-center gap-4'>
        <Heading size='h2' styles={{color: "text-gray-800", weight: "font-medium"}}>
          Your Upcoming
        </Heading>
        <SelectCalendar />
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        classNames={{
          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          day_disabled: "opacity-50 hover:opacity-50",
          day_outside: "opacity-50 hover:opacity-50",
          day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          cell: "h-9 w-9 text-center text-sm lg:text-xl relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          head_cell: "text-muted-foreground rounded-md w-9 font-normal text-sm",
          head_row: "flex justify-between w-full mt-6",
          table: "w-full border-collapse space-y-1",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-md lg:text-xl font-medium ",
          button: "rounded-lg ",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 lg:h-9 lg:w-9 bg-transparent p-0 opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-0",
          nav_button_next: "absolute right-0",
          row: "flex mt-2 lg:mt-6 justify-between",
          tbody: "flex flex-col justify-between",
          root: "w-full",
          month: "w-full p-5",
        }}
      />
    </>
  )
}

function SelectCalendar() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Entire Calendar" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">Entire Calendar</SelectItem>
        <SelectItem value="Distributions">Distributions</SelectItem>
        <SelectItem value="Shifts">Shifts</SelectItem>
      </SelectContent>
    </Select>

  )
}