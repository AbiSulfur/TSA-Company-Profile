"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/utils/cn"

export interface SectionWrapperProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode
    bg?: "light" | "navy" | "white"
    padded?: boolean
}

const bgMap = {
    light: "bg-[#f1f1f1]",
    navy: "bg-[#00174c] text-white",
    white: "bg-white",
}

export function SectionWrapper({
    className,
    children,
    bg = "light",
    padded = true,
    ...props
}: SectionWrapperProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
                bgMap[bg],
                padded && "py-16 md:py-24 lg:py-32",
                className
            )}
            {...props}
        >
            {children}
        </motion.section>
    )
}
