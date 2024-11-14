// Icons

export type ICON_NAME = 'LayoutGrid' | 
                        'ChartColumnIncreasing' | 
                        'Package' | 
                        'Store' | 
                        'Users' | 
                        'HandHeart' | 
                        'ShieldCheck' | 
                        'Settings' | 
                        'PersonStanding' | 
                        'Search' |
                        'Bell' |
                        'CalendarDays' |
                        'CirclePlus' |
                        'Send' |
                        'HeartHandshake' |
                        'CircleArrowRight' |
                        'Repeat2' |
                        'MapPin' |
                        'Clock' |
                        'CircleCheck' |
                        'Footprints' |
                        'Car' |
                        'Warehouse' |
                        'Sparkles'

export type ALIGNMENT = 'left' | 
                        'right'

export type BUTTON_STYLES = 'default' |
                            'alt'

export type ICON_SIZE = 'xl' |
                        'lg' | 
                        'md'

export interface LINKS {
    name: string;
    icon: ICON_NAME;
    link: string;
}

// Typography

export type HEADING_SIZE = 'h1' | 
                           'h2' | 
                           'h3'

export type FONT_SIZE = 'lg' | 
                        'md' | 
                        'sm'

export interface STYLES {
    weight?:  'font-thin' |
              'font-extralight' |
              'font-light' | 
              'font-normal' | 
              'font-medium' | 
              'font-semibold' | 
              'font-bold' | 
              'font-extrabold',

    style?: 'italic';

    color?: 'text-gray-50' | 
            'text-gray-300' |
            'text-gray-300 text-opacity-50' |
            'text-gray-800' |
            'text-gray-950' |
            'text-yellow-200' |
            'text-lime-100'
}

// Preview

export interface IMPACT_PREVIEW {
    name: string;
    icon: ICON_NAME;
    num: number;
    // TODO: make date an actual DATE and calculate the time since this date
    date: number;
}

export type ALERT_TYPE = 'Client Account Merged' |
                         'Create Client' |
                         'New Volunteer' |
                         'Client Account Updated' |
                         'Volunteer Canceled' |
                         'Distribution Approaching' |
                         'Reports Generated' |
                         'Reports Updated' |
                         'Pantry Profile Updated' |
                         'Distribution Created' |
                         'Distribution Updated' 


export interface ALERT_PREVIEW {
    title: ALERT_TYPE;
    icon: ICON_NAME;
    preview: string;
    link: string;
    // TODO: make date an actual DATE and calculate the time since this date
    date: string;
}

// Distribution 
export type DISTRIBUTION_TYPE = "Mobile" | "Bank" | "Pop-Up" | "Pantry"

export type DISTRIBUTION_TYPE_ICONS = {
    [NAME in DISTRIBUTION_TYPE]: ICON_NAME;
};

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