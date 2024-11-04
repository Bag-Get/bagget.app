import { LINKS } from "@/data/types"

// Navbar Links

export const operationLinks: LINKS[] = [
    {
        name: "Dashboard",
        icon: "LayoutGrid",
        link: "/"
    },
    {
        name: "Reports",
        icon: "ChartColumnIncreasing",
        link: "/reports"
    },
    {
        name: "Distributions",
        icon: "Package",
        link: "/distributions"
    },
    {
        name: "Pantry Profile",
        icon: "Store",
        link: "/pantry-profile"
    }
]

export const peopleLinks: LINKS[] = [
    {
        name: "Clients",
        icon: "Users",
        link: "/clients"
    },
    {
        name: "Volunteers",
        icon: "HandHeart",
        link: "/volunteer"
    },
    {
        name: "Staff",
        icon: "ShieldCheck",
        link: "/staff"
    }
]

export const generalLinks: LINKS[] = [
    {
        name: "Settings",
        icon: "Settings",
        link: "/settings"
    },
    {
        name: "Accessibility",
        icon: "PersonStanding",
        link: "/accessibility"
    }
]

// Quick Action Links

export const quickActionLinks: LINKS[] = [
    {
        name: "Upcoming Distribution",
        icon: "CalendarDays",
        link: "/"
    },
    {
        name: "Create Client",
        icon: "CirclePlus",
        link: "/"
    },
    {
        name: "Volunteer Shifts",
        icon: "CalendarDays",
        link: "/"
    },
    {
        name: "Send Notification",
        icon: "Send",
        link: "/"
    },
]