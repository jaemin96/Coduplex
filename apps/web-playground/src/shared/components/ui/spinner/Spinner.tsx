import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin inline-block rounded-full border-2 border-t-2 border-gray-300",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
      color: {
        gray: "border-gray-300 border-t-gray-600",
        blue: "border-blue-300 border-t-blue-600",
        red: "border-red-300 border-t-red-600",
      },
    },
    defaultVariants: {
      size: "md",
      color: "gray",
    },
  }
)

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  every?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return <span className={cn(spinnerVariants({ size, color }))} />
}

export default Spinner;