import { DISTRIBUTION, DISTRIBUTION_TYPE_ICONS } from "./types";

export const distributionTypeIcons: DISTRIBUTION_TYPE_ICONS = {
    Mobile: "Car",
    Bank: "Warehouse",
    "Pop-Up": "Sparkles",
    Pantry: "Store"
}

export const distributions: DISTRIBUTION[] = [
    {
        pantry: "Pantry A",
        type: "Mobile",
        isReoccurring: true,
        address: "1234 Test St\, CA\, 92701",
        date: new Date(),
        startTime: "10:00am",
        endTime: "1:00pm",
        volunteers: 10,
        confirmedVisits: 40,
        walkInSlots: 10
    },
    {
        pantry: "Pantry B",
        type: "Pantry",
        isReoccurring: false,
        address: "1234 Test St\, CA\, 92701",
        date: new Date(),
        startTime: "10:00am",
        endTime: "1:00pm",
        volunteers: 3,
        confirmedVisits: 23,
        walkInSlots: 20
    }
]