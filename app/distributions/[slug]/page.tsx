import React from "react"

export default async function Distribution({params}: {params: Promise<{ slug: string }>}) {
    const distribution = (await params).slug
    
    return (
        <p>{distribution}</p>
    )
}