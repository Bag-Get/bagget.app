import React from "react";
import { FONT_SIZE, HEADING_SIZE, STYLES } from "@/data/types"

export function Heading({size = 'h1', styles, children}: {size?: HEADING_SIZE; styles?: STYLES; children: React.ReactNode}) {
    

    if (size === 'h1') {
        return (
            <h1
                className={`text-4xl font-bold text-gray-50 ${styles?.weight} ${styles?.style}`}
            >
                {children}
            </h1>
        )
    } else if (size === 'h2') {
        return (
            <h2
                className={`text-xl text-gray-50 ${styles?.weight} ${styles?.style}`}
            >
                {children}
            </h2>
        )
    } else if (size === 'h3') {
        return (
            <h3
                className={`text-lg text-gray-50 ${styles?.weight} ${styles?.style}`}
            >
                {children}
            </h3>
        )
    }
}

export function Text({size = 'sm', styles, children}: {size?: FONT_SIZE; styles?: STYLES; children: React.ReactNode}) {
    if (size === 'lg') {
        return (
            <h1
                className={`text-lg font-normal text-gray-50 ${styles?.weight} ${styles?.style}`}
            >
                {children}
            </h1>
        )
    } else if (size === 'md') {
        return (
            <h2
                className={`text-md font-normal text-gray-50 ${styles?.weight} ${styles?.style}`}
            >
                {children}
            </h2>
        )
    } else if (size === 'sm') {
        return (
            <h3
                className={`text-sm font-light text-gray-50 ${styles?.weight} ${styles?.style}`}
            >
                {children}
            </h3>
        )
    }
}