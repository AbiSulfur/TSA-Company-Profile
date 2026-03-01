"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

import { HiLightBulb, HiGlobeAlt, HiLockClosed } from "react-icons/hi"
import { FaHandshake } from "react-icons/fa"

const timeline = [
    { year: "2012", title: "Founded in Jakarta", desc: "Tricatha Sempiternal Asia established as a strategic solutions company bridging technology, advocacy, and creative excellence." },
    { year: "2014", title: "Government Technology Pioneer", desc: "Secured first major digital platform contract for Indonesian law enforcement agencies, building secure communication infrastructure." },
    { year: "2016", title: "Big Data & Analytics Division", desc: "Expanded into big data analytics, software engineering, and hardware solutions for government intelligence operations." },
    { year: "2018", title: "International Events Portfolio", desc: "Managed first large-scale international forum, establishing TSA as a trusted event partner for embassies and international organizations." },
    { year: "2020", title: "GWI Collective Launch", desc: "Launched GWI Collective as the creative arm — covering activation, brand management, social media, and full-scale production services." },
    { year: "2022", title: "DNA Podcast Studio", desc: "Inaugurated DNA Podcast Studio with broadcast-level production capabilities and multiple professional studio setups." },
    { year: "2024", title: "16,000+ Network Milestone", desc: "Surpassed 16,000 industry contacts and expanded partnerships across ASEAN, European Union, and multinational corporate networks." },
]

const values = [
    { icon: <HiLightBulb className="w-8 h-8 text-[#e50113]" />, title: "Innovation Must Be Novel & Appropriate", desc: "We believe true innovation isn't just about being new — it must be contextually relevant, strategically sound, and impactful for our clients' missions." },
    { icon: <FaHandshake className="w-8 h-8 text-[#e50113]" />, title: "Strategic Partnership", desc: "We don't just serve clients; we become their strategic partners, embedding ourselves in their vision and delivering solutions that create lasting institutional value." },
    { icon: <HiGlobeAlt className="w-8 h-8 text-[#e50113]" />, title: "International Standards", desc: "Every engagement meets international-grade standards in execution, protocol, security, and professionalism — befitting the highest levels of government and diplomacy." },
    { icon: <HiLockClosed className="w-8 h-8 text-[#e50113]" />, title: "Trust & Confidentiality", desc: "Working with sensitive government agencies and law enforcement demands absolute integrity, discretion, and an unwavering commitment to data security." },
]

export default function AboutUsPage() {
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
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase">About Us</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5 max-w-3xl">
                            A Decade of Strategic Excellence
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                            Founded in 2012, Tricatha Sempiternal Asia has grown into Indonesia&apos;s premier strategic solutions provider, trusted by government agencies, international institutions, and multinational corporations.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Timeline */}
            <SectionWrapper bg="white">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">Our Journey</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3">Company Timeline</h2>
                    </div>
                    <div className="relative">
                        {/* Center line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#00174c]/10 md:-translate-x-px" />
                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                                >
                                    <div className="md:w-1/2 md:text-right pl-12 md:pl-0">
                                        {i % 2 === 0 ? (
                                            <div>
                                                <span className="text-[#e50113] font-serif font-bold text-2xl">{item.year}</span>
                                                <h3 className="font-serif text-xl font-bold mt-1 mb-2">{item.title}</h3>
                                                <p className="text-[#00174c]/60 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        ) : <div className="hidden md:block" />}
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#e50113] rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-white" />
                                    <div className="md:w-1/2 pl-12 md:pl-0">
                                        {i % 2 !== 0 ? (
                                            <div>
                                                <span className="text-[#e50113] font-serif font-bold text-2xl">{item.year}</span>
                                                <h3 className="font-serif text-xl font-bold mt-1 mb-2">{item.title}</h3>
                                                <p className="text-[#00174c]/60 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        ) : <div className="hidden md:block" />}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </SectionWrapper>

            {/* Philosophy */}
            <SectionWrapper bg="light">
                <Container>
                    <div className="text-center mb-14">
                        <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">Our Philosophy</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">
                            Innovation Must Be Novel &amp; Appropriate
                        </h2>
                        <p className="text-[#00174c]/60 text-lg max-w-2xl mx-auto">
                            Our guiding principle ensures every solution we deliver is not just innovative, but strategically relevant and impactful.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-xl p-8 border border-neutral-200/50 hover:shadow-lg transition-shadow"
                            >
                                <span className="text-3xl block mb-4">{value.icon}</span>
                                <h3 className="font-serif text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-[#00174c]/60 text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </SectionWrapper>

            {/* Positioning */}
            <SectionWrapper bg="navy">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">Our Positioning</span>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                                One Stop Online &amp; Offline Strategic Solution
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-6">
                                TSA uniquely combines the power of cutting-edge technology, deep government networks, and world-class creative execution under one roof. This integrated approach allows us to deliver comprehensive strategic solutions that no single-discipline agency can match.
                            </p>
                            <p className="text-white/60 leading-relaxed">
                                From building secure digital platforms for law enforcement to orchestrating prestigious international diplomatic forums, we bridge the gap between digital innovation and real-world institutional impact.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { num: "12+", label: "Years" },
                                { num: "16K+", label: "Industry Contacts" },
                                { num: "50+", label: "Major Events" },
                                { num: "3", label: "Continents Reached" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                                    <p className="text-3xl font-serif font-bold text-white mb-1">{stat.num}</p>
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
