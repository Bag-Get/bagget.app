
type DISTRIBUTION_TYPE = "Mobile" | "Bank" | "Pop-Up" | "Pantry"

export interface DISTRIBUTION {
    pantry: string;
    type: DISTRIBUTION_TYPE;
    isReoccurring: boolean;
    address: string;
    date: Date;
    startTime: string;
    endTime: string;
    volunteers: number;
    confirmedVisits: number;
    walkInSlots: number;
    // account for:
    // past visits
    // users
    // volunteers
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