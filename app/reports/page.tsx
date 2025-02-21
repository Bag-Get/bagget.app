import React from "react";
import { Heading } from "@/components/ui/typography"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImpactCard } from "@/components/ui/card";
import { reportsPreview } from "@/data/testData/previewData";

export default function Reports() {

    return (
      <main className="grid grid-cols-2">
      <section className="px-10 py-8 flex flex-col gap-4 w-full">
        <Heading styles={{color: "text-gray-950"}}>
          Your Impact
        </Heading>
        <div className="flex items-center gap-4">
          <Heading size='h2' styles={{color: "text-gray-800", weight: "font-medium"}}>
            In the past 
          </Heading>
          <SelectTime />
        </div>
        <ImpactCard impactMetrics={reportsPreview} showDate={false}/>
        
      </section>
    </main>
    );
  }
  
  function SelectTime() {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="7 days" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Week">7 Days</SelectItem>
          <SelectItem value="Month">Month</SelectItem>
          <SelectItem value="3 Months">3 Months</SelectItem>
          <SelectItem value="6 Months">6 Months</SelectItem>
          <SelectItem value="9 Months">9 Months</SelectItem>
          <SelectItem value="Year">Year</SelectItem>
        </SelectContent>
      </Select>
  
    )
  }