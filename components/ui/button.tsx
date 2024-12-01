import * as React from "react"
import Link from 'next/link'
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { CTA_STYLE, CTA_STYLES } from "@/data/types"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


// CUSTOM BUTTON

export function CTA({style="w_b_dark", redirect, children}: {style?: CTA_STYLES; redirect: string; children: React.ReactNode}) {

  const styles: CTA_STYLE = {
    "w_b_dark": "w-full px-10 py-3 bg-gradient-to-r from-emerald-950 to-green-900 hover:from-emerald-800 hover:to-green-800 rounded-2xl",
    "d_b_dark": "w-full px-10 py-3 bg-gradient-to-r from-emerald-800 to-green-900 hover:from-emerald-800 hover:to-green-800 rounded-2xl",
    "light": "w-full px-10 py-3 bg-lime-100 hover:bg-emerald-100 rounded-2xl"
  }

  return (
    <Link href={redirect} className='w-full'>
      <Button className={styles[style]}>
        {children}
      </Button> 
    </Link>
  )
}