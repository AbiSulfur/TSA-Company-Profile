"use client"

import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi"
import { useLanguage } from "@/i18n/LanguageContext"

const footerLinks = [
    {
        titleKey: "nav.business_group",
        links: [
            { labelKey: "nav.bg.event_organizer", href: "/business-group/event-organizer" },
            { labelKey: "nav.bg.event_management", href: "/business-group/event-management" },
            { labelKey: "nav.bg.gov_advocacy", href: "/business-group/government-advocacy" },
            { labelKey: "nav.bg.it", href: "/business-group/it" },
        ],
    },
    {
        titleKey: "nav.brands",
        links: [
            { labelKey: "nav.brand.tsa", href: "/brands/tsa" },
            { labelKey: "nav.brand.gwi", href: "/brands/gwi" },
            { labelKey: "nav.brand.govadv", href: "/brands/govadv" },
            { labelKey: "nav.brand.dna", href: "/brands/dna-studio" },
            { labelKey: "nav.brand.ek", href: "/brands/enchantee-kitchen" },
        ],
    },
    {
        titleKey: "footer.groups.explore",
        links: [
            { labelKey: "nav.article", href: "/article" },
            { labelKey: "nav.career", href: "/career/internship" },
            { labelKey: "nav.events", href: "/events" },
            { labelKey: "nav.contact", href: "/contact" },
            { labelKey: "nav.survey", href: "/survey" },
        ],
    },
]

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-[#00174c] text-white">
            <Container className="pt-16 pb-8">
                {/* Top section - Flexible layout */}
                <div className="flex flex-wrap gap-x-12 gap-y-10 pb-12 border-b border-white/10">
                    {/* Brand block */}
                    <div className="w-full lg:flex-[2] min-w-[280px] max-w-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#e50113] rounded-sm flex items-center justify-center">
                                <span className="text-white font-serif font-bold text-lg">T</span>
                            </div>
                            <div>
                                <p className="font-serif font-bold text-lg leading-tight">TSA</p>
                                <p className="text-[9px] tracking-[0.2em] uppercase text-white/50">Tricatha Sempiternal Asia</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                            {t('footer.desc')}
                        </p>
                        <div className="space-y-3 text-sm text-white/50">
                            <p className="flex items-center gap-3">
                                <HiLocationMarker className="text-[#e50113] flex-shrink-0" />
                                {t('footer.address')}
                            </p>
                            <p className="flex items-center gap-3">
                                <HiPhone className="text-[#e50113]" />
                                +62 812 1000 784
                            </p>
                            <p className="flex items-center gap-3">
                                <HiMail className="text-[#e50113]" />
                                de@sempiternalasia.com
                            </p>
                        </div>
                    </div>

                    {/* Link columns - also using flex-wrap container for granular wrapping */}
                    <div className="flex flex-wrap gap-x-12 gap-y-10 flex-[3]">
                        {footerLinks.map((group) => (
                            <div key={group.titleKey} className="min-w-[140px]">
                                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                                    {t(group.titleKey)}
                                </h4>
                                <ul className="space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-white/60 hover:text-[#e50113] transition-colors"
                                            >
                                                {t(link.labelKey)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30 text-center md:text-left">
                        &copy; {new Date().getFullYear()} {t('footer.rights')}
                    </p>
                    <div className="flex items-center gap-6 text-xs text-white/30">
                        <Link href="#" className="hover:text-white/60 transition-colors">{t('footer.privacy')}</Link>
                        <Link href="#" className="hover:text-white/60 transition-colors">{t('footer.terms')}</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
