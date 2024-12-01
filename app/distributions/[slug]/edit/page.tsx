import React from "react"

export default async function EditDistribution({params}: {params: Promise<{ slug: string }>}) {
    const distribution = (await params).slug
    
    return (
        <p>EDIT {distribution}</p>
    )
}