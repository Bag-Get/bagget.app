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
                        'CalendarDays'

export type ALIGNMENT = 'left' | 
                        'right'

export type BUTTON_STYLES = 'default' |
                            'alt'

export type ICON_SIZE = 'lg' | 
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
            'text-gray-950' |
            'text-yellow-200'
}