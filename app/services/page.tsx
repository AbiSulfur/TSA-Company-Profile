"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

import {
    HiShieldCheck,
    HiLibrary,
    HiCalendar,
    HiLightningBolt,
    HiDeviceMobile,
    HiVideoCamera,
    HiMicrophone
} from "react-icons/hi"
import { FaBullseye } from "react-icons/fa"

const services = [
    {
        id: "technology",
        icon: <HiShieldCheck className="w-8 h-8 text-[#e50113]" />,
        title: "Technology Solution",
        tagline: "Secure digital infrastructure for institutional excellence",
        capabilities: [
            "Digital Platform Development for Law Enforcement",
            "Big Data Analytics & Intelligence Systems",
            "Software & Hardware Engineering",
            "UAV (Unmanned Aerial Vehicle) Systems",
            "Mobile Command Systems",
            "Cybersecurity Infrastructure",
            "Government-Grade Secure Communications",
            "System Integration & IT Consulting",
        ],
        description: "We design, develop, and deploy mission-critical technology solutions for Indonesia's law enforcement agencies and government institutions. From building secure communication platforms to developing advanced surveillance and analytics systems, our technology division operates at the highest level of security and reliability.",
    },
    {
        id: "advocacy",
        title: "Government Advocacy",
        icon: <HiLibrary className="w-8 h-8 text-[#e50113]" />,
        tagline: "Strategic government liaison and policy partnership",
        capabilities: [
            "Government Relations & Liaison",
            "Policy Advisory & Regulatory Navigation",
            "Ministerial & Inter-Agency Coordination",
            "International Institutional Partnerships",
            "Embassy & Diplomatic Relations",
            "Public-Private Partnership Development",
        ],
        description: "TSA's deep-rooted relationships with Indonesian government ministries, law enforcement agencies, and international institutions enable us to facilitate strategic partnerships, navigate complex regulatory landscapes, and coordinate multi-stakeholder initiatives at the highest levels of government.",
    },
    {
        id: "events",
        title: "Event Management",
        icon: <HiCalendar className="w-8 h-8 text-[#e50113]" />,
        tagline: "World-class event execution with diplomatic protocol",
        capabilities: [
            "International Forums & Summits",
            "Diplomatic & Protocol Events",
            "Industry Conferences & Symposiums",
            "Gala Dinners & VIP Receptions",
            "Cross-Ministry Coordination Events",
            "Hybrid & Virtual Event Production",
            "Venue Selection & Logistics Management",
            "Security & Protocol Coordination",
        ],
        description: "With a portfolio spanning the Jakarta Geopolitical Forum, Asia Collective Summit, Indonesia-Europe Investment Summit, and EU-ASEAN Green Diplomacy Week, we bring unmatched expertise in producing high-profile international events that require meticulous attention to protocol, security, and stakeholder management.",
    },
    {
        id: "activation",
        title: "Activation",
        icon: <HiLightningBolt className="w-8 h-8 text-[#e50113]" />,
        tagline: "Strategic brand activation and experiential marketing",
        capabilities: [
            "Brand Activation Campaigns",
            "Experiential Marketing",
            "Trade Show & Exhibition Management",
            "Product Launch Events",
            "Corporate Engagement Programs",
            "Sponsorship Activation",
        ],
        description: "Our activation team creates immersive brand experiences that connect institutions and corporations with their target audiences. We specialize in high-impact activations that drive engagement, build awareness, and create measurable results for government and corporate clients.",
    },
    {
        id: "brand",
        title: "Brand Management",
        icon: <FaBullseye className="w-8 h-8 text-[#e50113]" />,
        tagline: "Institutional brand strategy and identity development",
        capabilities: [
            "Brand Strategy & Positioning",
            "Visual Identity & Design Systems",
            "Brand Guidelines & Governance",
            "Corporate Communications Strategy",
            "Reputation Management",
            "Stakeholder Messaging & Narrative Development",
        ],
        description: "We help government agencies, institutions, and corporations develop and maintain strong, credible brand identities. Our brand management approach ensures consistent, authoritative messaging across all touchpoints, building trust and recognition among key stakeholders.",
    },
    {
        id: "social-media",
        title: "Social Media Management",
        icon: <HiDeviceMobile className="w-8 h-8 text-[#e50113]" />,
        tagline: "Strategic digital presence for institutional credibility",
        capabilities: [
            "Social Media Strategy & Planning",
            "Content Creation & Curation",
            "Community Management & Engagement",
            "Social Listening & Analytics",
            "Crisis Communication Management",
            "Influencer & KOL Partnership",
        ],
        description: "Our social media management services are tailored for institutional clients who require a professional, credible digital presence. We develop content strategies and manage platforms with the gravitas and precision that government and corporate entities demand.",
    },
    {
        id: "production",
        title: "Production House",
        icon: <HiVideoCamera className="w-8 h-8 text-[#e50113]" />,
        tagline: "Full-scale multimedia production through GWI Collective",
        capabilities: [
            "Corporate Video Production",
            "Documentary & Feature Films",
            "Commercial & Campaign Videos",
            "Motion Graphics & Animation",
            "Photography & Visual Content",
            "Live Streaming & Broadcast Production",
            "Audio Production & Sound Design",
        ],
        description: "Through our sub-brand GWI Collective, we provide end-to-end production services. From concept to delivery, our production house creates compelling visual content that meets the standards expected by institutional clients and international organizations.",
    },
    {
        id: "dna-podcast",
        title: "DNA Podcast Studio",
        icon: <HiMicrophone className="w-8 h-8 text-[#e50113]" />,
        tagline: "Broadcast-level podcast production facility",
        capabilities: [
            "Office Setup Studio — Professional interview format",
            "Round Table Interview Studio — Panel discussion configuration",
            "Sofa Talkshow Studio — Casual broadcast-quality format",
            "Full Audio Post-Production & Mastering",
            "Video Podcast Production (Multi-Camera)",
            "Content Strategy & Episode Planning",
            "Distribution & Platform Management",
        ],
        description: "DNA Podcast Studio offers broadcast-level podcast production with multiple professional studio setups. Whether it's a high-profile interview, a panel discussion, or a relaxed talkshow format, our studios provide the production quality and ambiance that institutional guests expect.",
    },
]

export default function ServicesPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

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
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase">Our Services</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5 max-w-3xl">
                            Comprehensive Strategic Solutions
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                            Eight specialized verticals working in concert to deliver holistic solutions for government, institutional, and corporate clients.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Services Accordion */}
            <SectionWrapper bg="white">
                <Container>
                    <div className="space-y-4">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-[#f1f1f1] rounded-xl overflow-hidden border border-neutral-200/50 hover:border-[#e50113]/20 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center gap-6 p-6 md:p-8 text-left"
                                >
                                    <span className="text-3xl flex-shrink-0">{service.icon}</span>
                                    <div className="flex-grow">
                                        <h3 className="font-serif text-xl md:text-2xl font-bold">{service.title}</h3>
                                        <p className="text-[#00174c]/50 text-sm mt-1">{service.tagline}</p>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0 text-[#e50113]"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-2">
                                                <div className="border-t border-[#00174c]/10 pt-6">
                                                    <p className="text-[#00174c]/70 text-sm leading-relaxed mb-6">{service.description}</p>
                                                    <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#e50113] mb-4">Key Capabilities</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {service.capabilities.map((cap) => (
                                                            <li key={cap} className="flex items-start gap-2 text-sm text-[#00174c]/60">
                                                                <span className="text-[#e50113] mt-1 flex-shrink-0">▸</span>
                                                                {cap}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </SectionWrapper>
        </>
    )
}
