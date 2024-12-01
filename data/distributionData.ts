import { DISTRIBUTION, DISTRIBUTION_TYPE_ICONS } from "./types";

export const distributionTypeIcons: DISTRIBUTION_TYPE_ICONS = {
    Mobile: "Car",
    Bank: "Warehouse",
    "Pop-Up": "Sparkles",
    Pantry: "Store"
}



export const distributions: DISTRIBUTION[] = [
    {
        id: "0",
        pantry: "Pantry A",
        type: "Mobile",
        isReoccurring: true,
        address: "1234 Test St\, CA\, 92701",
        date: new Date(),
        startTime: "10:00am",
        endTime: "1:00pm",
        volunteers: 10,
        confirmedVisits: 40,
        walkInSlots: 10,
        peopleServed: 40,
        householdServed: 20,
    },
    {
        id: "1",
        pantry: "Pantry B",
        type: "Pantry",
        isReoccurring: false,
        address: "1234 Test St\, CA\, 92701",
        date: new Date(2024, 1, 15),
        startTime: "10:00am",
        endTime: "1:00pm",
        volunteers: 3,
        confirmedVisits: 23,
        walkInSlots: 20,
        peopleServed: 40,
        householdServed: 20,
    },
    {
        id: "2",
        pantry: "Pantry C",
        type: "Pop-Up",
        isReoccurring: true,
        address: "1234 Test St\, CA\, 92701",
        date: new Date(2024, 4, 15),
        startTime: "8:00am",
        endTime: "12:00pm",
        volunteers: 7,
        confirmedVisits: 26,
        walkInSlots: 14,
        peopleServed: 40,
        householdServed: 20,
    }
]