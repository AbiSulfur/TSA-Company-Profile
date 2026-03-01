"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { cn } from "@/utils/cn"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Featured Works", href: "/featured-works" },
    { label: "Leadership", href: "/leadership" },
    { label: "Clients & Partners", href: "/clients-partners" },
    { label: "Contact", href: "/contact" },
]

export function Header() {
    const [scrolled, setScrolled] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    React.useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50"
                    : "bg-transparent"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e50113] rounded-sm flex items-center justify-center">
                                <span className="text-white font-serif font-bold text-lg md:text-xl tracking-tight">T</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "font-serif font-bold text-base md:text-lg tracking-tight leading-tight transition-colors",
                                scrolled ? "text-[#00174c]" : "text-white"
                            )}>
                                TSA
                            </span>
                            <span className={cn(
                                "text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-medium leading-tight transition-colors",
                                scrolled ? "text-[#00174c]/60" : "text-white/70"
                            )}>
                                Tricatha Sempiternal Asia
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-3 xl:px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-md hover:bg-[#e50113]/10",
                                    scrolled
                                        ? "text-[#00174c] hover:text-[#e50113]"
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={cn(
                            "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-md transition-colors",
                            scrolled ? "text-[#00174c]" : "text-white"
                        )}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-current"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-current"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-current"
                        />
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100dvh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-0 top-16 bg-[#00174c] z-40 overflow-y-auto"
                    >
                        <Container className="pt-8 pb-12">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/5 rounded-lg text-lg font-medium transition-colors border-b border-white/5"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
