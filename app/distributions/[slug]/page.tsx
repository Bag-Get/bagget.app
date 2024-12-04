import React from "react"
import { distributionTypeIcons, distributions } from "@/data/distributionData"
import { DISTRIBUTION, DISTRIBUTION_TYPE } from "@/data/types"
import { Card, CardContent } from "@/components/ui/card"
import { IconText } from "@/components/ui/icons"
import { Text } from "@/components/ui/typography"

export default async function Distribution({params}: {params: Promise<{ slug: string }>}) {
    const distributionID = (await params).slug

    const distribution = await distributions.filter((dist) => dist.id === distributionID)[0]
    
    return (
        <section className="h-[calc(100vh-8rem-96px)] overflow-y-scroll flex flex-col px-10 py-8 gap-4 relative">
            <DistributionQuickInfoCard dist={distribution}/>
        
        </section>
    )
}




function DistributionQuickInfoCard({dist}: {dist: DISTRIBUTION}) {
    function DistributionType(input: DISTRIBUTION_TYPE) {
        return distributionTypeIcons[input]
    }

    return(
        <Card className="bg-gradient-to-r from-emerald-950 to-green-900 shadow-lg">         
            <CardContent className="p-6">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 w-10/12 flex-wrap">
                        <IconText icon="MapPin" iconColor="#f9fafb">
                            <Text size='sm' styles={{weight: 'font-medium'}}>
                            {dist.address}
                            </Text>
                        </IconText>
                        <IconText icon={DistributionType(dist.type)} iconColor="#f9fafb">
                            <Text size='sm' styles={{weight: 'font-medium'}}>
                            {dist.type}
                            </Text>
                        </IconText>
                        <IconText icon="Bell" iconColor="#f9fafb">
                            <div className="flex gap-2 items-center">
                                <div className="bg-blue-200 w-fit py-1 px-3 rounded-3xl">
                                    <Text size='sm' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                        {dist.startTime}
                                    </Text>
                                </div>
                                    <Text size='sm' styles={{weight: 'font-medium'}}>
                                        to {' '}
                                    </Text>
                                <div className="bg-blue-200 w-fit py-1 px-3 rounded-3xl">
                                    <Text size='sm' styles={{weight: 'font-medium', color: "text-gray-950"}}>
                                        {dist.endTime}
                                    </Text>
                                </div>
                                
                            </div>
                        </IconText>
                        <IconText icon="HandHeart" iconColor="#f9fafb">
                            <Text size='sm' styles={{weight: 'font-medium'}}>
                            {dist.volunteers} volunteers
                            </Text>
                        </IconText>
                        <IconText icon="HandHeart" iconColor="#f9fafb">
                            <Text size='sm' styles={{weight: 'font-medium'}}>
                            {dist.confirmedVisits} confirmed neighbors
                            </Text>
                        </IconText>
                        <IconText icon="Footprints" iconColor="#f9fafb">
                            <Text size='sm' styles={{weight: 'font-medium'}}>
                            {dist.walkInSlots} available walk-in slots
                            </Text>
                        </IconText>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}