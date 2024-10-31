// Icons

export type ICON_NAME = 'LayoutGrid' | 'ChartColumnIncreasing' | 'Package' | 'Store' | 'Users' | 'HandHeart' | 'ShieldCheck' | 'Settings' | 'PersonStanding'
export type ALIGNMENT = 'left' | 'right'

export interface LINKS {
    name: string;
    icon: ICON_NAME;
    link: string;
}

// Typography

export type HEADING_SIZE = 'h1' | 'h2' | 'h3'
export type FONT_SIZE = 'lg' | 'md' | 'sm'

export interface STYLES {
    weight?:  'font-thin' | 'font-extralight' |'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold',
    style?: 'italic'
}