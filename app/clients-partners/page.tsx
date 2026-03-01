"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

const clientCategories = [
    {
        category: "International Organizations",
        logos: ["ASEAN Secretariat", "European Union Delegation", "United Nations", "World Bank"],
    },
    {
        category: "Government & Ministries",
        logos: [
            "Ministry of Defense",
            "Ministry of Foreign Affairs",
            "Ministry of Communication",
            "Ministry of Trade",
            "National Police Headquarters",
            "National Cyber & Crypto Agency",
        ],
    },
    {
        category: "Embassies & Diplomatic Missions",
        logos: [
            "British Embassy Jakarta",
            "French Embassy Jakarta",
            "German Embassy Jakarta",
            "Netherlands Embassy Jakarta",
            "Australian Embassy Jakarta",
            "Japan Embassy Jakarta",
            "Canadian Embassy Jakarta",
            "Swiss Embassy Jakarta",
        ],
    },
    {
        category: "Chambers & Associations",
        logos: [
            "EuroCham Indonesia",
            "British Chamber (BritCham)",
            "American Chamber (AmCham)",
            "Japan External Trade Organization (JETRO)",
        ],
    },
    {
        category: "Multinational Corporations",
        logos: [
            "Fortune 500 Technology Companies",
            "International Financial Institutions",
            "Global Consulting Firms",
            "Major Telecommunications Providers",
        ],
    },
]

export default function ClientsPartnersPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#00174c] pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00174c] via-[#001a57] to-[#000d30]" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase">Our Network</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5 max-w-3xl">
                            Clients &amp; Partners
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                            Trusted by government agencies, international institutions, embassies, chambers of commerce, and multinational corporations.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Client Grid by Category */}
            <SectionWrapper bg="white">
                <Container>
                    <div className="space-y-16">
                        {clientCategories.map((cat, ci) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: ci * 0.1 }}
                            >
                                <h3 className="font-serif text-xl font-bold mb-6 pb-3 border-b border-[#00174c]/10">
                                    {cat.category}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {cat.logos.map((logo) => (
                                        <div
                                            key={logo}
                                            className="flex items-center justify-center h-24 bg-[#f1f1f1] rounded-lg border border-neutral-200/50 hover:border-[#e50113]/20 hover:shadow-md transition-all px-4"
                                        >
                                            <span className="text-[#00174c]/50 font-semibold text-xs text-center tracking-wide">{logo}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </SectionWrapper>

            {/* Network Stats */}
            <SectionWrapper bg="navy">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                            A Network Built on Trust
                        </h2>
                        <p className="text-white/50 text-lg leading-relaxed mb-12">
                            Over 16,000 industry contacts across government, diplomatic, and corporate sectors — built through years of delivering excellence and maintaining the highest standards of confidentiality and professionalism.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { num: "16,000+", label: "Industry Contacts" },
                                { num: "30+", label: "Embassy Relations" },
                                { num: "10+", label: "Ministry Partnerships" },
                                { num: "50+", label: "Corporate Clients" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <p className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">{stat.num}</p>
                                    <p className="text-white/40 text-xs tracking-wider uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </SectionWrapper>
        </>
    )
}
