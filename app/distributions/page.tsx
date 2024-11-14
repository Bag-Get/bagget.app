import React from "react";
import { distributionTypeIcons, distributions } from "@/data/distributionData"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { IconText } from "@/components/ui/icons";
import { CTA } from "@/components/ui/button";
import { DISTRIBUTION_TYPE } from "@/data/types";

export default function Distributions() {

    return (
        <div className="px-10 py-8">
            distributions
            <DistributionCard />
        </div>
    );
}


function DistributionCard() {

    function DistributionType(input: DISTRIBUTION_TYPE) {
        return distributionTypeIcons[input]
    }




    return (
        <div>
            {distributions.map((distribution, i) => (
                <Card className="bg-gradient-to-r from-emerald-950 to-green-900" key={i}>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col gap-5">
                                {distribution.isReoccurring && 
                                    <div className="bg-blue-200 w-fit py-1 px-3 rounded-3xl">
                                        <IconText icon="Repeat2" iconColor="#030712">
                                            <Text size='sm' styles={{weight: 'font-medium', color: 'text-gray-950'}}>
                                                Reoccurring Distribution
                                            </Text>
                                        </IconText>
                                    </div>
                                }
                                <div className="flex gap-5 items-center">
                                    <DateFormat date={distribution.date} isHeading/>
                                    <Heading size="h2" styles={{weight: "font-semibold"}}>
                                        {distribution.pantry}
                                    </Heading>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-10 w-8/12">
                                <IconText icon="MapPin">
                                    <Text size='lg' styles={{weight: 'font-medium'}}>
                                    {distribution.address}
                                    </Text>
                                </IconText>
                                <IconText icon={DistributionType(distribution.type)}>
                                    <Text size='lg' styles={{weight: 'font-medium'}}>
                                    {distribution.type}
                                    </Text>
                                </IconText>
                                <IconText icon="Bell">
                                    <div className="flex gap-2">
                                        <Text size='lg' styles={{weight: 'font-medium'}}>
                                            {distribution.startTime}
                                        </Text>
                                        <Text size='lg' styles={{weight: 'font-medium'}}>
                                            to {' '}
                                        </Text>
                                        <Text size='lg' styles={{weight: 'font-medium'}}>
                                            {distribution.endTime}
                                        </Text>
                                    </div>
                                </IconText>
                            </div>
                            <div className="flex gap-10 w-8/12">
                                <IconText icon="HandHeart">
                                    <Text size='lg' styles={{weight: 'font-medium'}}>
                                    {distribution.volunteers} volunteers
                                    </Text>
                                </IconText>
                                <IconText icon="CircleCheck">
                                    <Text size='lg' styles={{weight: 'font-medium'}}>
                                    {distribution.confirmedVisits} confirmed neighbors
                                    </Text>
                                </IconText>
                                <IconText icon="Footprints">
                                    <Text size='lg' styles={{weight: 'font-medium'}}>
                                    {distribution.walkInSlots} available walk-in slots
                                    </Text>
                                </IconText>
                            </div>
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

function DateFormat({date, isHeading=false}: {date: Date, isHeading?: boolean}) {

    const day = `${date.getMonth()} / ${date.getDay()} / ${date.getFullYear()}
`
    return (
        <div>
            {isHeading ? 
                <Heading size="h2" styles={{weight: "font-semibold"}}>
                    {day}
                </Heading> :
                <Text size='lg' styles={{weight: 'font-medium'}}>
                    {day}
                </Text>
            }
        </div>
    )
}