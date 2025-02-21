import { ColumnDef } from "@tanstack/react-table"
import { CLIENT_APPOINTMENT, VOLUNTEER_SHIFT } from "./types"

export const client_appointment_column: ColumnDef<CLIENT_APPOINTMENT>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "time",
        header: "Time",
    },
    {
        accessorKey: "householdSize",
        header: "Household Size",
    },
    {
        accessorKey: "additionalPickup",
        header: "Additional Pickups",
    },
]

export const volunteer_shift_column: ColumnDef<VOLUNTEER_SHIFT>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "check_in",
        header: "Check In",
    },
    {
        accessorKey: "check_out",
        header: "Check Out",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]

