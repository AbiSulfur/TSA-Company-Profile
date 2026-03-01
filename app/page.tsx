"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Button } from "@/components/ui/Button"
import { CardCarousel } from "@/components/ui/CardCarousel"

import {
  HiShieldCheck,
  HiLibrary,
  HiCalendar,
  HiLightningBolt,
  HiVideoCamera,
  HiMicrophone
} from "react-icons/hi"

/* ─── Animation Variants ─── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
}

/* ─── Data ─── */
const capabilities = [
  {
    icon: <HiShieldCheck className="w-8 h-8 text-[#e50113]" />,
    title: "Digital Technology",
    desc: "Big data analytics, software & hardware engineering, UAV systems, mobile command systems, and platform development for law enforcement.",
  },
  {
    icon: <HiLibrary className="w-8 h-8 text-[#e50113]" />,
    title: "Government Advocacy",
    desc: "Strategic liaison with government ministries, law enforcement agencies, and international institutions for policy and partnership development.",
  },
  {
    icon: <HiCalendar className="w-8 h-8 text-[#e50113]" />,
    title: "Event Management",
    desc: "End-to-end execution of high-level international forums, summits, and diplomatic events with precision and protocol excellence.",
  },
  {
    icon: <HiLightningBolt className="w-8 h-8 text-[#e50113]" />,
    title: "Activation & Brand Management",
    desc: "Strategic brand positioning, social media management, and activation campaigns for institutional and corporate clients.",
  },
  {
    icon: <HiVideoCamera className="w-8 h-8 text-[#e50113]" />,
    title: "Production House",
    desc: "Full-scale video production, multimedia content creation, and campaign material development through GWI Collective.",
  },
  {
    icon: <HiMicrophone className="w-8 h-8 text-[#e50113]" />,
    title: "DNA Podcast Studio",
    desc: "Broadcast-level podcast production with multiple studio setups — office interviews, round table discussions, and sofa talkshows.",
  },
]

const featuredEvents = [
  {
    title: "Jakarta Geopolitical Forum",
    year: "2023",
    desc: "A premier platform for geopolitical dialogue bringing together diplomats, policymakers, and thought leaders from across the Asia-Pacific region.",
  },
  {
    title: "Asia Collective Summit",
    year: "2023",
    desc: "Multi-stakeholder summit fostering cross-sector collaboration between government agencies, private enterprises, and international organizations.",
  },
  {
    title: "Indonesia-Europe Investment Summit",
    year: "2022",
    desc: "Organized in partnership with EuroCham to facilitate trade and investment dialogue between Indonesian and European business communities.",
  },
  {
    title: "EU-ASEAN Green Diplomacy Week",
    year: "2022",
    desc: "Environmental diplomacy initiative in collaboration with the European Union and ASEAN member states focused on sustainable development.",
  },
  {
    title: "Cybersecurity Sharing Session",
    year: "2023",
    desc: "Closed-door intelligence sharing forum for government cybersecurity agencies and law enforcement technology stakeholders.",
  },
  {
    title: "International Cross-Ministry Forum",
    year: "2024",
    desc: "High-level inter-ministerial forum addressing transnational policy coordination across multiple government bodies.",
  },
]

const clientLogos = [
  "ASEAN Secretariat",
  "European Union",
  "EuroCham Indonesia",
  "Ministry of Defense",
  "Ministry of Foreign Affairs",
  "National Police HQ",
  "British Embassy",
  "French Embassy",
  "German Embassy",
  "Netherlands Embassy",
  "Australian Embassy",
  "Japan Embassy",
]

const stats = [
  { number: "12+", label: "Years of Experience" },
  { number: "16,000+", label: "Industry Contacts" },
  { number: "50+", label: "Major Events Managed" },
  { number: "8", label: "Service Verticals" },
]

export default function HomePage() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#00174c] overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00174c] via-[#001a57] to-[#000d30]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#e50113] to-transparent" />

        <Container className="relative z-10 pt-28 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mb-6"
            >
              <span className="inline-block text-[#e50113] text-xs font-semibold tracking-[0.25em] uppercase border border-[#e50113]/30 px-4 py-1.5 rounded-full">
                One Stop Online &amp; Offline Strategic Solution
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Bridging Technology,{" "}
              <span className="text-[#e50113]">Advocacy</span>, and Creative
              Excellence
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            >
              Since 2012, Tricatha Sempiternal Asia has been the trusted strategic
              partner for government agencies, international institutions, and
              multinational corporations across Indonesia and the ASEAN region.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="text-sm tracking-wide">
                  Explore Our Capabilities
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-sm tracking-wide border-white/30 text-white hover:bg-white hover:text-[#00174c]">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10 border-t border-white/10 pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:px-6">
                <p className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{stat.number}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ════════════ CORE CAPABILITIES ════════════ */}
      <SectionWrapper bg="white">
        <Container>
          <div className="text-center mb-14">
            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">What We Do</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Core Capabilities
            </h2>
            <p className="text-[#00174c]/60 text-lg max-w-2xl mx-auto">
              A comprehensive suite of strategic solutions designed for institutional excellence.
            </p>
          </div>
          <CardCarousel>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#f1f1f1] rounded-xl p-8 hover:bg-[#00174c] hover:text-white transition-all duration-500 border border-transparent hover:border-[#e50113]/20 h-full"
              >
                <span className="text-4xl mb-5 block">{cap.icon}</span>
                <h3 className="font-serif text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-80">{cap.desc}</p>
              </motion.div>
            ))}
          </CardCarousel>
        </Container>
      </SectionWrapper>

      {/* ════════════ FEATURED EVENTS ════════════ */}
      <SectionWrapper bg="navy">
        <Container>
          <div className="text-center mb-14">
            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">Track Record</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white">
              Featured Events
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              A selection of high-profile events and forums we have successfully managed.
            </p>
          </div>
          <CardCarousel>
            {featuredEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#e50113]/40 transition-all duration-300 h-full"
              >
                <span className="text-[#e50113] text-xs font-bold tracking-wider">{event.year}</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-3 text-white">{event.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </CardCarousel>
        </Container>
      </SectionWrapper>

      {/* ════════════ CLIENTS LOGO CAROUSEL ════════════ */}
      <SectionWrapper bg="white">
        <Container>
          <div className="text-center mb-14">
            <span className="text-[#e50113] text-xs font-semibold tracking-[0.2em] uppercase">Trusted By</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Our Clients &amp; Partners
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-[#f1f1f1] rounded-lg border border-neutral-200/50"
                >
                  <span className="text-[#00174c]/50 font-semibold text-sm whitespace-nowrap tracking-wide">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ════════════ CTA ════════════ */}
      <SectionWrapper bg="navy" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00174c] via-[#001a57] to-[#000d30]" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Strategic Vision?
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Partner with TSA for institutional-grade technology, advocacy, and creative solutions. Let&apos;s build something impactful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-sm tracking-wide">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/featured-works">
                <Button variant="outline" size="lg" className="text-sm tracking-wide border-white/30 text-white hover:bg-white hover:text-[#00174c]">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
