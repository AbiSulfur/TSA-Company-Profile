"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { CardCarousel } from "@/components/ui/CardCarousel"

import { HiUserCircle } from "react-icons/hi"

const leaders = [
    {
        name: "Director & CEO",
        role: "Chief Executive Officer",
        bio: "A visionary leader with 15+ years of experience in strategic consulting, government relations, and technology deployment. Oversees TSA's overall strategic direction and institutional partnerships.",
        expertise: ["Strategic Planning", "Government Relations", "Business Development"],
    },
    {
        name: "Chief Technology Officer",
        role: "CTO",
        bio: "Technology veteran with deep expertise in secure systems architecture, big data analytics, and defense technology. Leads TSA's technology division and oversees all digital platform development.",
        expertise: ["Systems Architecture", "Big Data Analytics", "Cybersecurity"],
    },
    {
        name: "Creative Director",
        role: "Head of GWI Collective",
        bio: "Award-winning creative professional with extensive experience in brand strategy, event design, and multimedia production. Leads the creative vision across all TSA's branding and production initiatives.",
        expertise: ["Brand Strategy", "Event Design", "Content Production"],
    },
    {
        name: "Head of Events",
        role: "Director of Event Management",
        bio: "Seasoned event management professional specializing in international forums, diplomatic events, and large-scale summits. Managed 50+ high-profile events across Indonesia and the ASEAN region.",
        expertise: ["International Events", "Protocol Management", "Logistics"],
    },
    {
        name: "Head of Government Affairs",
        role: "Director of Advocacy",
        bio: "Former government advisor with extensive networks across Indonesian ministries and international institutions. Leads TSA's government advocacy and public-private partnership initiatives.",
        expertise: ["Policy Advisory", "Diplomatic Relations", "Public Affairs"],
    },
    {
        name: "Studio Director",
        role: "Head of DNA Podcast Studio",
        bio: "Broadcast media professional with experience in television and podcast production. Oversees DNA Podcast Studio's operations, content strategy, and studio development.",
        expertise: ["Broadcast Production", "Content Strategy", "Studio Management"],
    },
]

export default function LeadershipPage() {
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
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase">Our Team</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5 max-w-3xl">
                            Leadership
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                            A team of seasoned professionals with deep expertise in technology, government affairs, creative strategy, and international event management.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Leadership Cards */}
            <SectionWrapper bg="white">
                <Container>
                    <CardCarousel>
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#f1f1f1] rounded-xl overflow-hidden border border-neutral-200/50 hover:shadow-lg transition-shadow h-full"
                            >
                                {/* Avatar placeholder */}
                                <div className="h-48 bg-gradient-to-br from-[#00174c] to-[#001a57] flex items-center justify-center">
                                    <HiUserCircle className="w-24 h-24 text-white/20" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-xl font-bold">{leader.name}</h3>
                                    <p className="text-[#e50113] text-sm font-medium mt-1 mb-3">{leader.role}</p>
                                    <p className="text-[#00174c]/60 text-sm leading-relaxed mb-4">{leader.bio}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {leader.expertise.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[10px] font-semibold tracking-wider uppercase bg-[#00174c]/5 text-[#00174c]/60 px-3 py-1 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </CardCarousel>
                </Container>
            </SectionWrapper>
        </>
    )
}
