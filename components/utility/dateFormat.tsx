import React from "react"
import { Heading, Text } from "../ui/typography";
import { FONT_SIZE, HEADING_SIZE } from "@/data/types";


export function DateFormat({date, isDark=false, isHeading=false, headingSize="h2", fontSize='lg'}: {date: Date; isHeading?: boolean; isDark?: boolean; headingSize?: HEADING_SIZE; fontSize?: FONT_SIZE}) {

    const day = `${date.getMonth()} / ${date.getDay()} / ${date.getFullYear()}`

    return (
        <div>
            {isHeading ? 
                <Heading size={headingSize} styles={isDark ? {weight: "font-semibold", color: "text-gray-950"} : {weight: "font-semibold"}}>
                    {day}
                </Heading> :
                <Text size={fontSize} styles={isDark ? {weight: 'font-medium', color: "text-gray-950"} : {weight: 'font-medium'}}>
                    {day}
                </Text>
            }
        </div>
    )
}