import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-gradient-button hover:bg-gradient-button-hover text-brand-text shadow-accent hover:shadow-accent-strong',
        primary: 'bg-gradient-primary text-white hover:opacity-90 shadow-primary hover:shadow-primary-strong',
        secondary: 'bg-brand-secondary text-brand-text hover:bg-gray-100 border border-gray-200',
        outline: 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-primary',
        ghost: 'text-brand-primary hover:bg-brand-primary/10',
        link: 'underline-offset-4 hover:underline text-brand-accent hover:text-brand-accentDark'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }