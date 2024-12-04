import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, CalendarDays, Car, ChartColumnIncreasing, CircleArrowLeft, CircleArrowRight, CircleCheck, CirclePlus, Clock, Footprints, HandHeart, HeartHandshake, House, LayoutGrid, MapPin, Package, Pencil, PersonStanding, Repeat2, Search, Send, Settings, ShieldCheck, SlidersHorizontal, Sparkles, Store, Users, Warehouse } from "lucide-react";
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
    let iconSize = undefined

    if (size === 'xl') {
        iconSize = { width: '48px', height: '48px' }
    } else if (size === 'lg') {
        iconSize = { width: '24px', height: '24px' }
    } else if (size === 'md') {
        iconSize = { width: '18px', height: '18px' }
    }

    // Nav Icons
    // dashboard
    if (name === 'LayoutGrid') {
        return (
            <LayoutGrid color={color} style={iconSize}/>
        )
    // reports
    } else if (name === 'ChartColumnIncreasing') {
        return (
            <ChartColumnIncreasing color={color} style={iconSize}/>
        )
    // distributions
    } else if (name === 'Package') {
        return (
            <Package color={color} style={iconSize}/>
        )
    // pantry profile
    } else if (name === 'Store') {
        return (
            <Store color={color} style={iconSize}/>
        )
    // clients
    } else if (name === 'Users') {
        return (
            <Users color={color} style={iconSize}/>
        )
    // volunteers
    } else if (name === 'HandHeart') {
        return (
            <HandHeart color={color} style={iconSize}/>
        )
    // staff
    } else if (name === 'ShieldCheck') {
        return (
            <ShieldCheck color={color} style={iconSize}/>
        )
    // settings
    } else if (name === 'Settings') {
        return (
            <Settings color={color} style={iconSize}/>
        )
    // accessibility a11y
    } else if (name === 'PersonStanding') {
        return (
            <PersonStanding color={color} style={iconSize}/>
        )
    // search
    } else if (name === 'Search') {
        return (
            <Search color={color} style={iconSize}/>
        )
    // notification
    } else if (name === 'Bell') {
        return (
            <Bell color={color} style={iconSize}/>
        )
    // Calendar
    } else if (name === 'CalendarDays') {
        return (
            <CalendarDays color={color} style={iconSize}/>
        )
    // Arrow send
    } else if (name === 'Send') {
        return (
            <Send color={color} style={iconSize}/>
        )
    // plus
    } else if (name === 'CirclePlus') {
        return (
            <CirclePlus color={color} style={iconSize}/>
        )
    // heart hand
    } else if (name === 'HeartHandshake') {
        return (
            <HeartHandshake color={color} style={iconSize}/>
        )
    // arrow circle
    } else if (name === 'CircleArrowRight') {
        return (
            <CircleArrowRight color={color} style={iconSize}/>
        )
    // arrow circle
    } else if (name === 'Repeat2') {
        return (
            <Repeat2 color={color} style={iconSize}/>
        )
    // location
    } else if (name === 'MapPin') {
        return (
            <MapPin color={color} style={iconSize}/>
        )
    // time
    } else if (name === 'Clock') {
        return (
            <Clock color={color} style={iconSize}/>
        )
    // confirm
    } else if (name === 'CircleCheck') {
        return (
            <CircleCheck color={color} style={iconSize}/>
        )
    // walk-in
    } else if (name === 'Footprints') {
        return (
            <Footprints color={color} style={iconSize}/>
        )
    // car
    } else if (name === 'Car') {
        return (
            <Car color={color} style={iconSize}/>
        )
    // bank
    } else if (name === 'Warehouse') {
        return (
            <Warehouse color={color} style={iconSize}/>
        )
    // pop up special
    } else if (name === 'Sparkles') {
        return (
            <Sparkles color={color} style={iconSize}/>
        )
    // Filter
    } else if (name === 'SlidersHorizontal') {
        return (
            <SlidersHorizontal color={color} style={iconSize}/>
        )
    // Household
    } else if (name === 'House') {
        return (
            <House color={color} style={iconSize}/>
        )
    // circle left
    } else if (name === 'CircleArrowLeft') {
        return (
            <CircleArrowLeft color={color} style={iconSize}/>
        )
    // edit pencil
    } else if (name === 'Pencil') {
        return (
            <Pencil color={color} style={iconSize}/>
        )
    // 
    }
    

}