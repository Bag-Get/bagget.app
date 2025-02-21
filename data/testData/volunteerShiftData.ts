import { VOLUNTEER_SHIFT } from "../types";

export const volunteerShiftData: VOLUNTEER_SHIFT[] = [
    {
        id: "0",
        volunteerID: "1",
        appointmentID: "1",
        name: "Alan Cortez",
        check_in: new Date(),
        status: 'arrived'
    },
    {
        id: "1",
        volunteerID: "2",
        appointmentID: "2",
        name: "Rohan Kunchala",
        check_in: new Date(),
        status: 'arrived'
    },
    {
        id: "2",
        volunteerID: "3",
        appointmentID: "3",
        name: "Jeff Greenberg",
        check_in: new Date(),
        check_out: new Date(),
        status: 'checked-out'
    }
]