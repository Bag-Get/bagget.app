import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, CalendarDays, ChartColumnIncreasing, HandHeart, LayoutGrid, Package, PersonStanding, Search, Settings, ShieldCheck, Store, Users } from "lucide-react";
import { ALIGNMENT, BUTTON_STYLES, ICON_NAME, ICON_SIZE } from "@/data/types"

export function IconText({align="left", size, icon, iconColor, children}: {size?: ICON_SIZE; align?: ALIGNMENT; icon: ICON_NAME; iconColor?: string; children: React.ReactNode}) {
    return (
        <div className={`flex gap-2 justify-center items-center ${align === 'right' && 'flex-row-reverse' }`}>
            <Icons name={icon} size={size} color={iconColor}/>
            {children}
        </div>
    )
}

export function IconButton({style="default", align="left", size, icon, iconColor, children}: {style?: BUTTON_STYLES; size?: ICON_SIZE; align?: ALIGNMENT; icon: ICON_NAME; iconColor?: string; children: React.ReactNode}) {
    
    const defaultBtn = "bg-lime-100 hover:bg-emerald-100"
    const altBtn = "bg-gradient-to-r from-emerald-950 to-green-900 hover:from-emerald-800 hover:to-green-800"

    return (
        <Button className={`px-10 py-7 w-full ${style === "default" ? defaultBtn: altBtn}`}>
            <IconText align={align} size={size} icon={icon} iconColor={iconColor}>{children}</IconText>
        </Button>
    )
}

export function Icons({name, size, color="#f9fafb"}: {name: ICON_NAME; size?: ICON_SIZE; color?: string}) {

    // TODO: there's gotta be a better way to write this
    const iconSize = size === "lg" ? { width: '24px', height: '24px' } : size === "md" ? { width: '18px', height: '18px' } : undefined


    if (name === 'LayoutGrid') {
        return (
            <LayoutGrid color={color} style={iconSize}/>
        )
    } else if (name === 'ChartColumnIncreasing') {
        return (
            <ChartColumnIncreasing color={color} style={iconSize}/>
        )
    } else if (name === 'Package') {
        return (
            <Package color={color} style={iconSize}/>
        )
    } else if (name === 'Store') {
        return (
            <Store color={color} style={iconSize}/>
        )
    } else if (name === 'Users') {
        return (
            <Users color={color} style={iconSize}/>
        )
    } else if (name === 'HandHeart') {
        return (
            <HandHeart color={color} style={iconSize}/>
        )
    } else if (name === 'ShieldCheck') {
        return (
            <ShieldCheck color={color} style={iconSize}/>
        )
    } else if (name === 'Settings') {
        return (
            <Settings color={color} style={iconSize}/>
        )
    } else if (name === 'PersonStanding') {
        return (
            <PersonStanding color={color} style={iconSize}/>
        )
    } else if (name === 'Search') {
        return (
            <Search color={color} style={iconSize}/>
        )
    } else if (name === 'Bell') {
        return (
            <Bell color={color} style={iconSize}/>
        )
    } else if (name === 'CalendarDays') {
        return (
            <CalendarDays color={color} style={iconSize}/>
        )
    }
}