"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

interface GenericPageLayoutProps {
    title: string;
    subtitle?: string;
    description?: string;
}

export function GenericPageLayout({ title, subtitle, description }: GenericPageLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen pt-24 bg-white">
            <SectionWrapper className="bg-[#00174c] text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e50113]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        {subtitle && (
                            <div className="font-medium text-[#e50113] tracking-wider uppercase text-sm mb-4">
                                {subtitle}
                            </div>
                        )}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                                {description}
                            </p>
                        )}
                    </motion.div>
                </Container>
            </SectionWrapper>

            <SectionWrapper className="py-24">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-20 bg-neutral-50 rounded-2xl border border-neutral-100">
                        <div className="w-16 h-16 bg-[#e50113]/10 text-[#e50113] rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-[#00174c] mb-3">Content Coming Soon</h2>
                        <p className="text-neutral-500">This section is currently being updated to bring you the best experience and content. Please check back later.</p>
                    </div>
                </Container>
            </SectionWrapper>
        </div>
    )
}
