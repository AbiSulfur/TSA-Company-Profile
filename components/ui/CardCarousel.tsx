"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/utils/cn"

interface CardCarouselProps {
    children: React.ReactNode
    className?: string
}

export function CardCarousel({ children, className }: CardCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    })
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    React.useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className={cn("relative", className)}>
            {/* Desktop: grid, Mobile/Tablet: carousel */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {children}
            </div>
            <div className="lg:hidden">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {React.Children.map(children, (child, index) => (
                            <div key={index} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_48%]">
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                    <button
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!canScrollPrev}
                        className="w-10 h-10 rounded-full border border-[#00174c]/20 flex items-center justify-center disabled:opacity-30 hover:bg-[#00174c] hover:text-white transition-colors"
                        aria-label="Previous"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={() => emblaApi?.scrollNext()}
                        disabled={!canScrollNext}
                        className="w-10 h-10 rounded-full border border-[#00174c]/20 flex items-center justify-center disabled:opacity-30 hover:bg-[#00174c] hover:text-white transition-colors"
                        aria-label="Next"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
