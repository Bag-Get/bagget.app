import * as React from "react"

import { cn } from "@/lib/utils"
import { Heading, Text } from "./typography"
import { IMPACT_PREVIEW } from "@/data/types"
import { Icons } from "./icons"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"


function ImpactCard({impactMetrics, showDate=true}: {impactMetrics: IMPACT_PREVIEW[], showDate?: boolean}) {
  return(
    <div>
      <Heading size='h2' styles={{color: "text-gray-800", weight: "font-medium"}}>
        Your Impact
      </Heading>
      <div className='flex my-2 gap-5'>
        {impactMetrics.map((preview, i) => (
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
                  {showDate && 
                    <Text size='md' styles={{color: "text-gray-800"}}>
                      Since {preview.date} days
                    </Text>
                  }
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



export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, ImpactCard }
