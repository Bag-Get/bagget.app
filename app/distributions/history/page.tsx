import React from "react";
import { distributionTypeIcons, distributions } from "@/data/distributionData"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text } from "@/components/ui/typography";
import { IconText, Icons } from "@/components/ui/icons";
import { Button, CTA } from "@/components/ui/button";
import { DISTRIBUTION_TYPE } from "@/data/types";
import { Input } from "@/components/ui/input";
import { DateFormat } from "@/components/utility/dateFormat"

export default function DistributionHistory() {
    return(
        <section className="h-[calc(100vh-8rem-96px)] overflow-y-scroll flex flex-col px-10 py-8 gap-4 relative">
            <div className="w-96 flex gap-4">
              <Input type="search" placeholder="Find Distribution" />
              <Button type="submit" className="bg-lime-100 hover:bg-emerald-100"><Icons name="Search" color="#030712"/></Button>
              <Button type="submit" className="bg-lime-100 hover:bg-emerald-100"><Icons name="SlidersHorizontal" color="#030712"/></Button>
            </div>
            <DistributionCard />
            <div className="bg-gradient-to-t from-gray-50 to-transparent absolute h-10 w-[calc(100%-5rem)] bottom-[32px]" />
        </section>
    )
}


function DistributionCard() {

    function DistributionType(input: DISTRIBUTION_TYPE) {
        return distributionTypeIcons[input]
    }


    // TODO: sorting algorithm to resort the Distribution Information

    return (
        <div className="flex flex-col gap-4 overflow-y-scroll">
            {distributions.map((distribution, i) => (
                <Card className="shadow-lg" key={i}>
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
                                    <DateFormat date={distribution.date} isDark isHeading />
                                    <Heading size="h2" styles={{weight: 'font-semibold', color: "text-gray-950"}}>
                                        {distribution.pantry}
                                    </Heading>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-10 w-8/12">
                                <IconText icon="MapPin" iconColor={"#030712"}>
                                    <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                    {distribution.address}
                                    </Text>
                                </IconText>
                                <IconText icon={DistributionType(distribution.type)} iconColor={"#030712"}>
                                    <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                    {distribution.type}
                                    </Text>
                                </IconText>
                                <IconText icon="Bell" iconColor={"#030712"}>
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-blue-200 w-fit py-1 px-3 rounded-3xl">
                                            <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                                {distribution.startTime}
                                            </Text>
                                        </div>
                                            <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                                to {' '}
                                            </Text>
                                        <div className="bg-blue-200 w-fit py-1 px-3 rounded-3xl">
                                            <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                                {distribution.endTime}
                                            </Text>
                                        </div>
                                        
                                    </div>
                                </IconText>
                            </div>
                            <div className="flex gap-10">
                                <IconText icon="HandHeart" iconColor={"#030712"}>
                                    <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                    {distribution.volunteers} people volunteered
                                    </Text>
                                </IconText>
                                <IconText icon="Users" iconColor={"#030712"}>
                                    <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                    {distribution.peopleServed} people served
                                    </Text>
                                </IconText>
                                <IconText icon="House" iconColor={"#030712"}>
                                    <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                    {distribution.householdServed} households served
                                    </Text>
                                </IconText>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-5">
                            {/* TODO: update CTA to be a link & have alt styles */}
                            <CTA redirect={`/distributions/${distribution.id}`} style="d_b_dark">
                                <Text size='lg' styles={{weight: 'font-medium', color: 'text-lime-100'}}>
                                    Details
                                </Text>
                            </CTA>
                            <CTA redirect="/" style="light">
                                <Text size='lg' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                    Send Alerts
                                </Text>
                            </CTA>
                            <CTA redirect={`/distributions/${distribution.id}/edit`} style="light">
                                <Text size='lg' styles={{weight: 'font-medium', color: 'text-gray-950'}}>
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