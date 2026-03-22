import React from "react"
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from "@/lib/utils";
import { useFormField } from "./hooks/useFormField";

export const FormLabel = React.forwardRef<
  HTMLLabelElement, 
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <LabelPrimitive.Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

