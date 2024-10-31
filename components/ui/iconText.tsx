import React from "react";
import { ChartColumnIncreasing, HandHeart, LayoutGrid, Package, PersonStanding, Settings, ShieldCheck, Store, Users } from "lucide-react";
import { ALIGNMENT, ICON_NAME } from "@/data/types"

export function IconText({align="left", icon, iconColor, children}: {align?: ALIGNMENT; icon: ICON_NAME; iconColor?: string; children: React.ReactNode}) {
    return (
        <div className={`flex gap-2 justify-center items-center ${align === 'right' && 'flex-row-reverse' }`}>
            <Icons name={icon} color={iconColor}/>
            {children}
        </div>
    )
}


export function Icons({name, color="#f9fafb"}: {name: ICON_NAME; color?: string}) {
    if (name === 'LayoutGrid') {
        return (
            <LayoutGrid color={color}/>
        )
    } else if (name === 'ChartColumnIncreasing') {
        return (
            <ChartColumnIncreasing color={color}/>
        )
    } else if (name === 'Package') {
        return (
            <Package color={color}/>
        )
    } else if (name === 'Store') {
        return (
            <Store color={color}/>
        )
    } else if (name === 'Users') {
        return (
            <Users color={color}/>
        )
    } else if (name === 'HandHeart') {
        return (
            <HandHeart color={color}/>
        )
    } else if (name === 'ShieldCheck') {
        return (
            <ShieldCheck color={color}/>
        )
    } else if (name === 'Settings') {
        return (
            <Settings color={color}/>
        )
    } else if (name === 'PersonStanding') {
        return (
            <PersonStanding color={color}/>
        )
    }
}