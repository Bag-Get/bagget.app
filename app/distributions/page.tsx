import React from "react";
import { distributions } from "@/data/distributionData"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { IconText } from "@/components/ui/icons";
import { CTA } from "@/components/ui/button";

export default function Distributions() {

    return (
        <div className="px-10 py-8">
            distributions
            <DistributionCard />
        </div>
    );
}


function DistributionCard() {
    return (
        <div>
            {distributions.map((distribution, i) => (
                <Card className="bg-gradient-to-r from-emerald-950 to-green-900" key={i}>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col">
                                {distribution.isReoccurring && 
                                    <IconText icon="Bell">
                                        <Text size='lg' styles={{weight: 'font-medium', color: 'text-lime-100'}}>
                                            Reoccurring Distribution
                                        </Text>
                                    </IconText>
                                }
                                <div className="flex gap-5 items-center">
                                    <DateFormat date={distribution.date}/>
                                    <Heading size="h2" styles={{color: "text-gray-950", weight: "font-semibold"}}>
                                        {distribution.pantry}
                                    </Heading>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex">
                            <IconText icon="Bell">{distribution.address}</IconText>
                            <IconText icon="Bell">{distribution.type}</IconText>
                            <IconText icon="Bell">
                                <div>
                                    {distribution.startTime} to {' '} {distribution.endTime}
                                </div>
                            </IconText>
                            <IconText icon="Bell">{distribution.volunteers}</IconText>
                            <IconText icon="Bell">{distribution.confirmedVisits}</IconText>
                            <IconText icon="Bell">{distribution.walkInSlots}</IconText>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-5">
                            {/* TODO: update CTA to be a link & have alt styles */}
                            <CTA>
                                <Text size='lg' styles={{weight: 'font-medium', color: 'text-lime-100'}}>
                                    Details
                                </Text>
                            </CTA>
                            <CTA>
                                <Text size='lg' styles={{weight: 'font-medium', color: 'text-lime-100'}}>
                                    Send Alerts
                                </Text>
                            </CTA>
                            <CTA>
                                <Text size='lg' styles={{weight: 'font-medium', color: 'text-lime-100'}}>
                                    Edit
                                </Text>
                            </CTA>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

function DateFormat({date}: {date: Date}) {
    return (
        <div>
            {date.getMonth()} / {date.getDay()} / {date.getFullYear()}
        </div>
    )
}