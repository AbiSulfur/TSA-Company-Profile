import * as React from "react"
import { cn } from "@/utils/cn"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn("container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl", className)}
            {...props}
        >
            {children}
        </div>
    )
}
