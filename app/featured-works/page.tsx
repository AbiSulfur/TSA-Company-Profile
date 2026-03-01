"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { CardCarousel } from "@/components/ui/CardCarousel"

const caseStudies = [
    {
        title: "Jakarta Geopolitical Forum 2023",
        category: "Event Management",
        background: "The Indonesian government sought a premier platform for geopolitical dialogue that could attract high-level diplomats, policymakers, and thought leaders from across the Asia-Pacific region.",
        objective: "Design, organize, and execute a world-class geopolitical forum that positions Jakarta as a center for strategic dialogue and international cooperation.",
        execution: "TSA managed end-to-end event production including venue selection, speaker curation, diplomatic protocol management, live broadcast production, and VIP coordination across 15+ countries.",
        impact: "Successfully hosted 500+ attendees including ambassadors, ministers, and C-suite executives. Generated international media coverage and established the forum as an annual flagship event.",
    },
    {
        title: "Indonesia-Europe Investment Summit",
        category: "Event Management & Advocacy",
        background: "EuroCham Indonesia required a strategic partner to bridge the investment dialogue between Indonesian and European business communities at the highest governmental level.",
        objective: "Facilitate a high-profile investment summit that connects European investors with Indonesian government leadership and business opportunities.",
        execution: "Coordinated with multiple European embassies, Indonesian ministries, and EuroCham to produce a multi-track summit featuring bilateral meetings, panel discussions, and networking sessions.",
        impact: "Connected 300+ business leaders and government officials, resulting in multiple MoUs signed and ongoing trade dialogues worth significant investment commitments.",
    },
    {
        title: "Digital Platform for Law Enforcement",
        category: "Technology Solution",
        background: "An Indonesian law enforcement agency needed a secure, scalable digital communication and data management platform to support their operational requirements across multiple jurisdictions.",
        objective: "Build a government-grade digital platform with enterprise-level security, real-time data analytics, and mobile command capabilities.",
        execution: "Our technology team designed and deployed a custom platform featuring end-to-end encryption, big data analytics dashboards, mobile command integration, and UAV system connectivity.",
        impact: "Platform now supports thousands of active users across multiple operational units, significantly improving inter-agency coordination and response times.",
    },
    {
        title: "EU-ASEAN Green Diplomacy Week",
        category: "Event Management & Advocacy",
        background: "The European Union Delegation to ASEAN sought a professional partner to execute their flagship environmental diplomacy initiative across Southeast Asian nations.",
        objective: "Produce a week-long series of events focused on sustainable development, climate action, and green diplomacy between EU and ASEAN member states.",
        execution: "TSA managed multi-city event logistics, coordinated with EU delegations and ASEAN secretariat, produced video content, and handled all diplomatic protocol requirements.",
        impact: "Engaged 1,000+ participants across multiple events, strengthened EU-ASEAN environmental cooperation frameworks, and received commendation from participating diplomatic missions.",
    },
    {
        title: "Cybersecurity Sharing Session",
        category: "Technology & Event Management",
        background: "Government cybersecurity agencies required a confidential platform for intelligence sharing and best practice exchange among Southeast Asian law enforcement technology stakeholders.",
        objective: "Organize a closed-door, high-security intelligence sharing forum that facilitates cross-border cybersecurity cooperation.",
        execution: "Managed all aspects including secure venue setup, participant vetting, encrypted communication channels, expert speaker coordination, and classified document handling protocols.",
        impact: "Established an ongoing intelligence-sharing framework between participating agencies, improving regional cybersecurity cooperation and threat response capabilities.",
    },
    {
        title: "DNA Podcast Studio Launch",
        category: "Production House",
        background: "TSA identified a market gap for broadcast-quality podcast production services tailored to institutional and corporate clients in Indonesia.",
        objective: "Design and build a state-of-the-art podcast studio with multiple configurations to serve diverse content formats and high-profile guests.",
        execution: "Built three distinct studio setups: professional office interview format, round-table discussion configuration, and casual sofa talkshow format. Equipped with broadcast-grade audio/video equipment.",
        impact: "Produced 100+ episodes featuring government officials, business leaders, and thought leaders. Established DNA Podcast Studio as a premium production facility in Jakarta.",
    },
]

export default function FeaturedWorksPage() {
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
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase">Portfolio</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5 max-w-3xl">
                            Featured Works
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                            Selected case studies showcasing our strategic execution across technology, advocacy, event management, and creative production.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Case Studies */}
            <SectionWrapper bg="white">
                <Container>
                    <div className="space-y-8">
                        {caseStudies.map((study, i) => (
                            <motion.article
                                key={study.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-[#f1f1f1] rounded-xl p-8 md:p-10 border border-neutral-200/50 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.15em] uppercase">{study.category}</span>
                                        <h3 className="font-serif text-2xl md:text-3xl font-bold mt-1">{study.title}</h3>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-2">Background</h4>
                                        <p className="text-sm text-[#00174c]/60 leading-relaxed">{study.background}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-2">Objective</h4>
                                        <p className="text-sm text-[#00174c]/60 leading-relaxed">{study.objective}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00174c]/40 mb-2">Execution</h4>
                                        <p className="text-sm text-[#00174c]/60 leading-relaxed">{study.execution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#e50113]/60 mb-2">Impact</h4>
                                        <p className="text-sm text-[#00174c]/80 leading-relaxed font-medium">{study.impact}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </Container>
            </SectionWrapper>
        </>
    )
}
