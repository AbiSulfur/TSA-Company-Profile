"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { HiChevronDown } from "react-icons/hi"
import { Container } from "@/components/ui/Container"
import { useLanguage } from "@/i18n/LanguageContext"
import { cn } from "@/utils/cn"

type NavItem = {
    key: string;
    href?: string;
    children?: { key: string; href: string }[];
}

const navLinks: NavItem[] = [
    { key: "nav.home", href: "/" },
    { 
        key: "nav.business_group", 
        children: [
            { key: "nav.bg.event_organizer", href: "/business-group/event-organizer" },
            { key: "nav.bg.event_management", href: "/business-group/event-management" },
            { key: "nav.bg.gov_advocacy", href: "/business-group/government-advocacy" },
            { key: "nav.bg.it", href: "/business-group/it" }
        ]
    },
    { 
        key: "nav.brands", 
        children: [
            { key: "nav.brand.tsa", href: "/brands/tsa" },
            { key: "nav.brand.gwi", href: "/brands/gwi" },
            { key: "nav.brand.govadv", href: "/brands/govadv" },
            { key: "nav.brand.dna", href: "/brands/dna-studio" },
            { key: "nav.brand.ek", href: "/brands/enchantee-kitchen" }
        ]
    },
    { key: "nav.article", href: "/article" },
    { 
        key: "nav.career", 
        children: [
            { key: "nav.career_items.internship", href: "/career/internship" }
        ]
    },
    { key: "nav.contact", href: "/contact" },
    { key: "nav.events", href: "/events" },
    { key: "nav.survey", href: "/survey" },
]

export function Header() {
    const { language, setLanguage, t } = useLanguage()
    const [scrolled, setScrolled] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null)

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
                    <div className="hidden lg:flex items-center gap-0.5 xl:gap-2">
                        {navLinks.map((link) => (
                            <div key={link.key} className="relative group/nav z-50">
                                {link.children ? (
                                    <>
                                        <button className={cn(
                                            "px-3 xl:px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-md group-hover/nav:bg-[#e50113]/10 flex items-center gap-1",
                                            scrolled ? "text-[#00174c] hover:text-[#e50113]" : "text-white/90 hover:text-white"
                                        )}>
                                            {t(link.key)}
                                            <HiChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover/nav:rotate-180" />
                                        </button>
                                        <div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-xl shadow-2xl border border-neutral-100 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 py-3 transform origin-top -translate-y-2 group-hover/nav:translate-y-0">
                                            {/* Invisible bridge to prevent hover loss */}
                                            <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                                            {link.children.map(child => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-5 py-2.5 text-[13px] font-medium text-[#00174c]/80 hover:text-[#e50113] hover:bg-neutral-50 hover:pl-6 transition-all"
                                                >
                                                    {t(child.key)}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href!}
                                        className={cn(
                                            "block px-3 xl:px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-md hover:bg-[#e50113]/10",
                                            scrolled ? "text-[#00174c] hover:text-[#e50113]" : "text-white/90 hover:text-white"
                                        )}
                                    >
                                        {t(link.key)}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Desktop Language Switcher */}
                        <div className="flex items-center ml-2 bg-neutral-500/10 rounded-full p-1 border border-neutral-500/20">
                            <button
                                onClick={() => setLanguage('en')}
                                className={cn(
                                    "px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-300",
                                    language === 'en'
                                        ? "bg-[#e50113] text-white shadow-sm"
                                        : scrolled ? "text-[#00174c]/60 hover:text-[#00174c]" : "text-white/50 hover:text-white"
                                )}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('id')}
                                className={cn(
                                    "px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-300",
                                    language === 'id'
                                        ? "bg-[#e50113] text-white shadow-sm"
                                        : scrolled ? "text-[#00174c]/60 hover:text-[#00174c]" : "text-white/50 hover:text-white"
                                )}
                            >
                                ID
                            </button>
                        </div>
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
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.key}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        {link.children ? (
                                            <div className="rounded-lg mb-1 overflow-hidden transition-colors">
                                                <button
                                                    onClick={() => setOpenSubMenu(openSubMenu === link.key ? null : link.key)}
                                                    className={cn(
                                                        "w-full flex items-center justify-between py-3.5 px-4 text-left text-lg font-medium transition-colors border-b border-white/5",
                                                        openSubMenu === link.key ? "text-[#e50113] bg-white/5" : "text-white/90 hover:text-white hover:bg-white/5"
                                                    )}
                                                >
                                                    {t(link.key)}
                                                    <HiChevronDown className={cn("w-5 h-5 transition-transform duration-300", openSubMenu === link.key ? "rotate-180 text-[#e50113]" : "text-white/40")} />
                                                </button>
                                                <AnimatePresence>
                                                    {openSubMenu === link.key && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="bg-white/5"
                                                        >
                                                            {link.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="block py-3 pl-8 pr-4 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-[#e50113]"
                                                                >
                                                                    {t(child.key)}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href!}
                                                onClick={() => setMobileOpen(false)}
                                                className="block py-3.5 px-4 text-white/90 hover:text-white hover:bg-white/5 rounded-lg text-lg font-medium transition-colors border-b border-white/5 mb-1"
                                            >
                                                {t(link.key)}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}

                                {/* Mobile Language Switcher */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-6 px-4"
                                >
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => {
                                                setLanguage('en')
                                                setMobileOpen(false)
                                            }}
                                            className={cn(
                                                "flex-1 py-2 text-sm font-bold rounded-lg transition-colors border",
                                                language === 'en'
                                                    ? "bg-[#e50113] border-[#e50113] text-white"
                                                    : "border-white/20 text-white/60 hover:bg-white/5"
                                            )}
                                        >
                                            English
                                        </button>
                                        <button
                                            onClick={() => {
                                                setLanguage('id')
                                                setMobileOpen(false)
                                            }}
                                            className={cn(
                                                "flex-1 py-2 text-sm font-bold rounded-lg transition-colors border",
                                                language === 'id'
                                                    ? "bg-[#e50113] border-[#e50113] text-white"
                                                    : "border-white/20 text-white/60 hover:bg-white/5"
                                            )}
                                        >
                                            Bahasa Indonesia
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
